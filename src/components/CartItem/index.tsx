import { Button } from "../ui/button";

interface CartEvent {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altImg: string;
  cost: number;
  quantity: number;
}

const CartItem = ({
  id,
  name,
  description,
  imageUrl,
  altImg,
  cost,
  quantity,
}: CartEvent) => {
    const handleRemoveFromCart = () => {
        console.log(id)
    }

  return (
    <div className="flex w-[800px]">
      <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageUrl}
          alt={altImg}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-2 w-full border-b flex flex-col">
        <div className="flex justify-between gap-2 text-cyan-900">
          <h3 className="font-semibold">{name}</h3>
          <p>€ {cost}</p>
        </div>
        <div className="flex flex-col gap-2 h-full justify-between">
          <p className="text-cyan-800">{description}</p>
          <div className="flex justify-end w-full">
            <Button onClick={handleRemoveFromCart}>Remove</Button>
        </div>
          <div className="flex justify-between">
          <p className="text-cyan-800">Tickets: {quantity}</p>

          <p className="self-end font-semibold text-cyan-900">
            Total: € {quantity * cost}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
