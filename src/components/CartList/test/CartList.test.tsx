import { render, screen } from "@testing-library/react";
import CartList from "@/components/CartList";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

describe("CartList component", () => {
  const mockEvents = [
    {
      id: 1,
      name: "Event Name 1",
      description: "Event Description 1",
      imageUrl: "event1.jpg",
      altImg: "Alt Image 1",
      cost: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: "Event Name 2",
      description: "Event Description 2",
      imageUrl: "event2.jpg",
      altImg: "Alt Image 2",
      cost: 15,
      quantity: 3,
    },
  ];

  it("renders a list of CartItem components", () => {
    render(
      <Provider store={store}>
        <CartList events={mockEvents} />
      </Provider>
    );
    const cartItems = screen.getAllByRole("article");

    expect(cartItems).toHaveLength(2);
  });
});
