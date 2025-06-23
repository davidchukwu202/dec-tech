import Product from '../models/Product';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('No products found', err.message);
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (error) {
    console.error('add product error', err.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updated);
  } catch (error) {
    console.error('update error', err.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete(req.params.id);
    res.send(deleted);
  } catch (error) {
    console.error('product not deleted', err.message);
  }
};
