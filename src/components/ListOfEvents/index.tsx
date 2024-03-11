import EventCard from "../EventCard";

interface Event {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altImg: string;
  validityDate: string;
  cost: number;
}

interface ListOfEventsProps {
  events: Event[];
}

const ListOfEvents: React.FC<ListOfEventsProps> = ({ events }) => {
  return (
    <div className="masonry sm:masonry-sm md:masonry-md gap-5 space-y-3">
      {events.map((event) => (
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
    </div>
  );
};

export default ListOfEvents;
