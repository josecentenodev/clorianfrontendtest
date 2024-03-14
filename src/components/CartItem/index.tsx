import useCart from "@/hooks/useCart";
import { Button } from "../ui/button";
import { CartEvent } from "@/types";

const CartItem = ({
  id,
  name,
  description,
  imageUrl,
  altImg,
  cost,
  quantity,
}: CartEvent) => {
  const { handleRemoveFromCart } = useCart(id, name);

  const subtotal = quantity * cost

  return (
    <article className="flex xl:w-[700px] border-l-4 border-l-sky-500">
      <div className="h-52 w-52 flex-shrink-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={altImg}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-2 w-full border-b flex flex-col">
        <div className="flex justify-between gap-2 text-sky-900">
          <h3 className="font-semibold">{name}</h3>
          <p>€ {cost}</p>
        </div>
        <div className="flex flex-col gap-2 h-full justify-between">
          <p className="text-sky-800 max-w-80">{description}</p>
          <div className="flex justify-end w-full">
            <Button onClick={handleRemoveFromCart}>Remove</Button>
          </div>
          <div className="flex justify-between">
            <p className="text-sky-800">Tickets: {quantity}</p>

            <p className="self-end font-semibold text-sky-900">
              Total: € {subtotal}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
