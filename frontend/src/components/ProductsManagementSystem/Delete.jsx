import React from "react";
import axios from "axios";

export default function Delete({ data, setData }) {
  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:7897/product");
    setData(response.data);
  };
  const removeHandler = () => {
    // const copy = {...data};
    // console.log("vorher", copy,i);
    // copy.splice(i, 1);
    // console.log("nachher", copy);

    // setData(copy);
    axios
      .delete(`http://localhost:7897/product/${data._id}`)
      .then(() => fetchProduct());

    //  console.log("from delete", copy);
  };

  return <button onClick={removeHandler}>delete</button>;
}
