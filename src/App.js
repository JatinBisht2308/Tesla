import "./App.css";
import Home from "./pages/Home";
import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import SolarPanels from "./pages/SolarPanels";
import SolarRoof from "./pages/SolarRoof";
import PowerWall from "./pages/PowerWall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/modelS" element={<ModelS />} />
    <Route path="/model3" element={<Model3 />} />
    <Route path="/modelX" element={<ModelX />} />
    <Route path="/modelY" element={<ModelY />} />
    <Route path="/solarPanels" element={<SolarPanels />} />
    <Route path="/solarRoof" element={<SolarRoof />} />
    <Route path="/powerWall" element={<PowerWall />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
