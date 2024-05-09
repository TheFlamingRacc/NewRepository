const array = ["hello bro", "world is good", "hello, John", "Mario Bros"];

const containsHello = array.some((x) => x.toLowerCase().includes("hello"));

console.log(containsHello);
