"use strict";

/*

===============        ДОМАШНЕЕ ЗАДАНИЕ 13 ===============

Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/

/*
Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
*/

var arr = [];
var userArrLength = +prompt('Put LENGTH of your arrow', '');
for (var i = 0; i <= userArrLength - 1; i++) {
  var item = prompt("Put your elements into arrow which has length only ".concat(userArrLength, " items"), '');
  if (!isNaN(parseFloat(item))) {
    arr.push(parseFloat(item));
  } else {
    arr.push(item);
  }
}
console.log('You are created arrow :');
console.log(arr); // создан пользовательский массив 
//"Этот массив может содержать и строки и числа!!!!"

/* ==================Задание 2 Відсортувати масив за зростанням. ==================

Так как массив может содержать строки и числа то их надо сортировать отдельно. 
Для этого надо задать условия сортировки
*/

arr.sort(function (a, b) {
  // Открываем фигурные скобки для функции сравнения sort().
  if (typeof a === 'number' && typeof b === 'number') {
    // если параметр а и параметр б - числа
    return a - b; // Сортировка чисел  на возрастание
  } else if (typeof a === 'string' && typeof b === 'string') {
    //если параметры строки 
    return a.localeCompare(b); // Сравнение строк по лексографическому признаку а больше б
  } else {
    // если переметр ни строка ни число - оставляем как есть 
    return 0; // Оставить элементы без изменений, если они не являются ни числами, ни строками
  }
}); // Закрываем фигурные скобки для функции сравнения и метода sort

console.log(arr);

// ЭТО БЫЛО ОЧЕНЬ СЛОЖНО!!!! 

/*
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/
var arrForDelete = [];
console.log(arrForDelete);
var userLengthArr = +prompt('Put LENGTH of your arrow min 4 items', '');
if (userLengthArr < 4) {
  alert('Put please arrow length 4 or more');
} else {
  for (var _i = 0; _i <= userLengthArr - 1; _i++) {
    var _item = prompt("Put your elements into arrow which has length only ".concat(userLengthArr, " items"), '');
    if (!isNaN(parseFloat(_item))) {
      arrForDelete.push(parseFloat(_item));
    } else {
      arrForDelete.push(_item);
    }
  }
}
console.log('You are created arrow for delite 4 items :');
console.log(arrForDelete);

// for(let j = 1; j <= 3; j++) {
//   delete arrForDelete[j];                                 удаляем последовательно элементы 2, 3, 4 но остаются пустые места 
//   console.log(arrForDelete);                              выводим изменения в консоль каждое!
// }

/*=============== ИСПОЛЬЗОВАНИЕ МЕТОДА SPLICE  ======================
Удаляет элементы и изменяет длину массива не оставляет пустых мест НЕ СОЗДАЕТ НОВЫЙ МАССИВ! 
*/
for (var k = 3; k >= 1; k--) {
  arrForDelete.splice(k, 1);
  console.log(arrForDelete + 'Результат рабты цикла с функцией splice ИЗМЕНЕНИЕ МАССИВА');
}
// xxx.splice(индекс элемента с которго начинается удалениеб индекс где удаление заканчивается)