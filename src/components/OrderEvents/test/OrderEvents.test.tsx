import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import OrderEvents from "@/components/OrderEvents";

describe("OrderEvents component", () => {
  test("renders correctly", () => {
    
    render(
        <Provider store={store}>
          <OrderEvents />
        </Provider>
      );
    expect(screen.getByText("Order events by...")).toBeDefined();
    expect(screen.getByLabelText("Name")).toBeDefined();
    expect(screen.getByLabelText("Description")).toBeDefined();
    expect(screen.getByLabelText("Date")).toBeDefined();
    expect(screen.getByLabelText("Asc")).toBeDefined();
    expect(screen.getByLabelText("Desc")).toBeDefined();
  });
});
