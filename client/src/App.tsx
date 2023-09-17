import Market from "components/Market";
import { Route, Routes } from "react-router-dom";
import NavigationMenuBar from "./components/header/NavigationMenu";
import { AppContainer } from "./styles/globalStyle";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<NavigationMenuBar />}>
          <Route path="/" element={<Market />} />
          {/* <Route path="/coin/:id" element={<CoinPage />} /> */}
        </Route>
      </Routes>{" "}
    </AppContainer>
  );
}

export default App;
