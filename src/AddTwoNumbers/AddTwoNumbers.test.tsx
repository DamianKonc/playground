import React from "react";
import { render, screen } from "@testing-library/react";
import AddTwoNumbers from "./AddTwoNumbers";

test("renders a number", () => {
  render(<AddTwoNumbers number1={2} number2={3} />);
  const nameElement = screen.getByTestId("adding");
  expect(nameElement).toHaveTextContent("2 + 3 = 5");
});
