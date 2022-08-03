import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("contains a Home div", () => {
    const { container } = render(<Home />);
    const homeDiv = container.getElementsByClassName("Home")[0];
    expect(homeDiv).toBeInTheDocument();
  });

  it("contains the Heading", () => {
    render(<Home />);
    const heading = screen.getByText(/Home/i);
    expect(heading).toBeInTheDocument();
  });

  it("contains the Subheading", () => {
    render(<Home />);
    const subheading = screen.getByText(/This is a simple app project/i);
    expect(subheading).toBeInTheDocument();
  });

  it("contains 3 paragraphs", () => {
    const { container } = render(<Home />);
    const paragraphs = container.getElementsByTagName("p");
    expect(paragraphs).toHaveLength(3);
  });
});
