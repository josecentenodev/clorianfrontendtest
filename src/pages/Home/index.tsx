import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ListOfEvents from "@/components/ListOfEvents";
import OrderEvents from "@/components/OrderEvents";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const { filteredProducts } = useSelector((state: RootState) => state.events);

  return (
    <>
        <h1 className="text-4xl text-center text-sky-900 py-20 animate-slide-in-top">
          Step Into Our World of Amazing Activities
        </h1>
      <div className="flex gap-5 flex-col sm:flex-row pb-12">
        <div className="p-5 flex flex-col gap-5 md:min-w-72 sm:h-80 shadow-sm rounded-md text-sky-900 bg-sky-50 animate-slide-in-left">
          <SearchInput />
          <OrderEvents />
        </div>
        <ListOfEvents events={filteredProducts} />
      </div>
    </>
  );
};

export default Home;
