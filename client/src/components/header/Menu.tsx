import { Icons } from "components/Icons";

import { ListItem } from "components/ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "components/ui/NavigationMenu";

import {
  MarketAnchor,
  MarketBannerDesc,
  MarketBannerTitle,
  MarketMenuBanner,
  MarketMenuUl,
  WatchMenuUl,
} from "styles/Nav";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Watch History",
    href: "/",
    description: "You can review the cryptocurrencies you recently explored.",
  },
  {
    title: "My watchlist",
    href: "/",
    description: "Create and manage a personalized cryptocurrency watchlist. ",
  },
];

function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MarketMenuUl>
              <MarketMenuBanner>
                <NavigationMenuLink asChild>
                  <MarketAnchor href="/">
                    <Icons.rocket className="h-6 w-6" />
                    <MarketBannerTitle>Kinance</MarketBannerTitle>
                    <MarketBannerDesc>
                      View top cryptocurrency prices live, crypto charts, market
                      cap, and trading volume.
                    </MarketBannerDesc>
                  </MarketAnchor>
                </NavigationMenuLink>
              </MarketMenuBanner>
              <ListItem key="cap" href="/" title="By Market Cap">
                The global cryptocurrency market cap today is $1.1 Trillion.
              </ListItem>
              <ListItem key="new" href="/" title="New Crypto Currencies">
                Discover new cryptocurrencies that were recently added.
              </ListItem>
              <ListItem
                key="gainers-losers"
                href="/"
                title="Gainers and Losers"
              >
                Discover the largest gainers and losers.
              </ListItem>
            </MarketMenuUl>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Watch</NavigationMenuTrigger>
          <NavigationMenuContent>
            <WatchMenuUl>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </WatchMenuUl>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-sm pl-3">
            Visitor log
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Menu;
