"use strict";

let message_1 = "Отменено пользователем!";
let message_2 = "В вашей стране доставка не доступна";

let country = prompt("your country");
console.log(country);

let price;
country = country.toLowerCase();

if (country === "китай") {
  price = 100;
} else if (country === "чили") {
  price = 250;
} else if (country === "австралия") {
  price = 170;
} else if (country === "индия") {
  price = 80;
} else if (country === "ямайка") {
  price = 120;
} else {
  alert(message_2);
}

console.log(price);

switch (country) {
  case null:
    console.log(message_1);
    break;

  default:
    console.log(
      "Доставка в",
      country.toUpperCase(),
      "будет стоить",
      price,
      "кредитов"
    );
    break;
}
