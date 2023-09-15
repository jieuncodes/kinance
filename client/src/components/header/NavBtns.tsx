import { Icons } from "components/Icons";
import { Button } from "ui/Button";

function NavBtns() {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="hover:cursor-pointer h-12 w-12 flex items-center justify-center">
        <Icons.searchIcon size={20} className="font-bold" />
      </div>

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
