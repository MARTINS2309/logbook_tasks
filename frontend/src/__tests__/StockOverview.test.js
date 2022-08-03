import { render, screen } from "@testing-library/react";
import StockOverview from "../components/StockOverview";

describe("StockOverview", () => {
  it("renders without crashing", () => {
    render(<StockOverview />);
  });
  it("contains a StockOverview div", () => {
    const { container } = render(<StockOverview />);
    const stockOverviewDiv =
      container.getElementsByClassName("StockOverview")[0];
    expect(stockOverviewDiv).toBeInTheDocument();
  });
  it("contains the Heading", () => {
    render(<StockOverview />);
    const heading = screen.getByText(/Stock Overview/i);
    expect(heading).toBeInTheDocument();
  });
  it("contains a description paragraph", () => {
    const { container } = render(<StockOverview />);
    const paragraphs = container.getElementsByTagName("p");
    expect(paragraphs).toHaveLength(1);
  });
  it("contains a refresh button", () => {
    render(<StockOverview />);
    const refreshButton = screen.getByText(/Refresh/i);
    expect(refreshButton).toBeInTheDocument();
  });
  it("contains a table", () => {
    render(<StockOverview />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
