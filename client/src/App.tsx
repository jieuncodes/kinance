import Market from "components/Market";
import { Route, Routes } from "react-router-dom";
import NavigationMenuBar from "./components/header/NavigationMenu";
import { AppContainer } from "./styles/globalStyle";
import ErrorPage from "components/ErrorPage";
import CoinDetailPage from "components/coin/CoinDetail";

function App() {
  return (
    <AppContainer>
      <NavigationMenuBar />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/coin/:id" element={<CoinDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
