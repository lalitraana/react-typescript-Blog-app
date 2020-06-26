const Post = require("../models/User_model");

async function getAll(req, res, next) {
  try {
    const post = await Post.find();
    return res.json(post);
  } catch (e) {
    return next(e);
  }
}

async function create(req, res) {
  let post = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });
  post
    .save()
    .then((post) => {
      res.status(200).json({
        msg: "post added successfully",
        status: 1,
      });
    })
    .catch((err) => {
      res.status(200).send({
        msg: "Adding new post failed",
        status: 0,
      });
    });
}

async function remove(req, res) {
  if (req.body.id) {
    let post = await Post.deleteOne({ _id: req.body.id });
    return res.json(post);
  } else {
    console.log("User id is not comming from front end");
  }
}

function getPost(req, res) {
  Post.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
}

module.exports = {
  getAll,
  create,
  remove,
  getPost,
};
