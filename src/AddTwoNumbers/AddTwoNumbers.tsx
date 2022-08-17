import React from "react";
type numbers = {
  number1: number;
  number2: number;
};

const AddTwoNumbers = ({ number1, number2 }: numbers) => {
  return (
    <div data-testid="adding">
      {number1} + {number2} = {number1 + number2}
    </div>
  );
};

export default AddTwoNumbers;
