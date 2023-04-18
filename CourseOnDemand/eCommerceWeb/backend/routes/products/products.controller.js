const {
  addNewProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  delleteProduct,
  getFeaturedProducts,
  checkID,
} = require("../../models/products.model");

async function httpAddNewProduct(req, res) {
  const request = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "Please attach the image" });
  }

  const fileName = file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
  const item = {
    name: request.name,
    description: request.description,
    richDescription: request.richDescription,
    image: `${basePath}${fileName}`,
    brand: request.brand,
    price: request.price,
    category: request.category,
    countInStock: request.countInStock,
    raiting: request.raiting,
    numReviews: request.numReviews,
    isFeatured: request.isFeatured,
  };
  await addNewProduct(item)
    .then((prod) => {
      return res.status(200).json(prod);
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
}

async function httpGetAllProducts(req, res) {
  let filter = [];
  if (req.query.category) {
    filter = req.query.category.split(",");
  }
  let searchParameters = filter[0] ? { category: filter } : null;
  const products = await getAllProducts(searchParameters);

  if (!products[0]) {
    return res.status(500).json({ success: false });
  }

  return res.status(200).json(products);
}

async function httpGetProduct(req, res) {
  const product = await getProduct(req.params.id);

  if (!product) {
    return res.status(500).json({ success: false });
  }

  return res.status(200).json(product);
}

async function httpUpdateProduct(req, res) {
  const request = req.body;
  const product = {
    name: request.name,
    description: request.description,
    richDescription: request.richDescription,
    image: request.image,
    brand: request.brand,
    price: request.price,
    category: request.category,
    countInStock: request.countInStock,
    raiting: request.raiting,
    numReviews: request.numReviews,
    isFeatured: request.isFeatured,
  };
  await updateProduct(request.id, product)
    .then((prod) => {
      return res.status(200).json(prod);
    })
    .catch((err) => {
      return res.status(500).json({ mesage: "the product with given ID wasn't found", error: err });
    });
}

async function httpDeleteProduct(req, res) {
  await delleteProduct(req.params.id)
    .then(() => {
      return res.status(200).json({ success: true });
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
}

async function httpGetFeaturedProducts(req, res) {
  const count = req.params.count ? req.params.count : 0;
  await getFeaturedProducts(count)
    .then((products) => {
      return res.status(200).json(products);
    })
    .catch((err) => {
      return res.status(500).json({
        message: "the are no  feature products",
        error: err,
      });
    });
}

async function httpUpdateProductImages(req, res) {
  const userId = await checkID(req.params.id);
  if (!userId)
    return res.status(400).json({ message: "Product doesn't exist or invalid id was passed" });
  const files = req.files;
  let imagePath = [];
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
  if (files) {
    files.map((item) => {
      const fileName = item.filename;
      console.log(fileName);
      imagePath.push(`${basePath}${fileName}`);
    });
  }

  const product = {
    images: imagePath,
  };
  await updateProduct(req.params.id, product)
    .then((prod) => {
      return res.status(200).json(prod);
    })
    .catch((err) => {
      return res.status(500).json({ mesage: "the product with given ID wasn't found", error: err });
    });
}

module.exports = {
  httpAddNewProduct,
  httpGetAllProducts,
  httpGetProduct,
  httpUpdateProduct,
  httpDeleteProduct,
  httpGetFeaturedProducts,
  httpUpdateProductImages,
};
