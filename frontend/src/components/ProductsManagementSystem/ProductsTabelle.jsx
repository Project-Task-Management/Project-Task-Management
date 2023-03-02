import "./Products.scss";
import Create from "./Create.jsx";
import { useState } from "react";

export default function ProductsTabelle() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState({
    title: "",
    price: "",
    taxes: "",
    ads: "",
    discount: "",
    count: "",
    category: "",
  });

  const handelChange = (e) => {
    setValue({...value,
      [e.target.name]:e.target.value});
  };
  const clickHandler = (e) => {
    const neuData = [...data, value];
    setData(neuData);
    setValue("");
    console.log(neuData);
  };
  const total = +value.price + +value.taxes + +value.ads - +value.discount;
  return (
    <>
      <div className="products-tabelle">
        <input
          onChange={handelChange}
          placeholder="Title"
          className="title"
          type="text"
          name="title"
          value={value.title}
        />
        <div className="product-angabe">
          <input
            onChange={handelChange}
            placeholder="Price"
            type="number"
            name="price"
            value={value.price}
          />
          <input
            onChange={handelChange}
            placeholder="Taxes"
            type="number"
            name="taxes"
            value={value.taxes}
          />
          <input
            onChange={handelChange}
            type="number"
            name="ads"
            placeholder="Ads"
            value={value.ads}
          />
          <input
            onChange={handelChange}
            type="number"
            placeholder="Discount"
            name="discount"
            value={value.discount}
          />
          <p className="total">Total:{total}€</p>
        </div>
        <input
          onChange={handelChange}
          placeholder="Count"
          type="number"
          name="count"
          value={value.count}
        />
        <input
          onChange={handelChange}
          type="text"
          placeholder="Category"
          name="category"
          value={value.category}
        />
      </div>
      <button onClick={clickHandler}>Create</button>
      {data.map((e, i) => {
        <p key={i}>{e.title}</p>;
      })}
    </>
  );
}
