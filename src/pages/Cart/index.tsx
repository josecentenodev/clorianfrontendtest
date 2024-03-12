import CartList from "@/components/CartList";
import CartSummary from "@/components/CartSummary";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { cartListtoEvents } = useCart();

  return (
    <>
      <h1 className="text-4xl text-center text-sky-900 py-20">
        Shopping Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 md:gap-12 items-center lg:items-start justify-center pb-12">
        <CartList events={cartListtoEvents} />
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
