const express = require("express");
const {
  httpGetAllUsers,
  httpAddNewUser,
  httpFindUser,
  httpLoginUser,
  httpRegisterUser,
  httpGetUsersCount,
  httpDeleteUser,
} = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpGetAllUsers);
usersRouter.get("/:id", httpFindUser);
usersRouter.get("/get/count", httpGetUsersCount);
usersRouter.post("/", httpAddNewUser);
usersRouter.post("/login", httpLoginUser);
usersRouter.post("/register", httpRegisterUser);
usersRouter.delete("/:id", httpDeleteUser);

module.exports = usersRouter;
