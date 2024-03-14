import { Product } from "@/types";
import EventCard from "../EventCard";

interface ListOfEventsProps {
  events: Product[];
}

const ListOfEvents: React.FC<ListOfEventsProps> = ({ events }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 animate-slide-in-bottom">
      {events?.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          name={event.name}
          description={event.description}
          validityDate={event.validityDate}
          cost={event.cost}
          imageUrl={event.imageUrl}
          altImg={event.altImg}
        />
      ))}
    </section>
  );
};

export default ListOfEvents;
