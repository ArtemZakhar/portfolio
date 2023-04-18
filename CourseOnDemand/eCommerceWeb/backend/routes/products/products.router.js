const express = require("express");
const multer = require("multer");
// const authJwt = require('../../helpers/jwt');
// const errorHandler = require('../../helpers/error-handler');

const {
  httpAddNewProduct,
  httpGetProduct,
  httpGetAllProducts,
  httpUpdateProduct,
  httpDeleteProduct,
  httpGetFeaturedProducts,
  httpUpdateProductImages,
} = require("./products.controller");

const productsRouter = express.Router();

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValidFile = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("Invalid image type");

    if (isValidFile) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

productsRouter.post("/", uploadOptions.single("image"), httpAddNewProduct);
productsRouter.get("/", httpGetAllProducts); // I can use authJwt(), errorHandler,  as a Middleware
productsRouter.get("/:id", httpGetProduct);
productsRouter.get("/get/featured/:count", httpGetFeaturedProducts);
productsRouter.put("/:id", httpUpdateProduct);
productsRouter.put("/gallery-images/:id", uploadOptions.array("images", [10]), httpUpdateProductImages);
productsRouter.delete("/:id", httpDeleteProduct);

module.exports = productsRouter;
