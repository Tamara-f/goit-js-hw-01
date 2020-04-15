"use strict";

let credits = 23500;

let message_1 = "Отменено пользователем!";
let message_2 = "Недостаточно средств на счету!";

let pricePerDroid = 3000;
let totalPrice;

let value = prompt("количество дроидов, которые вы хотите купить");
console.log(value);

switch (value) {
  case null:
    console.log(message_1);
    break;

  default:
    totalPrice = value * pricePerDroid;
    console.log(totalPrice);
    break;
}

switch (totalPrice) {
  case totalPrice:
    if (totalPrice > credits) {
      console.log(message_2);
      break;
    }
  default:
    if (totalPrice <= credits) {
      console.log(
        "Вы купили",
        value,
        "дроидов, на счету осталось",
        credits - totalPrice,
        "кредитов.."
      );
    }
}
