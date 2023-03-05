import "./Products.scss";
import Create from "./Create.jsx";
import { useState, useEffect } from "react";
import Edit from "./Edit.jsx";
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

  let total = +value.price + +value.taxes + +value.ads - +value.discount;

  const handelChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value, total });
  };

  const clickHandler = () => {
    const newEntry = { ...value, total };
    const neuData = [...data, newEntry];
    console.log(neuData);
    if(value.price===""){
      return alert("Price bitte eingeben")
    }else
    setData(neuData);
    setValue({
      title: "",
      price: "",
      taxes: "",
      ads: "",
      discount: "",
      count: "",
      category: "",
    })
    console.log(neuData);
  };

  const removeHandler = (i) => {
    const copy = [...data];
    copy.splice(i, 1);
    setData(copy);
    console.log(copy);
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
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        {data.map((e, i) => {
          return (
            <tbody key={i}>
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
                <td>
                  <button>update</button>
                </td>
                <td>
                  <button onClick={removeHandler}>delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
