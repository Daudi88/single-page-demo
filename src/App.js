import { HomeView } from "./views/homeview/HomeView";
import { Calculator } from "../src/components/calculator/Calculator"

function App() {
  return (
    <div className="App">
      <h1>This is our app</h1>
      <HomeView />
      <Calculator />
    </div>
  );
}

export default App;
