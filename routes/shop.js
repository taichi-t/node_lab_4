const express = require("express");

const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/show-product/:productId", productController.getOneProductById);

router.post("/show-product", productController.getOneProductByForm);

router.post("/delete-product", productController.postDeleteProduct);

module.exports = router;
