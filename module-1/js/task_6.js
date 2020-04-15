"use strict";

let value = 0;
let total = 0;

while (value != null) {
  value = prompt("введите число");
  if (value != null) {
    console.log(value);
    value = parseInt(value);
    total += value;
  } else {
    alert("Общая сумма чисел равна " + total);
  }
  // if (total==NaN){
  //     value = prompt('Было введено не число, попробуйте еще раз');
  //     }
}
