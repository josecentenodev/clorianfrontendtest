import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { clearCart } from "@/redux/cartSlice";

const CartSummary = () => {
  const TAX_PERCENT = 10;
  const { products } = useSelector((state: RootState) => state.events);
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartState.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      return acc + product.cost * item.quantity;
    }
    return acc;
  }, 0);

  const subtotalWithTaxes = Math.round(subtotal * TAX_PERCENT) / 100;

  const cartTotal = subtotal + subtotalWithTaxes;

  const handleCleanCart = () => {
    dispatch(clearCart())
  };

  return (
    <div className="flex-1 flex flex-col border h-80 rounded-md p-5 w-96 xl:max-w-[500px]">
      <h2 className="text-xl text-indigo-900 font-semibold">Order Summary</h2>
      <div className="flex flex-col h-full text-indigo-800">
        <div className="flex justify-between py-2 border-b">
          <h4>Subtotal</h4>
          <p>€ {subtotal}</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <h4>Tax estimate</h4>
          <p>€ {subtotalWithTaxes}</p>
        </div>
      </div>
      <div className="flex justify-between py-5 border-b text-lg font-bold text-indigo-900">
        <h3>Order total</h3>
        <p>€ {cartTotal}</p>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="bg-destructive"
          onClick={handleCleanCart}
        >
          Clean Cart
        </Button>
        <Button className="bg-sky-500">Buy Now</Button>
      </div>
    </div>
  );
};

export default CartSummary;
