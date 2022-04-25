import { render, screen } from "@testing-library/react";
import UsersListsFromAPI from "./usersListsFromAPI";

test("Given render UserListsFromAPI Then expect heading in the document", () => {
  // Given
  render(<UsersListsFromAPI />);
  const userHeader = screen.getByRole("heading", { name: /users/i });
  expect(userHeader).toBeInTheDocument();
});
