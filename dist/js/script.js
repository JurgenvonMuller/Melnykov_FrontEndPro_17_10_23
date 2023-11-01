"use strict";

/*
HOMEWORK 12
  Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

1. Знайти суму та кількість позитивних елементів.
2. Знайти мінімальний елемент масиву та його порядковий номер.
3. Знайти максимальний елемент масиву та його порядковий номер.
4. Визначити кількість негативних елементів.
5. Знайти кількість непарних позитивних елементів.
6. Знайти кількість парних позитивних елементів.
7. Знайти суму парних позитивних елементів.
8. Знайти суму непарних позитивних елементів.
9. Знайти добуток позитивних елементів.
10. Знайти найбільший серед елементів масиву, ост альні обнулити.
*/

var teacherArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// 1. Знайти суму та кількість позитивних елементів.
var countPositiveElem = 0;
var positiveElemTeacherArray = 0;
var sumPositivElem = 0;
for (var _i = 0, _teacherArray = teacherArray; _i < _teacherArray.length; _i++) {
  var elem = _teacherArray[_i];
  if (elem > 0) {
    sumPositivElem += elem;
    countPositiveElem++;
  }
}
console.log(sumPositivElem);
console.log(countPositiveElem);
for (var i = 0; i <= teacherArray.length - 1; i++) {
  if (teacherArray[i] > 0) {
    // console.log(teacherArray[i]); элементы массива > 0;
    positiveElemTeacherArray += teacherArray[i];
    countPositiveElem++;
  }
}
console.log(positiveElemTeacherArray);
console.log(countPositiveElem / 2); // делим на 2 тк 2 ваианта решения и что бы не считало 2 раза

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

var minElemOfArray = teacherArray[0];
for (var _i2 = 0; _i2 <= teacherArray.length - 1; _i2++) {
  if (teacherArray[_i2] < minElemOfArray) {
    minElemOfArray = teacherArray[_i2];
  }
}
console.log(minElemOfArray);