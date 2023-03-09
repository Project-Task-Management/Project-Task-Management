import Product from "../models/Product.js"
export const getAllProducts=async (req,res,next)=>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getProduct= async (req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).end("not found")
        res.json(product);
    } catch (error) {
        
        res.status(500).json({message: error.message});
    }
}
export const createProduct= async (req,res,next)=>{
    const product = new Product(req.body);
    try {
        const created = await product.save();
        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateProduct= async (req,res,next)=>{
    try {
        const updatedProduct = await Product.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProduct= async (req,res,next)=>{
    try {
        const deletedProduct = await Product.deleteOne({_id:req.params.id});
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}