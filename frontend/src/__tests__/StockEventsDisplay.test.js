import { render, screen } from "@testing-library/react";
import StockEventsDisplay from "../components/StockEventsDisplay";

describe("StockEventsDisplay", () => {
  it("renders without crashing", () => {
    render(<StockEventsDisplay />);
  });
  it("contains a StockEventsDisplay div", () => {
    const { container } = render(<StockEventsDisplay />);
    const stockEventsDisplayDiv =
      container.getElementsByClassName("StockEventsDisplay")[0];
    expect(stockEventsDisplayDiv).toBeInTheDocument();
  });
});
