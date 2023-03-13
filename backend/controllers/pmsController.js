import Product from "../models/Product.js";
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).end("not found");
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req, res, next) => {
  const product = new Product(req.body);
  try {
    const created = await product.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
    console.log(deleteProduct);
    console.log(req.params);
    if (!deleteProduct) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send(deleteProduct);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const deleteAllProducts = async (req, res) => {
  try {
    const deleteAll = await Product.deleteMany({});
    console.log(deleteAll);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting all tasks", error);
    res.sendStatus(500);
  }
};
