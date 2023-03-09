import Delete from "./Delete.jsx";
import { useState } from "react";
import DeleteAll from "./DeleteAll.jsx";
export default function ({ value, total, setValue, setData, data }) {
  const [searchInput, setSearchInput] = useState("");
  const clickHandler = () => {
    const newEntry = { ...value, total };
    const neuData = [...data, newEntry];
    if (
      value.price === "" ||
      value.count === "" ||
      value.price === 0 ||
      value.count === 0
    ) {
      return alert("Price oder Count bitte eingeben");
    } else setData(neuData);
    setValue({
      title: "",
      price: "",
      taxes: "",
      ads: "",
      discount: "",
      count: "",
      category: "",
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((el) => {
    if (searchInput === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(searchInput);
    }
  });
  const calc = () => {};
  return (
    <>
      <button onClick={clickHandler}>Create</button>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Search"
        value={searchInput}
      />

      {data.length > 0 ? <DeleteAll data={data} setData={setData} /> : ""}
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

            <th>CATEGORY</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            const rows = [];
            for (let index = i; index < e.count; index++) {
              rows.push(
                <tr key={i}>
                  

                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td>{e.taxes}</td>
                  <td>{e.ads}</td>
                  <td>{e.discount}</td>
                  <td>{e.total}</td>

                  <td>{e.category}</td>

                  <td>
                    <Delete data={data} setData={setData} />
                  </td>

                </tr>
              );
            }
            return rows;
          })}
        </tbody>
      </table>
    </>
  );
}
