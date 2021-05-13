import mongoose from 'mongoose';

const productSchemma = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  reviews: { type: Number, default: 0, required: true },
});

const productModel = mongoose.model('User', productSchemma);

export default productModel;
