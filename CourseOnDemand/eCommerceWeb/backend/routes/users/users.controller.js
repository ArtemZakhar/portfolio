const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  getAllUsers,
  addNewUser,
  findUser,
  findOneByEmail,
  registerNewUser,
  usersCount,
  deleteUser,
} = require("../../models/users.model");

async function httpGetAllUsers(req, res) {
  await getAllUsers()
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
}

async function httpAddNewUser(req, res) {
  const user = req.body;

  await addNewUser(user)
    .then((user) => {
      return res.status(200).json({ success: true, newUser: user });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
}

async function httpRegisterUser(req, res) {
  const user = req.body;
  await registerNewUser(user)
    .then((user) => {
      return res.status(200).json({ success: true, newUser: user });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
}

async function httpFindUser(req, res) {
  await findUser(req.params.id)
    .then((user) => {
      return res.status(200).json({ success: true, newUser: user });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
}

async function httpLoginUser(req, res) {
  const secret = process.env.secret;
  await findOneByEmail(req.body.email)
    .then((user) => {
      if (user && bcryptjs.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
          {
            userId: user.id,
            isAdmin: user.isAdmin,
          },
          secret,
          { expiresIn: "1d", algorithm: "HS256" }
        );
        res
          .status(200)
          .json({ success: "user Authenticated", user: user.email, token: token, secret: secret });
      } else {
        res.status(400).json({ success: "password is wrong" });
      }
    })
    .catch((err) => {
      res.status(400).json({ success: "The user was not found", error: err });
    });
}

async function httpGetUsersCount(req, res) {
  await usersCount()
    .then((count) => {
      res.status(200).json({ usersCount: count });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
}

async function httpDeleteUser(req, res) {
  await deleteUser(req.params.id)
    .then((info) => {
      return res.status(200).json({ success: true });
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
}

module.exports = {
  httpGetAllUsers,
  httpAddNewUser,
  httpFindUser,
  httpLoginUser,
  httpRegisterUser,
  httpGetUsersCount,
  httpDeleteUser,
};
