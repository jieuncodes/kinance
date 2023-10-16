# Kinance with Test Driven Development 

##Test Code Loop:
Write initial test code that is expected not to pass.
Develop code that will pass the test.
Refactor the resulting code

## Game Plan
-[x] Sortable table
-[ ] Fake buy and sell
-[x] Chart Ui
-[ ] responsible design
-[ ] Chart Zoom-in-out

```
kinance
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ components
│  │  │  ├─ CryptoTable.tsx
│  │  │  ├─ Icons.tsx
│  │  │  ├─ ListItem.tsx
│  │  │  ├─ Market.tsx
│  │  │  ├─ SearchBar.tsx
│  │  │  ├─ TableNav.tsx
│  │  │  ├─ header
│  │  │  │  ├─ Logo.tsx
│  │  │  │  ├─ Menu.tsx
│  │  │  │  ├─ NavBtns.tsx
│  │  │  │  └─ NavigationMenu.tsx
│  │  │  └─ ui
│  │  │     ├─ Button.tsx
│  │  │     ├─ Input.tsx
│  │  │     ├─ NavigationMenu.tsx
│  │  │     └─ Table.tsx
│  │  ├─ index.css
│  │  ├─ index.tsx
│  │  ├─ lib
│  │  │  └─ utils.ts
│  │  ├─ services
│  │  │  └─ binanceApi.ts
│  │  ├─ setupTests.js
│  │  ├─ styles
│  │  └─ types
│  ├─ test
└─ server
   ├─ src
   │  ├─ controllers
   │  │  └─ globalControllers.ts
   │  ├─ init.ts
   │  ├─ routers
   │  │  └─ apiRouter.ts
   │  └─ server.ts

```

Two Different Events: 
1. D3 .on() method
-  Adds eventListener directly to the DOM element.
- So the triggered event is browser's native event.

2. React event system
- uses synthetic Events
- Wraps native browser's event to generate an object
- Abstracts the event differences between browsers, allowing developers to code consistently.

D3 uses 'this' frequently, so I replaced arrow functions with regular functions.