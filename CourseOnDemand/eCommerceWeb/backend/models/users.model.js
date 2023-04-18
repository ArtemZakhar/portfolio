const bcryptjs = require("bcryptjs");
const userDataBase = require("./users.mongo");

async function getAllUsers() {
  const userList = await userDataBase.find().select("name phone email");

  return userList;
}

async function addNewUser(user) {
  let newUser = userDataBase({
    name: user.name,
    email: user.email,
    passwordHash: bcryptjs.hashSync(user.password, 10),
    street: user.street,
    appartment: user.appartment,
    city: user.appartment,
    zip: user.zip,
    country: user.country,
    phone: user.phone,
    isAdmin: user.isAdmin,
  });
  const savedUser = newUser.save();
  return savedUser;
}

async function registerNewUser(user) {
  let newUser = userDataBase({
    name: user.name,
    email: user.email,
    passwordHash: bcryptjs.hashSync(user.password, 10),
    street: user.street,
    appartment: user.appartment,
    city: user.appartment,
    zip: user.zip,
    country: user.country,
    phone: user.phone,
    isAdmin: user.isAdmin,
  });

  const savedUser = newUser.save();
  return savedUser;
}

async function findUser(id) {
  const user = await userDataBase.findById(id).select("-passwordHash");
  return user;
}

async function findOneByEmail(reqEmail) {
  const user = await userDataBase.findOne({ email: reqEmail });
  return user;
}

async function usersCount() {
  const countUser = await userDataBase.count();
  console.log(countUser);
  return countUser;
}

async function deleteUser(id) {
  await userDataBase.findByIdAndRemove(id);
  return;
}

module.exports = { getAllUsers, addNewUser, findUser, findOneByEmail, registerNewUser, usersCount, deleteUser };
