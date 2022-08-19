import Footer from "../components/Footer/Footer";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
