export function searchProducts(name, products, prevProduct) {
  const result = [];

  if (name === '') {
    return prevProduct;
  }
  products.forEach((data) => {
    if (name.toUpperCase() === data.name.slice(0, name.length).toUpperCase()) {
      result.push(data);
    }
  });

  return result;
}
