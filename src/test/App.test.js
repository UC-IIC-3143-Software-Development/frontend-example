import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("show link element when render App component", () => {
  // Given
  render(<App />);

  // When
  const linkElement = screen.getByText(/Learn react/i);

  // Then
  expect(linkElement).toBeInTheDocument();
});
