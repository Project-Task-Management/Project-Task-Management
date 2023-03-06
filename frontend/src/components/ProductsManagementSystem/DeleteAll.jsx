import React from "react";

export default function DeleteAll({ data, setData }) {
  const deleteAll = (i) => {
    const copy = [...data];
    copy.splice(i);
    setData(copy);
  };
  return <button onClick={deleteAll}>Delete All</button>;
}
