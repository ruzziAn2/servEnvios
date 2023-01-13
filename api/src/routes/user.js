const express = require("express");
const router = express.Router();

import * as UserController from "../controllers/user";
const User = require("../models/User");

User.get("/", UserController.fetchUsers);

User.get("/:id", UserController.fetchUser);

User.post("/createUser", UserController.createUser);

User.put("/:id", UserController.updateUser);

User.delete("/:id", UserController.deleteUser);



module.exports = router;
