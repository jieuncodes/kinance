import { Icons } from "./Icons";
import { Input } from "./ui/Input";

function SearchBar() {
  return (
    <div className="relative">
      <Icons.searchIcon
        size={20}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 font-bold text-slate-300"
      />
      <Input type="text" placeholder="Search Crypto Currencies..." />
    </div>
  );
}
export default SearchBar;
