import { render, screen } from "@testing-library/react";
import ListOfEvents from "@/components/ListOfEvents";
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
      validityDate: "2024-03-31",
      cost: 10
    },
    {
      id: 2,
      name: "Event Name 2",
      description: "Event Description 2",
      imageUrl: "event2.jpg",
      altImg: "Alt Image 2",
      validityDate: "2024-03-31",
      cost: 15,
    },
  ];

  it("renders a list of CartItem components", () => {
    render(
      <Provider store={store}>
        <ListOfEvents events={mockEvents} />
      </Provider>
    );
    const cartItems = screen.getAllByRole("article")
    const cartButtons = screen.getAllByRole("button")
    const quantityButtons = screen.getAllByRole("combobox")
    const buttonAddToCart = screen.getAllByText('Add to cart')

    expect(cartItems).toHaveLength(2);
    expect(buttonAddToCart).toBeDefined()
    expect(quantityButtons).toBeDefined()
    expect(cartButtons).toHaveLength(2)

  });
});
