const strings = ["Hello", "World", "JavaScript"];

const allStartWithUpperCase = strings.every(str => str.slice(0, 1) === str.slice(0, 1).toUpperCase());

console.log(allStartWithUpperCase);