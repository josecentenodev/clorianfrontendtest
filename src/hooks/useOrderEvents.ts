import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sort } from "@/redux/productSlice";

const useOrderEvents = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("name");
  const [suborder, setSuborder] = useState("asc");

  useEffect(() => {
    dispatch(sort({ order: order, suborder: suborder }));
  }, [order, suborder]);

  const handleSuborderChange = (value: string) => {
    switch (value) {
        case "asc":
            return setSuborder(value);
          case "desc":
            return setSuborder(value);
        default:
            break;
    }
  }

  const handleOrderChange = (value: string) => {
    switch (value) {
      case "name":
        return setOrder(value);
      case "description":
        return setOrder(value);
      case "validityDate":
        return setOrder(value);

      default:
        break;
    }
  };

  return { order, suborder, handleOrderChange, handleSuborderChange };
};

export default useOrderEvents;
