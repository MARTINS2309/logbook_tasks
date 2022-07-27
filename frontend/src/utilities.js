//function to get products from the API
export const fetchProducts = async ({ setData }) => {
  await fetch("/products").then((response) => console.log(response.json()));
};

export const fetchStockEvents = async ({ setData }) => {
  fetch("/stockevents")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
};
