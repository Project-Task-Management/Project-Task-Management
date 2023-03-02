import "./Products.scss";
import Create from "./Create.jsx";
import { useState } from "react";

export default function ProductsTabelle() {
  const [data, setData] = useState([]);
  const [value1, setValue] = useState({
    title: "",
    price: "",
    taxes: "",
    ads: "",
    discount: "",
    count: "",
    category: "",
  });

  const handelChange = (e) => {
    setValue(e.target.value);
  };
  const clickHandler = (e) => {
    const neuData = [...data, value1];
    setData(neuData);
    setValue({});
    console.log(neuData);
  };
  const total = +value1.price + +value1.taxes + +value1.ads - +value1.discount;
  return (
    <>
      <div className="products-tabelle">
        <input
          onChange={handelChange}
          placeholder="Title"
          className="title"
          type="text"
          name="title"
          value={value1.title}
        />
        <div className="product-angabe">
          <input
            onChange={handelChange}
            placeholder="Price"
            type="number"
            name="Price"
            value={value1.price}
          />
          <input
            onChange={handelChange}
            placeholder="Taxes"
            type="number"
            name="taxes"
            value={value1.taxes}
          />
          <input
            onChange={handelChange}
            type="number"
            name="ads"
            placeholder="Ads"
            value={value1.ads}
          />
          <input
            onChange={handelChange}
            type="number"
            placeholder="Discount"
            name="discount"
            value={value1.discount}
          />
          <p className="total">Total:{total}€</p>
        </div>
        <input
          onChange={handelChange}
          placeholder="Count"
          type="number"
          name="Count"
          value={value1.count}
        />
        <input
          onChange={handelChange}
          type="text"
          placeholder="Category"
          name="category"
          value={value1.category}
        />
      </div>
      <button onClick={clickHandler}>Create</button>
      {data.map((e, i) => {
        <p key={i}>{e.title}</p>;
      })}
    </>
  );
}
