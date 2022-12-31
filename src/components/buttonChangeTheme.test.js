import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonChangeTheme from "./buttonChangeTheme";

test("render button with the text light", () => {
  // Given
  render(<ButtonChangeTheme />);
  const buttonChangeTheme = screen.getByText(/Current theme/i);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/light/i);
});

test("user clicks button change text", async () => {
  // Given
  const user = userEvent.setup();
  render(<ButtonChangeTheme />);

  // When
  const buttonChangeTheme = screen.getByRole("button", {
    name: /Current theme/i,
  });
  await user.click(buttonChangeTheme);

  // Then
  expect(buttonChangeTheme).toHaveTextContent(/dark/i);
});
