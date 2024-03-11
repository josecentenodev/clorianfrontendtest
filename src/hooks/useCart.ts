import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useToast } from "@/components/ui/use-toast";

const useCart = (id: number, name: string, validityDate: string) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { toast } = useToast();

  const handleValueChange = (value: string) => {
    const stringValueToNumber = Number(value);
    setQuantity(stringValueToNumber);
  };
  const handleAddToCart = () => {
    try {
      dispatch(addToCart({ productId: id, quantity: quantity }));
      toast({
        title: `Added to cart:`,
        description: `${quantity} ${name} tickets`,
      });
    } catch (error) {
      toast({ variant: "destructive", title: "Oops!", description: `${error}` });
    }
  };

  return {
    handleValueChange,
    handleAddToCart,
  };
};

export default useCart;
