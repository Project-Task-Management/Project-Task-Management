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
    total: 0,
  });

  const handelChange = (e) => {
    const __value = { ...value };
    __value.total = 
      +__value.price + +__value.taxes + +__value.ads - +__value.discount;
    setValue({ ...__value, [e.target.name]: e.target.value });
  };

  const clickHandler = () => {
    const neuData = [...data, value];

    setData(neuData);
    setValue({
      title: "",
      price: "",
      taxes: "",
      ads: "",
      discount: "",
      count: "",
      category: "",
      total: 0,
    });
    console.log(neuData);
  };
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
          <p className="total">Total:{value.total}€</p>
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>TAXES</th>
            <th>ADS</th>
            <th>DISCOUNT</th>
            <th>TOTAL</th>
            <th>COUNT</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        {data.map((e, i) => {
          return (
            <tbody>
              <tr>
                <td>{i + 1}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.taxes}</td>
                <td>{e.ads}</td>
                <td>{e.discount}</td>
                <td>{e.total}</td>
                <td>{e.count}</td>
                <td>{e.category}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
