import CartList from "@/components/CartList";
import CartSummary from "@/components/CartSummary";
import useCart from "@/hooks/useCart";
import { useSEO } from "@/hooks/useSeo";

const Cart = () => {
  const { cartListtoEvents } = useCart();

  useSEO({title: `Cart ${cartListtoEvents.length} | cloriant frontend test`, description: 'Cart View with clean cart button'})
  return (
    <main className="min-h-[39rem]">
      <h1 className="text-4xl text-center text-sky-900 py-20 animate-slide-in-top">
        Shopping Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 md:gap-12 items-center lg:items-start justify-center pb-12">
        <CartList events={cartListtoEvents} />
        <CartSummary />
      </div>
    </main>
  );
};

export default Cart;
