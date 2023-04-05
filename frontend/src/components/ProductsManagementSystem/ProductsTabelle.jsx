import "./Products.scss";
import axios from "axios";
import Create from "./Create.jsx";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    axios
      .get("http://localhost:7897/product/")
      .then((res) => setData(res.data));
    console.log(data);
  }, []);

  return (
    <>
      <div className="products-tabelle">
        <input
          className="inputs"
          onChange={handelChange}
          placeholder="Title"
          type="text"
          name="title"
          value={value.title}
        />
        <div className="product-angabe">
          <input
            className="inputs"
            onChange={handelChange}
            placeholder="Price"
            type="number"
            name="price"
            value={value.price}
          />
          <input
            className="inputs"
            onChange={handelChange}
            placeholder="Taxes"
            type="number"
            name="taxes"
            value={value.taxes}
          />
          <input
            className="inputs"
            onChange={handelChange}
            type="number"
            name="ads"
            placeholder="Ads"
            value={value.ads}
          />
          <input
            className="inputs"
            onChange={handelChange}
            type="number"
            placeholder="Discount"
            name="discount"
            value={value.discount}
          />
          <p className={value.price>0?"totalmore":"total"}>Total:{total}€</p>
        </div>
        <input
          className="inputs"
          onChange={handelChange}
          placeholder="Count"
          type="number"
          name="count"
          value={value.count}
        />
        <input
          className="inputs"
          onChange={handelChange}
          type="text"
          placeholder="Category"
          name="category"
          value={value.category}
        />

      <Create
        value={value}
        setValue={setValue}
        total={total}
        data={data}
        setData={setData}
        />
        </div>
    </>
  );
}
