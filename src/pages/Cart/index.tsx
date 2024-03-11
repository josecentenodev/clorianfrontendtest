import CartList from "@/components/CartList";
import CartSummary from "@/components/CartSummary";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { cartListtoEvents } = useCart();

  return (
    <>
      <h1 className="text-4xl text-center text-cyan-900 py-12">
        Shopping Cart
      </h1>
      <div className="flex gap-12">
        <CartList events={cartListtoEvents} />
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
