const {
  getAllCategory,
  addCategory,
  deleteCategory,
  findCategory,
  updateCategory,
} = require("../../models/category.model");

async function httpGetAllCategory(req, res) {
  const categoryList = await getAllCategory();
  if (!categoryList[0]) {
    return res.status(500).json({ success: false });
  }

  return res.status(200).json(categoryList);
}

async function httpAddCategory(req, res) {
  let category = {
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  };

  if (!category.name) {
    return res.status(400).json({
      error: "Missing required launch property: 'name'",
    });
  }

  await addCategory(category);

  res.send(category);
}

async function httpDeleteCategory(req, res) {
  const idN = req.params.id;
  await deleteCategory(idN)
    .then(() => {
      return res.status(200).json({ success: true });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
}

async function httpFindCategory(req, res) {
  const idN = req.params.id;
  await findCategory(idN)
    .then((cat) => {
      return res.status(200).json(cat);
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ mesage: "the category with given ID wasn't found", error: err });
    });
}

async function httpUpdateCategory(req, res) {
  const idN = req.params.id;
  const category = {
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  };
  await updateCategory(idN, category)
    .then((cat) => {
      return res.status(200).json(cat);
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ mesage: "the category with given ID wasn't found", error: err });
    });
}

module.exports = {
  httpGetAllCategory,
  httpAddCategory,
  httpDeleteCategory,
  httpFindCategory,
  httpUpdateCategory,
};
