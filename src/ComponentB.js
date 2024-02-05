import { useContext } from "react";
import { Data, Data1 } from "./App";

function ComponentB() {
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <>
      <h1>
        My name is {name} and I am {age} years old <br />
      </h1>
    </>
  );
}

export default ComponentB;
