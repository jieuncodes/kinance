import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "lib/utils";
import { forwardRef } from "react";

export const ListItem = forwardRef<
  React.ElementRef<"a">,
  Omit<React.ComponentPropsWithoutRef<"a">, "onSelect">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        key={0}
        asChild
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-blue-50 ",
          className
        )}
        {...props}
      >
        <div>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug font-thin ">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
