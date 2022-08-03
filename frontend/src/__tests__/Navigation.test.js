import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  it("renders without crashing", () => {
    render(<Navigation />);
  });
  it("contains a Home link", () => {
    render(<Navigation />);
    const homeLink = screen.getByText(/Inventory/i);
    expect(homeLink).toBeInTheDocument();
  });
  it("contains a Stock Overview link", () => {
    render(<Navigation />);
    const stockOverviewLink = screen.getByText(/Stock Overview/i);
    expect(stockOverviewLink).toBeInTheDocument();
  });
});
