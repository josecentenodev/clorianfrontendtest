import { Input } from "@/components/ui/input";
import useSearchInput from "@/hooks/useSearchInput";


const SearchInput = () => {
    const { handleSearch } = useSearchInput()
  return (
    <div className="w-80 flex items-center bg-white rounded-md border border-input">
      🔎
      <Input onChange={handleSearch} placeholder='Search by name or description...' />
    </div>
  );
};

export default SearchInput;
