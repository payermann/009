const numbers = [3, 12, 5, 8, 20, 15, 7];
const filteredNumbers = numbers.filter((number) => number > 10);
const mappedNumbers = filteredNumbers.map((number) => number * 2);
console.log(mappedNumbers.map((number) => number + 5));

const products = [
  { name: "T-Shirt", price: 25 },
  { name: "Socken", price: 5 },
  { name: "Hose", price: 40 },
  { name: "Schuhe", price: 80 },
  { name: "Mütze", price: 8 },
];

const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);
const productsWenige10 = sortedProducts.filter((product) => {
  return product.price > 10;
});
const rabattProzent20 = productsWenige10.map((product) => {
  // name: product.name,
  product.price = product.price * 0.8;
  return product;
});
const productsArray = rabattProzent20.map(
  (product) => `${product.name}: ${product.price.toFixed(2)}€`
);
console.log(productsArray);
