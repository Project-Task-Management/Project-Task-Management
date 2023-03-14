import React from "react";
import axios from "axios";

export default function DeleteAll({ data, setData }) {
  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:7897/product");
    setData(response.data);
  };
  const deleteAll = (i) => {
    // const copy = [...data];
    // copy.splice(i);
    // setData(copy);
    axios
    .delete(`http://localhost:7897/product/`)
    .then(() => fetchProduct());
  };
  return <button onClick={deleteAll}>Delete All</button>;
}
