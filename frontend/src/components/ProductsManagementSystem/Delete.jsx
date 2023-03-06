import React from "react";

export default function Delete({ data, setData }) {
  const removeHandler = (i) => {
    const copy = [...data];
    copy.splice(i, 1);
    setData(copy);
    console.log(copy);
  };

  return <button onClick={removeHandler}>delete</button>;
}
