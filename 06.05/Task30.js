const nestedObject = {
  level1: {
    level2: {
      level3: {
        value: "nothing here yet...",
      },
    },
  },
};

const deepValue = ["level1", "level2", "level3", "value"].reduce(
  (acc, x) => acc[x],
  nestedObject
);
console.log(deepValue);
