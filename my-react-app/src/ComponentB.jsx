import ComponentC from "./ComponentC";
import Reacr, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentB() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentC />
    </div>
  );
}
export default ComponentB;
