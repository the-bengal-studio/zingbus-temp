import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rides from "./components/Rides/Rides";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bustickets" element={<Rides />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
