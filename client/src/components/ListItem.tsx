import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "lib/utils";
import { forwardRef } from "react";

export const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-blue-600"
      >
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug  text-white/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
