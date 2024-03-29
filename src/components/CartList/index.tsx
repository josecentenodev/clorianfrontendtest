import * as React from "react";
import CartItem from "../CartItem";
import { CartEvent } from '@/types'

interface ListOfEventsProps {
  events: CartEvent[];
}

const CartList: React.FC<ListOfEventsProps> = ({ events }) => {
  return (
    <section className="flex flex-col justify-start items-start gap-y-12 animate-slide-in-left">
      {events.map((event) => 
        <CartItem key={event.id} id={event.id} name={event.name} description={event.description} imageUrl={event.imageUrl} altImg={event.altImg} cost={event.cost} quantity={event.quantity}/>)}
    </section>
  );
};

export default CartList;
