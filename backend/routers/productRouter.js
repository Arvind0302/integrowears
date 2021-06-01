import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js'
import Product from '../models/productModel.js'
import { getToken } from '../utils'

const productRouter = express.Router()

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
  })
)

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products)
    res.send({ createdProducts })
  })
)

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.send({ createdProducts })
    } else {
      res.status(404).send({ message: 'Product not Found' })
    }
  })
)

// router.post('/', async (req, res) => {
//   const product = new Product({
//     name: req.body.name,
//     price: req.body.price,
//     brand: req.body.brand,
//     category: req.body.category,
//     stock: req.body.stock,
//     description: req.body.description,
//     rating: req.body.rating,
//     reviews: req.body.reviews,
//   })
//   const newProduct = await product.save()
//   if (newProduct) {
//     return res
//       .status(201)
//       .send({ message: 'New Product Created', data: newProduct })
//   }
//   return res
//     .status(500)
//     .send({ message: 'Error in creating Product', data: newProduct })
// })
export default productRouter
