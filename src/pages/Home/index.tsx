import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { fetchAsyncProducts } from "@/redux/productSlice";
import ListOfEvents from "@/components/ListOfEvents";
import OrderEvents from "@/components/OrderEvents";
import SearchInput from "@/components/SearchInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Skeleton } from "@/components/ui/skeleton";
import EventSkeleton from "@/components/EventsSkeleton";

const Home = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(
    (state: RootState) => state.events.filteredProducts
  );

  const isLoading = useAppSelector(
    (state: RootState) => state.events.isLoading
  );

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

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
        { isLoading ? <EventSkeleton /> : <ListOfEvents events={products} />}
      </div>
    </>
  );
};

export default Home;
