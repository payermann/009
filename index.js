const numbers = [3, 12, 5, 8, 20, 15, 7];
const filteredNumbers = numbers.filter((number) => number > 10);
const mappedNumbers = filteredNumbers.map((number) => number * 2);
console.log(mappedNumbers.map((number) => number + 5));

const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Socken", price: 5 },
    { name: "Hose", price: 40 },
    { name: "Schuhe", price: 80 },
    { name: "Mütze", price: 8 }
];
const wenige10€Products = products.filter((product) => product.price < 10);
const rabatt20Prozent = wenige10€Products.map((product) => product.price * 0.8);
const productsArray = rabatt20Prozent.map((product) => `${product.name}: ${product.price}€`);
console.log(productsArray);
