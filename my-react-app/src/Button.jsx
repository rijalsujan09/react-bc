export function Button() {
  const styles = {
    padding: "10px 20px",
    color: "white",
    backgroundColor: "hsl(200, 82%, 48%)",
    border: "none",
    borderRadius: "5px",
  };

  let count = 0;
  const handleClick = (e) => {
    e.target.textContent = "OUCH! 🤕";
    console.log("OUCH!");
  };

  const handleClick2 = (name) => {
    handleClick();
    console.log(`${name} stop clicking me.`);
  };
  return (
    <button
      onDoubleClick={(e) => handleClick(e)}
      className="btn"
      style={styles}
    >
      {" "}
      Click Me 🙂{" "}
    </button>
  );
}

export default Button;
