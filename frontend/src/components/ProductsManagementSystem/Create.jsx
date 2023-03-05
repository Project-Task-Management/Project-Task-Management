export default function ({value,
  total,
  setValue,
  setData,
  data}) {
  const clickHandler = () => {
    const newEntry = { ...value, total };
    const neuData = [...data, newEntry];
    console.log(neuData);
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
    console.log(neuData);
  };

  const removeHandler = (i) => {
    const copy = [...data];
    copy.splice(i, 1);
    setData(copy);
    console.log(copy);
  };
  const editHandler = (i) => {};
  return (
    <>
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
                  <button onClick={editHandler}>update</button>
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
