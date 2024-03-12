import { Input } from "@/components/ui/input";
import useSearchInput from "@/hooks/useSearchInput";


const SearchInput = () => {
    const { handleSearch } = useSearchInput()
  return (
      <Input onChange={handleSearch} placeholder='Search by name or description...' />
  );
};

export default SearchInput;
