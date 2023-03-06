import Delete from "./Delete.jsx";

import DeleteAll from "./DeleteAll.jsx";
export default function ({ value, total, setValue, setData, data }) {
  const clickHandler = () => {
    const newEntry = { ...value, total };
    const neuData = [...data, newEntry];
    if (value.price === "") {
      return alert("Price bitte eingeben");
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

  return (
    <>
      <button onClick={clickHandler}>Create</button>
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
            <th>COUNT</th>
            <th>CATEGORY</th>
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
                  <Delete data={data} setData={setData} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
