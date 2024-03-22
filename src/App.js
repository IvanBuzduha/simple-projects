import { Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import { Tabs } from "./components/Tabs/Tabs";

import mainRoutes from "./routes/mainRoutes";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import MainPage from "./components/pages/MainPage/MainPage";
import NoPage from "./components/pages/NoPage/NoPage";

import CurrencyInput from "./components/CurrencyConverter/CurrencyInput";
import CurrencySection from "./components/CurrencyConverter/CurrencySection";
import NeonButton from "./components/NeonButton/NeonButton";

function App() {
  return (
    // <Router>
    <div className="App">
      <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route index element={<HomePage />} />
        <Route path="/buttons" element={<NeonButton />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="currency" element={<CurrencySection />} />

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
