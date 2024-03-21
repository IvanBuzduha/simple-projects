import { Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import { Tabs } from "./components/Tabs/Tabs";

import mainRoutes from "./routes/mainRoutes";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import MainPage from "./components/pages/MainPage/MainPage";
import NoPage from "./components/pages/NoPage/NoPage";
import ClockAnalog from "./components/pages/ClockAnalog/ClockAnalog";

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
        <Route path="clock" element={<ClockAnalog />} />
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
