import * as React from "react";
import CartItem from "../CartItem";

interface CartEvent {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altImg: string;
  cost: number;
  quantity: number;
}

interface ListOfEventsProps {
  events: CartEvent[];
}

const CartList: React.FC<ListOfEventsProps> = ({ events }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-12 animate-slide-in-left">
      {events.map((event) => 
        <CartItem key={event.id} id={event.id} name={event.name} description={event.description} imageUrl={event.imageUrl} altImg={event.altImg} cost={event.cost} quantity={event.quantity}/>)}
    </div>
  );
};

export default CartList;
