import App from "@/App";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { vi } from "vitest";
import userEvent from '@testing-library/user-event'

describe("App test", () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(<App />);
    });
  });
  afterEach(cleanup);

  test("should show title", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined();
  });

  test("should render all products", () => {
    expect(screen.getByText(/Jazz Under the Stars/i)).toBeDefined();
    expect(
      screen.getByText(/Broadway Nights: The Musical Extravaganza/i)
    ).toBeDefined();

    const buttons = screen.getAllByText("Add to cart");

    expect(buttons.length).toBe(10);
  });

  test("should show a SearchInput", () => {
    screen.getByPlaceholderText("Search by name or description...");
  });

  test("should filter products when user type on SearchInput", async () => {
    const input = screen.getByRole('textbox');
    

    await userEvent.type(input, 'Broadway Nights')

    const buttons = screen.getAllByText("Add to cart");

    expect(buttons.length).toBe(1)
  });



});
