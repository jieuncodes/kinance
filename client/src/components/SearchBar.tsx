import { Icons } from "./Icons";
import { Input } from "./ui/Input";

function SearchBar({ expandable }: { expandable?: boolean }) {
  return (
    <div className={`relative flex items-center`}>
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <Icons.searchIcon size={20} className="font-bold text-slate-300" />
      </div>
      <Input
        type="text"
        placeholder="Search Crypto Currencies..."
        className={`${
          expandable
            ? "w-0 border-transparent focus:border-slate-500  focus:w-80 ease-linear pl-10 z-10 transition-all"
            : "w-80"
        }`}
      />
    </div>
  );
}

export default SearchBar;
