import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonChangeTheme from "./buttonChangeTheme";

test("Given ButtonChangeTheme Then by default the text is Current theme light", () => {
  // Given
  render(<ButtonChangeTheme />);
  const buttonChangeTheme = screen.getByText(/Current theme/i);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/light/i);
});

test("Given ButtonChangeTheme When user click on button Then change the text to Current theme dark", () => {
  // Given
  render(<ButtonChangeTheme />);
  const buttonChangeTheme = screen.getByText(/Current theme/i);
  expect(buttonChangeTheme).toHaveTextContent(/light/i);

  // When
  userEvent.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/dark/i);
});

test("Given ButtonChangeTheme When user click on button Then change the text to Current theme light", () => {
  // Given
  render(<ButtonChangeTheme />);
  const buttonChangeTheme = screen.getByText(/Current theme/i);
  expect(buttonChangeTheme).toHaveTextContent(/light/i);

  // When: current button says light
  userEvent.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/dark/i);

  // When: current button says dark
  userEvent.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/light/i);
});
