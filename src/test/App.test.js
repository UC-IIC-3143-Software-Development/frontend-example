import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders learn react link", () => {
  // Given
  render(<App />);

  // When
  const linkElement = screen.getByText(/Learn react/i);

  // Then
  expect(linkElement).toBeInTheDocument();
});

test("Given render App When user click on button Should change the text to Current theme dark", () => {
  // Given
  render(<App />);
  const buttonChangeTheme = screen.getByText(/Current theme/i);

  // When
  userEvent.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/dark/i);
});

test("Given render App When user click on button Should change the text to Current theme light", () => {
  // Given
  render(<App />);
  const buttonChangeTheme = screen.getByText(/Current theme/i);

  // When: current button says light
  userEvent.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/dark/i);

  // When: current button says dark
  userEvent.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/light/i);
});
