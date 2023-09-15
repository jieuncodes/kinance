import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Logo from "./Logo";
import Menu from "./Menu";
import NavBtns from "./NavBtns";

function NavigationMenuBar() {
  return (
    <NavigationMenu className="grid grid-cols-[1fr_10fr_3fr] items-center px-6 ">
      <Logo />
      <Menu />
      <NavBtns />
    </NavigationMenu>
  );
}

export default NavigationMenuBar;
