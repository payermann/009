const numbers = [3, 12, 5, 8, 20, 15, 7];
const filteredNumbers = numbers.filter((number) => number > 10);
const mappedNumbers = filteredNumbers.map((number) => number * 2);
console.log(mappedNumbers.map((number) => number + 5));
