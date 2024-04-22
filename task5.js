const keyValuePairs = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ];
  
  const objects = keyValuePairs.reduce((acc, x) => {
    let key = x[0];
    let value = x[1];
    return { ...acc, [key]: value };
  }, {});
  
  console.log(objects);
  