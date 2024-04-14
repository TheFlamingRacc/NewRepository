const strings = ['Hello', ' ', 'world', '!'];

const greeting = strings.reduce((acc, x) => {
    return acc + x
}, "");

console.log(greeting);