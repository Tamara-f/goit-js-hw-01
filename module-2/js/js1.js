const logItems = function (array) {
  for (let i = 1; i < array.length; i += 1) {
    console.log(i + " - " + array[i]);
  }
};

let names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
logItems(names);

names = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
logItems(names);

/*
/* Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Volodymyr Omelianiuk
// 2 - зачем let message = 0;
// let pricePerWord;
// 4 - слишком сложно, попробуй просто отрезать символы после 40 и доставить ...
// 5 - в последнем вызове ф-ции не правильный результат
// 6 - нету вывода в консоль суммы
