function Button({ handleDellete }) {
  return (
    <>
      <button onClick={() => handleDellete()}>Delete</button>
    </>
  );
}

export default Button;
