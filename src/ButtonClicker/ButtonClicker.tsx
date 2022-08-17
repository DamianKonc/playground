import React from "react";

const ButtonClicker = ({ ...props }) => {
  const message = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Kliknąłeś ${e.currentTarget.value}`);
  };

  return <button {...props}>Click Me</button>;
};

export default ButtonClicker;
