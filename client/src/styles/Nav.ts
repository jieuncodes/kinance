import tw from "tailwind-styled-components";

export const MarketMenuUl = tw.ul`grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black/50`;
export const MarketMenuBanner = tw.li`row-span-3 banner-bg  bg-cover bg-no-repeat`;
export const MarketAnchor = tw.a`flex h-full w-full select-none flex-col justify-end rounded bg-opacity-50 bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md`;
export const MarketBannerTitle = tw.div`mb-2 mt-4 text-lg font-medium"`;
export const MarketBannerDesc = tw.div`text-sm leading-tight text-muted-foreground`;

export const WatchMenuUl = tw.ul`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/80`;
