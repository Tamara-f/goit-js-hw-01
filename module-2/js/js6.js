let input;
const numbers = [];
let total = 0;

const add = function () {
  do {
    input = prompt("введите число");

    if (input === null) {
      return "отменено пользователем";
      break;
    }

    input = Number(input);

    if (Number.isNaN(input)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    numbers.push(input);
    console.log(numbers);
  } while (true);

  for (let number of numbers) {
    total += number;
  }
  alert("Общая сумма чисел равна " + total);
};

console.log(add());
