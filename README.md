# Kinance with Test Driven Development 

##Test Code Loop:
Write initial test code that is expected not to pass.
Develop code that will pass the test.
Refactor the resulting code

## Game Plan
-[ ] Sortable table
-[ ] Fake buy and sell
-[ ] Chart Ui
-[ ] responsible design


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
   │  │  └─ rootRouter.ts
   │  └─ server.ts

```