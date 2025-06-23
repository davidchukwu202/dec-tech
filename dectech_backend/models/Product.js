import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    voltage: String,
    description: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
