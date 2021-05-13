import express from 'express';
import Product from '../models/productModel';
import { getToken } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    brand: req.body.brand,
    category: req.body.category,
    stock: req.body.stock,
    description: req.body.description,
    rating: req.body.rating,
    reviews: req.body.reviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res
    .status(500)
    .send({ message: 'Error in creating Product', data: newProduct });
});
export default router;
