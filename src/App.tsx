import React from "react";
import User from "./User/User";
import AddTwoNumbers from "./AddTwoNumbers";
import ButtonClicker from "./ButtonClicker";

function App() {
  const clikerHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };
  return (
    <div>
      <User name="Janek" />
      <AddTwoNumbers number1={1} number2={2} />
      <ButtonClicker onClick={clikerHandler} />
    </div>
  );
}

export default App;
