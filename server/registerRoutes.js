const express = require("express");
const router = express.Router();
const UserController = require("./users/users.controller");
const usersController = require("./users/users.controller");
router.post("/add", UserController.create);
router.post("/remove", UserController.remove);
router.get("/getAll", usersController.getAll);
router.get("/getPost/:id", usersController.getPost);
module.exports = router;
