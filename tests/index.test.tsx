import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MouseEventHandler } from "react";

describe("test string home", () => {
  it("renders a home string", () => {
    render(<Home />);

    const heading = screen.getByRole("home");
    const btn = screen.getByText("Guzik");

    expect(heading).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});

type Props = {
  onClick: MouseEventHandler;
  children: string;
};

const Button = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Guzik</Button>);
  fireEvent.click(screen.getByText("Guzik"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("deleting item", () => {
  const deleteButtons = screen.queryAllByAltText(" Usuń mnie");
  expect(deleteButtons).toHaveLength(0);
});
