"use strict";

/*
========================    HOMEWORK 12     ==========================

  Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

1. Знайти суму та кількість позитивних елементів. +
2. Знайти мінімальний елемент масиву та його порядковий номер. +
3. Знайти максимальний елемент масиву та його порядковий номер. +
4. Визначити кількість негативних елементів. 
5. Знайти кількість непарних позитивних елементів.
6. Знайти кількість парних позитивних елементів.
7. Знайти суму парних позитивних елементів.
8. Знайти суму непарних позитивних елементів.
9. Знайти добуток позитивних елементів.
10. Знайти найбільший серед елементів масиву, остальні обнулити.
*/

var teacherArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// 1. Знайти суму та кількість позитивних елементів.
// 9. Знайти добуток позитивних елементів.
// 4. Визначити кількість негативних елементів.
var countPositiveElem_var1 = 0;
var countNegativeElem_var1 = 0;
var countPositiveElem_var2 = 0;
var countNegativeElem_var2 = 0;
var summPositiveElemTeacherArray_var1 = 0;
var summPositiveElemTeacherArray_var2 = 0;
var sumPositivElem = 0;
var productPositiveElem = 1;
for (var _i = 0, _teacherArray = teacherArray; _i < _teacherArray.length; _i++) {
  var elem = _teacherArray[_i];
  if (elem > 0) {
    summPositiveElemTeacherArray_var1 += elem;
    productPositiveElem = elem * productPositiveElem;
    countPositiveElem_var1++;
  } else if (elem < 0) {
    countNegativeElem_var1++;
  }
}
console.log(summPositiveElemTeacherArray_var1 + ' - сумма положительных элементов');
console.log(countPositiveElem_var1 + ' - количество положительных элементов в массиве');
console.log(countNegativeElem_var1 + ' - количество отрицательных элементов в массиве');
console.log(productPositiveElem + ' - произведение положительных элементов массива');

//     =================  2 -й способ  ====================
for (var i = 0; i <= teacherArray.length - 1; i++) {
  if (teacherArray[i] > 0) {
    summPositiveElemTeacherArray_var2 += teacherArray[i];
    countPositiveElem_var2++;
  } else if (teacherArray[i] < 0) {
    countNegativeElem_var2++;
  }
}
console.log(summPositiveElemTeacherArray_var2);
console.log(countPositiveElem_var2);
console.log(countNegativeElem_var2);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
// 3. Знайти максимальний елемент масиву та його порядковий номер.

var minElemOfArray = teacherArray[0];
var key_minElemOfArray = 0;
var maxElemOfArray = teacherArray[0];
var key_maxElemOfArray = 0;
for (var _i2 = 0; _i2 <= teacherArray.length - 1; _i2++) {
  if (teacherArray[_i2] < minElemOfArray) {
    minElemOfArray = teacherArray[_i2];
    key_minElemOfArray = _i2;
  } else if (teacherArray[_i2] > maxElemOfArray) {
    maxElemOfArray = teacherArray[_i2];
    key_maxElemOfArray = _i2;
  }
}
console.log(minElemOfArray + ' - Наименьший элемент массива');
console.log(key_minElemOfArray + ' - Ключ наименьшего элемента массива');
console.log(maxElemOfArray + ' - Наибольший элемент массива');
console.log(key_maxElemOfArray + ' - Ключ наибольшего элемента массива');

/*
5. Знайти кількість непарних позитивних елементів.
8. Знайти суму непарних позитивних елементів.
              ================================================
6. Знайти кількість парних позитивних елементів.
7. Знайти суму парних позитивних елементів.
*/
var number_OddElements = 0;
var number_EvenElements = 0;
var sum_Odd_Positive_Elements = 0;
var sum_Even_Negative_Elements = 0;