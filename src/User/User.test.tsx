import React from "react";
import { render, screen } from "@testing-library/react";
import User from "./User";

test("renders a name", () => {
  render(<User name="Mietek" />);
  const nameElement = screen.getByRole("role");
  expect(nameElement).toHaveTextContent("My name is Mietek");
});
