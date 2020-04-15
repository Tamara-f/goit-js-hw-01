"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message_1 = "Отменено пользователем!";
let message_2 = "Добро пожаловать!";
let message_3 = "Доступ запрещен, неверный пароль!";

let password = prompt("Please enter password");
console.log(password);

switch (password) {
  case null:
    console.log(message_1);
    break;

  case ADMIN_PASSWORD:
    alert(message_2);
    break;

  default:
    alert(message_3);
}
