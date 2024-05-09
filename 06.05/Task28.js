const objects = [
  { name: "John", age: 30 },
  { city: "New York", country: "USA" },
  { job: "Developer" },
];

const concatenatedObject = objects.reduce((acc, x) => {
  return { ...acc, ...x };
}, {});

console.log(concatenatedObject);
