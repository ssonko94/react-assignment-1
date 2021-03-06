import { render, screen } from "@testing-library/react";
import Subheading from "../heading";

test("checks if element has a specific test id", () => {
  render(<Subheading />);
  const linkElement = screen.getByTestId("subHeadingTest");
  expect(linkElement).toBeInTheDocument();
});
