import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import StockOverview from "./components/StockOverview";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stockoverview" element={<StockOverview />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
