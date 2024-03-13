import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import SearchInput from "@/components/SearchInput";

describe("OrderEvents component", () => {
  test("renders correctly", () => {
    
    render(
        <Provider store={store}>
          <SearchInput />
        </Provider>
      );

    expect(screen.getByPlaceholderText("Search by name or description...")).toBeDefined();
  });
});