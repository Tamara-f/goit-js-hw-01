"use strict";

const total = 100;
let ordered;

let message_1 = "На складе недостаточно твоаров!";

let message_2 = "Заказ оформлен, с вами свяжется менеджер";

ordered = 50;

if (ordered <= total) {
  console.log(message_2);
} else {
  console.log(message_1);
}

// new order

ordered = 130;

if (ordered <= total) {
  console.log(message_2);
} else {
  console.log(message_1);
}
