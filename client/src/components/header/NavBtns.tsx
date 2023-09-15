import SearchBar from "components/SearchBar";
import { Button } from "components/ui/Button";

function NavBtns() {
  return (
    <div className="flex flex-row items-center gap-1">
      <SearchBar expandable />
      <Button className="w-24 h-10 bg-blue-950/10 rounded hover:bg-blue-900 hover:border-none">
        Log in
      </Button>
      <Button className="w-24 h-10 bg-blue-950 rounded hover:bg-blue-900 hover:border-none">
        Sign up
      </Button>
    </div>
  );
}
export default NavBtns;
