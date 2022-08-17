import { render, screen, fireEvent } from "@testing-library/react";
import ButtonClicker from "./ButtonClicker";

test("console log after click", () => {
  const onClick = jest.fn();
  render(<ButtonClicker onClick={onClick} />);
  const buttonElement = screen.getByText("Click Me");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
