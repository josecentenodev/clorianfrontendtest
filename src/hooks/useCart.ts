import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useToast } from "@/components/ui/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartEvent {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altImg: string;
  cost: number;
  quantity: number;
}

const useCart = (id: number, name: string) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { toast } = useToast();
  const { products } = useSelector((state: RootState) => state.events);
  const cartState = useSelector((state: RootState) => state.cart);

  const fromCartStateToCartList = (cartState: CartItem[]) => {
    return cartState.map((event) => {
      const product = products.find((p) => p.id === event.productId);

      if (product) {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          imageUrl: product.imageUrl,
          altImg: product.altImg,
          cost: product.cost,
          quantity: event.quantity,
        };
      }
      return null;
    }).filter((item): item is CartEvent => !!item);
  };


  const cartListtoEvents = fromCartStateToCartList(cartState);

  const handleValueChange = (value: string) => {
    const stringValueToNumber = Number(value);
    setQuantity(stringValueToNumber);
  };
  const handleAddToCart = () => {
    try {
      dispatch(addToCart({ productId: id, quantity: quantity }));
      return toast({
        title: `Added to cart:`,
        description: `${quantity} ${name} tickets`,
      });
    } catch (error) {
      toast({ variant: "destructive", title: "Oops!", description: `${error}`});
    }
  };

  return {
    handleValueChange,
    handleAddToCart,
    cartListtoEvents
  };
};

export default useCart;
