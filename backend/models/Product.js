import mongoose from "mongoose";
const schema = mongoose.Schema({
  title: {
    type: String,
    
  },
  price: {
    type: Number,
    
  },
  taxes: {
    type: Number,
    
  },
  ads: {
    type: Number,
    
  },
  discount: {
    type: Number,
  },
  total: {
    type: Number,
    
  },
  count: {
    type: Number,
    
  },
  category: {
    type: String,
    
  },
});

const Product = mongoose.model("Product",schema)
export default Product
