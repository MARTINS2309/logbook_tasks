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

  it("contains a Description div", () => {
    const { container } = render(<StockOverview />);
    const descriptionDiv = container.getElementsByClassName("Description")[0];
    expect(descriptionDiv).toBeInTheDocument();
  });

  it("contains a Heading", () => {
    render(<StockOverview />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Stock Overview");
  });
  it("contains a description paragraph", () => {
    const { container } = render(<StockOverview />);
    const paragraphs = container.getElementsByTagName("p");
    expect(paragraphs).toHaveLength(1);
    expect(paragraphs[0].textContent).toMatch(/Press this button/i);
  });
  it("contains a Load Data button", () => {
    render(<StockOverview />);
    const refreshButton = screen.getByRole("button");

    expect(refreshButton).toBeInTheDocument();
    expect(refreshButton).toHaveTextContent(/Load Data/i);
  });
});
