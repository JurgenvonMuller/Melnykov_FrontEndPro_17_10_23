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


========= замечания =============

Сам собі створив проблеми - приймай в масив тільки цифри
Після спрощення першого - друге теж спроститься
Я пару раз перечитав - так і не зрозумів, що ти там наробив. 
Досить вигадувати велосипед, не треба перевіряти,
що масив менше - це треба робити в першому пункті
Для видалення рейнжу елементів у splice другий аргумент, який просто треба правильно використати
Будь ласка - не ускладнюй прості задачі :)
*/

let arr = [];

let userArrLength = +prompt('Put LENGTH of your arrow', '5');

for(let i = 0; i <= userArrLength - 1; i++) {
  let item = +prompt(`Put your numbers into arrow which has length only ${userArrLength} items`, '');
  if(!isNaN(item)) {
    arr.push(item)
  } else {
    arr.push('NaN')
    console.log(`ít is not a number To arrow will be put "NaN" `)
  }
}
console.log('You have created an arrow :');
console.log(arr);                                         // создан пользовательский массив 


/* ==================Задание 2 Відсортувати масив за зростанням. ==================*/


arr.sort(function (a, b) {
  return a - b;                                           // сортировка по возрастанию
});
console.log('Отсортированный массив по возростанию')
console.log(arr);                                          // отсортированный массив


/*
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/


for (let k = 3; k >= 1; k--) {
  arr.splice(k, 1);
  console.log(arr + '   Результат рабты цикла с функцией splice ИЗМЕНЕНИЕ МАССИВА');
}
  console.log(arr + '   Итоговый массив')


// ===================== КОНЕЦ =========================================



























  // xxx.splice(индекс элемента с которго начинается удалениеб индекс где удаление заканчивается)


// let arrForDelete = [];
// console.log(arrForDelete);

// let userLengthArr = +prompt('Put LENGTH of your arrow min 4 items', '');

// if (userLengthArr < 4) {
//   alert('Put please arrow length 4 or more');
// } else { 
//     for(let i = 0; i <= userLengthArr - 1; i++) {
//       let item = prompt(`Put your elements into arrow which has length only ${userLengthArr} items`, '');
//       if(!isNaN(parseFloat(item))) {
//         arrForDelete.push(parseFloat(item))
//     } else {
//       arrForDelete.push(item)
//     }
//   }
// }

// console.log('You are created arrow for delite 4 items :');
// console.log(arrForDelete);

// for(let j = 1; j <= 3; j++) {
//   delete arrForDelete[j];                                 удаляем последовательно элементы 2, 3, 4 но остаются пустые места 
//   console.log(arrForDelete);                              выводим изменения в консоль каждое!
// }


/*=============== ИСПОЛЬЗОВАНИЕ МЕТОДА SPLICE  ======================
Удаляет элементы и изменяет длину массива не оставляет пустых мест НЕ СОЗДАЕТ НОВЫЙ МАССИВ! 
// */
// for (let k = 3; k >= 1; k--) {
//   arrForDelete.splice(k, 1);
//   console.log(arrForDelete + 'Результат рабты цикла с функцией splice ИЗМЕНЕНИЕ МАССИВА');

// xxx.splice(индекс элемента с которго начинается удалениеб индекс где удаление заканчивается)