export function searchProducts(name, products) {
  const result = [];
  products.forEach((data) => {
    if (name.toUpperCase() === data.name.slice(0, name.length).toUpperCase()) {
      result.push(data);
    }
  });

  return result;
}
