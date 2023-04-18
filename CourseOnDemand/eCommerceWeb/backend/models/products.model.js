const mongoose = require("mongoose");

const products = require("./products.mongo");

async function checkID(id) {
  const validID = mongoose.isValidObjectId(id);
  const productExist = await products.findById(id);
  const checkedID = validID && productExist;
  return checkedID;
}

async function addNewProduct(item) {
  const product = products({ ...item });

  await product.save();
  return product;
}

async function getAllProducts(searchParameters) {
  const productList = await products.find(searchParameters).select("name image -_id");
  return productList;
}

async function getProduct(id) {
  const product = await products.findById(id).populate("category").select("name category");

  return product;
}

async function updateProduct(id, product) {
  const newProduct = await products.findOneAndUpdate(id, product, { new: true });
  return newProduct;
}

async function delleteProduct(id) {
  await products.findByIdAndRemove(id);
  return;
}

async function getFeaturedProducts(count) {
  const featuredProducts = await products.find({ isFeatured: true }).limit(count);
  return featuredProducts;
}

module.exports = {
  addNewProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  delleteProduct,
  getFeaturedProducts,
  checkID,
};
