function randomInRange(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}
alert(randomInRange(3, 5));
