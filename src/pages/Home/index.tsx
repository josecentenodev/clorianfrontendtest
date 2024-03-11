import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ListOfEvents from "@/components/ListOfEvents";
import OrderEvents from "@/components/OrderEvents";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const { filteredProducts } = useSelector(
    (state: RootState) => state.events
  );

  return (
    <>
      <h1 className="text-4xl text-center text-cyan-900 py-12">
        Step Into Our World of Amazing Activities
      </h1>
      <div className="flex justify-start items-center py-5">
        <SearchInput />
      </div>
      <div className="flex gap-5">
        <OrderEvents />
        <ListOfEvents events={filteredProducts} />
      </div>
    </>
  );
};

export default Home;
