const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/add-products',productController.getAddProducts);
router.post('/add-product', productController.postAddProduct);

module.exports = router;