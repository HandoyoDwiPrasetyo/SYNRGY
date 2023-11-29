import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HomeListCar from "./pages/HomeListCar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-list" element={<HomeListCar />} />
      </Routes>
    </Router>
  );
};

export default App;
