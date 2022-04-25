import { render, screen } from "@testing-library/react";
import UsersListsFromAPI from "./usersListsFromAPI";

test("Given render UserListsFromAPI Then expect a mock user in the document", async () => {
  // Given
  render(<UsersListsFromAPI />);
  const userHeader = screen.getByRole("heading", { name: /users/i });
  expect(userHeader).toBeInTheDocument();

  const text = await screen.findByText("Gonzalo");
  expect(text).toBeInTheDocument();
});
