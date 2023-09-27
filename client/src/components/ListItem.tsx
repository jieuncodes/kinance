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
          "block select-none space-y-1 rounded-md from-blue-500 to-blue-50 p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent focus:bg-accent focus:text-accent-foreground ",
          className,
        )}
        {...props}
      >
        <div>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm font-thin leading-snug ">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
