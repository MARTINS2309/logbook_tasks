import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the navigation", () => {
    render(<App />);
    const linkElement = screen.getByText(/Inventory/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the home page", () => {
    render(<App />);
    const textSnippet = screen.getByText(/This is a simple app project/i);
    expect(textSnippet).toBeInTheDocument();
  });

  it("renders the stock overview page", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Stock Overview/i));
    expect(screen.getByText("Stock Overview")).toBeInTheDocument();
  });
});
