import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { StockOverview } from "./components/StockOverview";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<StockOverview />} />
      </Routes>
    </div>
  );
}

export default App;
