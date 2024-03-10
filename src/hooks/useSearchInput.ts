import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProduct, resetState } from "@/redux/productSlice";

const useSearchInput = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if(!searchText) {
            dispatch(resetState())
        }
        dispatch(filterProduct(searchText))
    }, [searchText])
    

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    };

    return {
        searchText, handleSearch
    }
}

export default useSearchInput