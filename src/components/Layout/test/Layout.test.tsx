import { MemoryRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { render, screen } from "@testing-library/react";

describe("Layout component", () => {
  test("should render properly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout>
            <h1>TDD is mandatory</h1>
          </Layout>
        </MemoryRouter>
      </Provider>
    );

    const h1 = screen.getByText("TDD is mandatory");
    expect(h1).toBeDefined();
  });
});
