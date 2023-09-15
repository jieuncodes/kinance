import Market from "./components/Market";
import NavigationMenuBar from "./components/header/NavigationMenu";
import { Contents, GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <GlobalStyle>
      <NavigationMenuBar />
      <Contents>
        <Market />
      </Contents>
    </GlobalStyle>
  );
}

export default App;
