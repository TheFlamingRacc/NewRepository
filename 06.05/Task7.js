const strings = ["Hello, World!", "Such a good world", "Hello, bro"];

const keyword = "world";

const keywordContainer = strings.filter((x) =>
  x.toLowerCase().includes(keyword)
);

console.log(keywordContainer);
