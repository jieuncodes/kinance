import Market from "./components/Market";
import NavigationMenuBar from "./components/NavigationMenu";
import { GlobalContainer } from "./styles/globalStyle";

function App() {
  return (
    <GlobalContainer>
      <NavigationMenuBar />
      <Market />
    </GlobalContainer>
  );
}

export default App;
