import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ErrorDisplay from "./ErrorDisplay";
import Pjson from "../data/products.json";
import SEjson from "../data/stockEvents.json";
import ProductsDisplay from "./ProductsDisplay";

export default function StockOverview() {
  const [products, setProducts] = useState([]);
  const [stockEvents, setStockEvents] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [btnMsg, setBtnMsg] = useState("Load data");
  const [btnVar, setBtnVar] = useState("outline-primary");

  const fetchData = async ({ handleSuccess, handleFail, url }) => {
    fetch(url)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((error) => {
        handleFail(error);
      });
  };

  const handleSuccessProducts = async (res) => {
    const data = await res.json();
    setProducts(data);
    setBtnMsg("Data loaded");
    setBtnVar("success");
    setError(null);
    setLoading(false);
  };
  const handleSuccessStockEvents = async (res) => {
    const data = await res.json();
    setStockEvents(data);
    setBtnMsg("Data loaded");
    setError(null);
    setLoading(false);
  };

  const handleFail = (error) => {
    console.error("fetchData error:", error);
    setBtnMsg("Load data");
    setBtnVar("outline-danger");
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      setProducts([]);
      setStockEvents([]);
      fetchData({
        handleSuccess: handleSuccessProducts,
        handleFail: handleFail,
        url: "http://localhost:3001/products",
      });
      fetchData({
        handleSuccess: handleSuccessStockEvents,
        handleFail: handleFail,
        url: "http://localhost:3001/stockevents",
      });
    }
  }, [loading]);

  const handleButtonClick = () => {
    setLoading(true);
    setBtnVar("outline-primary");
    setBtnMsg("Loading...");
  };

  const handleDemo = () => {
    setProducts(Pjson);
    setStockEvents(SEjson);
    setBtnMsg("Data loaded");
    setBtnVar("success");
    setError(null);
    setLoading(false);
  };

  return (
    <div className="StockOverview">
      <div className="Description">
        <h1>Stock Overview</h1>
        <p>Press this button to get data from the server</p>
        <Button variant={btnVar} disabled={loading} onClick={handleButtonClick}>
          {btnMsg}
        </Button>
      </div>
      {error ? (
        <ErrorDisplay error={error} demo={handleDemo} />
      ) : (
        <ProductsDisplay products={products} stockEvents={stockEvents} />
      )}
    </div>
  );
}
