import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartSummary = () => {
    const { products } = useSelector((state: RootState) => state.events);
    const cartState = useSelector((state: RootState) => state.cart);

    const subtotal = cartState.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.productId);
        if (product) {
          return acc + product.cost * item.quantity;
        }
        return acc;
      }, 0)

      const TAX_PERCENT = 10

      const subtotalWithTaxes = Math.round(subtotal * TAX_PERCENT) / 100

      const cartTotal = subtotal + subtotalWithTaxes

  return (
    <div className="flex-1 flex flex-col border h-80 rounded-md p-5">
      <h2 className="text-xl text-cyan-900 font-semibold">Order Summary</h2>
      <div className="flex flex-col h-full text-cyan-800">
        <div className="flex justify-between py-2 border-b">
          <h4>Subtotal</h4>
          <p>€ {subtotal}</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <h4>Tax estimate</h4>
          <p>€ {subtotalWithTaxes}</p>
        </div>
      </div>
      <div className="flex justify-between py-5 border-b text-lg font-bold text-cyan-900">
        <h3>Order total</h3>
        <p>€ {cartTotal}</p>
      </div>
      <Button className="bg-cyan-500">Buy Now</Button>
    </div>
  );
};

export default CartSummary;
