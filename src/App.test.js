import { render, screen } from "@testing-library/react";
import App from "./App";

test("checks if element has a specific test id", () => {
  render(<App />);
  const linkElement = screen.getByTestId("AppTest");
  expect(linkElement).toBeInTheDocument();
});
