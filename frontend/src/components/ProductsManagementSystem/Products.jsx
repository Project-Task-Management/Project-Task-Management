import "./Products.scss"
import { useState } from "react";


export default function Products() {
const [sum,setSum]=useState("")
const [price,setPrice]=useState("")
const [taxes,setTaxes]=useState("")
const [ads,setAds]=useState("")
const [discount,setDiscount]=useState("")
const getPrice=(e)=>{
 setPrice(e.target.value)
}
const getTaxes=(e)=>{
 setTaxes(e.target.value)
}
const getAds=(e)=>{
 setAds(e.target.value)
}
const getDiscount=(e)=>{
 setDiscount(e.target.value)
}

const getTotal=()=>{
 setSum(price+taxes)
}



  return (
    <div className="productsManagement">
      <h1 className="crud">CRUD</h1>
      <div className="products-tabelle">
        <input className="title" type="text" name="title" />
        <div className="product-angabe">
          <input onChange={getPrice} type="number" name="Price" />
          <input  onChange={getTaxes} type="number" name="taxes" value={taxes} />
          <input onChange={getAds} type="number" name="ads" value={ads} />
          <input onChange={getDiscount} type="number" name="discount" value={discount} />
          <p  className="total">Total:{getTotal}</p>
        </div>
        <input type="number" name="count" />
        <input type="name" name="category" />
      </div>
    </div>
  );
}
