import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import MainPage from "./components/pages/MainPage/MainPage";
import NoPage from "./components/pages/NoPage/NoPage";
import CurrencySection from "./components/CurrencyConverter/CurrencySection";
import NeonButton from "./components/NeonButton/NeonButton";
import Timer from "./components/Timer/Timer";
import ToDo from "./components/ToDo/ToDo";
import Calc from "./components/Calc/Calc";
import SliderSwiper from "./components/Slider/SliderSwiper";
import Quiz from "./components/Quiz/Quiz";
import WaterWaveAnimation from "./components/WaterWaweAnimation/WaterWaweAnimation";

function App() {
  return (
    // <Router>
    <div className="App">
      <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route index element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/buttons" element={<NeonButton />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="currency" element={<CurrencySection />} />
        <Route path="timer" element={<Timer />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="slider" element={<SliderSwiper />} />
        <Route path="waterWave" element={<WaterWaveAnimation />} />
        {/* <Route path="calc" element={<Calc />} /> */}

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
