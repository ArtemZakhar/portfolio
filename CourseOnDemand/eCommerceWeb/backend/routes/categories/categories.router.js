const express = require("express");
const {
  httpGetAllCategory,
  httpAddCategory,
  httpDeleteCategory,
  httpFindCategory,
  httpUpdateCategory,
} = require("./categories.controller");

const categoriesRouter = express.Router();

categoriesRouter.get("/", httpGetAllCategory);
categoriesRouter.post("/", httpAddCategory);
categoriesRouter.get("/:id", httpFindCategory);
categoriesRouter.put("/:id", httpUpdateCategory);
categoriesRouter.delete("/:id", httpDeleteCategory);

module.exports = categoriesRouter;
