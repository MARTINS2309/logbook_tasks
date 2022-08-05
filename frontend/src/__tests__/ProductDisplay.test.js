import { render, screen } from "@testing-library/react";
import ProductsDisplay from "../components/ProductsDisplay";
import Pjson from "../data/products.json";
import SEjson from "../data/stockEvents.json";

describe("ProductsDisplay", () => {
  it("contains a ProductsDisplay div", () => {
    const { container } = render(
      <ProductsDisplay products={Pjson} stockEvents={SEjson} />
    );
    const productDisplayDiv =
      container.getElementsByClassName("ProductsDisplay")[0];
    expect(productDisplayDiv).toBeInTheDocument();
  });

  it("contains a ProductDisplay__product div", () => {
    const { container } = render(
      <ProductsDisplay products={Pjson} stockEvents={SEjson} />
    );
    const productDisplayProductDiv =
      container.getElementsByClassName("PD__product")[0];
    expect(productDisplayProductDiv).toBeInTheDocument();
  });
  it("contains a Product Name section", () => {
    const { container } = render(
      <ProductsDisplay products={Pjson} stockEvents={SEjson} />
    );
    const productName = container.getElementsByClassName("PD__name")[0];
    expect(productName).toBeInTheDocument();
  });
  it("the first Product is " + Pjson[0].name, () => {
    const { container } = render(
      <ProductsDisplay products={Pjson} stockEvents={SEjson} />
    );
    const productName = container.getElementsByClassName("PD__name")[0];
    expect(productName.textContent).toBe(Pjson[0].name);
  });
  it("contains a Product Quantity", () => {
    const { container } = render(
      <ProductsDisplay products={Pjson} stockEvents={SEjson} />
    );
    const productQuantity = container.getElementsByClassName("PD__quantity")[0];
    expect(productQuantity).toBeInTheDocument();
  });
  it("the first Product has a quantity of 1000", () => {
    const { container } = render(
      <ProductsDisplay products={Pjson} stockEvents={SEjson} />
    );
    const productQuantity = container.getElementsByClassName("PD__quantity")[0];
    expect(productQuantity.textContent).toMatch(/1000/i);
  });
});
