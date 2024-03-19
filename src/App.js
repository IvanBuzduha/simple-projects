import { Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import { Tabs } from "./components/Tabs/Tabs";
import items from "./components/Tabs/items.json";
import mainRoutes from "./routes/mainRoutes";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import MainPage from "./components/pages/MainPage/Main";
import NoPage from "./components/pages/NoPage/NoPage";

function App() {
  return (
    // <Router>
    <div className="App">
      <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route index element={<HomePage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* <Routes>
        {mainRoutes.map((item) => (
          <Route {...item} key={item.path} />
        ))}
      </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
