import App from "@/App";
import { render, screen } from "@testing-library/react";

describe("App test", () => {
    beforeEach(()=>{
        render(<App />);
    })

  test("should show title", () => {
    expect(
      screen.getByText("Step Into Our World of Amazing Activities")
    ).toBeDefined();
  });

  test("should show a SearchInput", () => {
    screen.getByPlaceholderText("Search by name or description...")
  })
});
