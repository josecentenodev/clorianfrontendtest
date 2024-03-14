import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NavBar from "..";

describe("NavBar component", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    // Asegúrate de que los elementos esperados se rendericen correctamente
    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("Cart")).toBeDefined();
  });

  test("displays cart count when cart is not empty", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("(3)")).toBeDefined();
  });
});
