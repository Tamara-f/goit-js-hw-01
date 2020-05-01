const add = function () {
  let input;
  const numbers = [];
  let total = 0;
  do {
    input = prompt("введите число");

    if (input === null) {
      console.log("отменено пользователем");
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
  return "Общая сумма чисел равна " + total;
};

console.log(add());
