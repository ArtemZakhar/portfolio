const categoryDataBase = require("./category.mongo");

async function getAllCategory() {
  const categoryList = await categoryDataBase.find();

  return categoryList;
}

async function addCategory(newCategory) {
  let category = categoryDataBase({ ...newCategory });

  let savedCategory = await category.save();

  return savedCategory;
}

async function deleteCategory(id) {
  await categoryDataBase.findByIdAndRemove(id);
  return;
}

async function findCategory(id) {
  const category = await categoryDataBase.findById(id);
  return category;
}

async function updateCategory(id, category) {
  const categoryUpdated = await categoryDataBase.findByIdAndUpdate(id, category, { new: true });
  return categoryUpdated;
}

module.exports = { getAllCategory, addCategory, deleteCategory, findCategory, updateCategory };
