import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CartSummary from "@/components/CartSummary";
import { store } from "@/redux/store";

describe("CartSummary component", () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <CartSummary />
      </Provider>
    );
  })

  afterEach(cleanup)
  
  test("renders correctly", () => {

    const subtotal = screen.getByText("Subtotal");
    const tax = screen.getByText("Tax estimate");
    const total = screen.getByText("Order total");
    expect(subtotal).toBeDefined();
    expect(tax).toBeDefined();
    expect(total).toBeDefined();
  });

  test('should clean items after clicking Clean Cart button', () => {
    const cleanButton = screen.getByText('Clean Cart')
    console.log(cleanButton.innerHTML)
    act(() => {
      fireEvent.click(cleanButton)
    })
    const total = screen.getByText('Order total').nextSibling?.textContent

    expect(total).toBe('€ 0')
  })


});
