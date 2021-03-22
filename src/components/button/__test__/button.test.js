import { render, screen } from "@testing-library/react";
import Button from "../button";

test("checks if element has a specific test id", () => {
  render(<Button />);
  const linkElement = screen.getByTestId("buttonTest");
  expect(linkElement).toBeInTheDocument();
});
