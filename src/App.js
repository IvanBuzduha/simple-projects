import "./App.css";
import { Tabs } from "./components/Tabs/Tabs";
import items from "./components/Tabs/items.json";
// const items = [
//   { title: "London", content: "London is the capital city of England." },
//   { title: "Paris", content: "Paris is the capital of France." },
//   { title: "Tokyo", content: "Tokyo is the capital of Japan." },
// ];

function App() {
  return (
    <div className="App">
      <Tabs items={items} />
    </div>
  );
}

export default App;
