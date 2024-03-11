import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Cart = () => {
  const { products } = useSelector(
    (state: RootState) => state.events
  );

  const cartList = useSelector((state: RootState) => state.cart)

  return (
    <div>Cart</div>
  )
}

export default Cart