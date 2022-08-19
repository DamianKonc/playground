import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("test string home", () => {
  it("renders a home string", () => {
    render(<Home />);

    const heading = screen.getByRole("home");

    expect(heading).toBeInTheDocument();
  });
});
