import React from "react";
import User from "./User/User";
import AddTwoNumbers from "./AddTwoNumbers";

function App() {
  return (
    <div>
      <User name="Janek" />
      <AddTwoNumbers number1={1} number2={2} />
    </div>
  );
}

export default App;
