let randomNumber = Math.floor(Math.random() * 10);

let guess;

while (guess !== randomNumber) {
  guess = parseInt(
    prompt("Відгадайте число комп'ютера від 1 до 10 й отримайте 0 гривень!")
  );

  if (guess === randomNumber) {
    alert(
      "Молодець! Скиньте Вашу банківську карту з обох сторін для зачислення винагороди!"
    );
  } else {
    alert("Нажаль, ви помилилися. Ловіть жирний дізлайк👎🏿");
  }
}
