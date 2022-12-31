import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Given render App When the page load Then show text learn react link", () => {
  // Given
  render(<App />);

  // When
  const linkElement = screen.getByText(/Learn react/i);

  // Then
  expect(linkElement).toBeInTheDocument();
});
