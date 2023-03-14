function Button({ handleDellete }) {
  const handleEdit = (e) => {
    e.preventDefault();
  };

  // const handleDellete = (e) => {
  //     e.preventDefault()

  // }

  return (
    <>
      <button onClick={() => handleDellete()}>löschen</button>
    </>
  );
}

export default Button;
