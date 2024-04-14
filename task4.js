const keyValuePairs = [['a', 1], ['b', 2], ['c', 3]];

const resultObject = keyValuePairs.reduce((obj, x) => {
    obj[key] = value;
    return obj;
}, {});

console.log(resultObject);