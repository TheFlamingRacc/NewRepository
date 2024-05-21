//Додавання індексу до кожного елемента масиву: Створіть масив чисел або рядків і використовуйте map, щоб додати індекс кожного елемента до нього.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const numPlusIndex = numbers.map((x) => x + numbers.indexOf(x));

console.log(numPlusIndex);
