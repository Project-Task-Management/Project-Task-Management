import Delete from "./Delete.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteAll from "./DeleteAll.jsx";
export default function ({ value, total, setValue, setData, data }) {
  useEffect(() => {
    console.log("fromUseEffect",data);
  }, [data]);
  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:7897/product");
    console.log("raponse.data", response.data);
    setData(response.data);
  };
  const [searchInput, setSearchInput] = useState("");
  const clickHandler = () => {
    const newEntry = { ...value, total };
    const neuData = [...data, newEntry];

    if (value.price < 0 || value.count < 0) {
      return alert("Price oder Count bitte eingeben");
    } else {
      const rwos = [];
      setData(rwos);
      for (let i = 1; i <= value.count; i++) {
        const objData = {
          title: value.title,
          price: value.price,
          taxes: value.taxes,
          ads: value.ads,
          discount: value.discount,
          total: value.total,
          count: value.count,
          category: value.category,
        };
        rwos.push(objData);
      }
      axios
        .post("http://localhost:7897/product/", {
          rwos,
        })
        .then(fetchProduct());
    }
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
            <th>POSITION</th>
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
          {filteredData.map((e, i) => {
            console.log(filteredData);

            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.taxes}</td>
                <td>{e.ads}</td>
                <td>{e.discount}</td>
                <td>{e.total}</td>
                <td>{e.category}</td>
                <td>
                  <Delete data={e} setData={setData} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
