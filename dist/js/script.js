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
// 4. Визначити кількість негативних елементів.
// 9. Знайти добуток позитивних елементів.

var countPositiveElem_var1 = 0; // Количество позитивных элементов вариант 1
var countNegativeElem_var1 = 0; // Количество негативных элементов вариант 1
var summPositiveElemTeacherArray_var1 = 0; // сумма позитивных элементов решения вариант 1
var productPositiveElem1 = 1;
for (var _i = 0, _teacherArray = teacherArray; _i < _teacherArray.length; _i++) {
  var elem = _teacherArray[_i];
  if (elem > 0) {
    summPositiveElemTeacherArray_var1 += elem;
    productPositiveElem1 = elem * productPositiveElem1;
    countPositiveElem_var1++;
  } else if (elem < 0) {
    countNegativeElem_var1++;
  }
}
console.log(summPositiveElemTeacherArray_var1 + ' - сумма положительных элементов');
console.log(countPositiveElem_var1 + ' - количество положительных элементов в массиве');
console.log(countNegativeElem_var1 + ' - количество отрицательных элементов в массиве');
console.log(productPositiveElem1 + ' - произведение положительных элементов массива');

/* =================   ОСНОВНОЙ ВАРИАНТ РЕШЕНИЯ   ===================== */

//  переменные для первого блока задания 

var countPositiveElem_var2 = 0; // КОличество позитивных элементов ваиант 2
var countNegativeElem_var2 = 0; // Количество негативных элементов  вариант 2
var summPositiveElemTeacherArray_var2 = 0; // сумма позитивных элементов  решения вариант 2
var productPositiveElem = 1; // Произведение положительных элементов массива

// переменные для второго блока 
var minElemOfArray = teacherArray[0]; // Наименьший элемент массива
var key_minElemOfArray = 0; // Ключ наименьшего элемента массива
var maxElemOfArray = teacherArray[0]; // наибольший элемент массива
var key_maxElemOfArray = 0; // ключ наибольшего элемента массива.

// переменные для 3-го блока 
var count_Odd_Par_Elements = 0;
var count_Odd_None_Par_Elements = 0;
var sum_Odd_Par_Elements = 0;
var sum_Odd_None_Par_Elements = 0;

/* Знайти суму та кількість позитивних елементів.
  Визначити кількість негативних елементів.
  Знайти добуток позитивних елементів.*/

for (var i = 0; i <= teacherArray.length - 1; i++) {
  if (teacherArray[i] > 0) {
    summPositiveElemTeacherArray_var2 += teacherArray[i]; // сумма положительных элементов
    productPositiveElem = teacherArray[i] * productPositiveElem; // произведение положительных элементов
    countPositiveElem_var2++; //  Количество положительных элементов
  } else if (teacherArray[i] < 0) {
    countNegativeElem_var2++; //  количество отрицательных элементов
  }
  /*
  5. Знайти кількість непарних позитивних елементів.
  8. Знайти суму непарних позитивних елементів.
  ================================================
  6. Знайти кількість парних позитивних елементів.
  7. Знайти суму парних позитивних елементів.
                                                        Odd  ------>>>>>   четные элементы
                                                        Even ------->>>>>   нечетные элементы
  */
  if (teacherArray[i] > 0 && teacherArray[i] % 2 !== 0) {
    sum_Odd_None_Par_Elements += teacherArray[i]; //  Сумма непарных элементов     
    count_Odd_None_Par_Elements++; // КОЛИЧЕСТВО НЕПАРНЫХ ЭЛЕМЕНТОВ
  } else if (teacherArray[i] > 0 && teacherArray[i] % 2 === 0) {
    sum_Odd_Par_Elements += teacherArray[i]; // Сумма парных элементов
    count_Odd_Par_Elements++; // Количество парных элементов
  }
  /*
  2.  Знайти мінімальний елемент масиву та його порядковий номер.
  3.  Знайти максимальний елемент масиву та його порядковий номер.
  */
  if (teacherArray[i] < minElemOfArray) {
    minElemOfArray = teacherArray[i]; //  минимальный элемент массива
    key_minElemOfArray = i; //   ключ минимального элемента
  } else if (teacherArray[i] > maxElemOfArray) {
    maxElemOfArray = teacherArray[i]; // максимальный элемент массива
    key_maxElemOfArray = i; //  ключ максимального элемента массива
  }
}

console.log(summPositiveElemTeacherArray_var2 + '-   Сумма положительных элементов массива');
console.log(countPositiveElem_var2 + '-   Количество положительных элементов массива');
console.log(countNegativeElem_var2 + '-   Количество отрицательных элементов массива');
console.log(productPositiveElem + ' - произведение положительных элементов массива');
console.log(minElemOfArray + ' - Наименьший элемент массива');
console.log(key_minElemOfArray + ' - Ключ наименьшего элемента массива');
console.log(maxElemOfArray + ' - Наибольший элемент массива');
console.log(key_maxElemOfArray + ' - Ключ наибольшего элемента массива');
console.log('Кількість непарних позитивних елементів   ' + count_Odd_None_Par_Elements);
console.log('Сума непарних позитивних елементів   ' + sum_Odd_None_Par_Elements);
console.log('Кількість парних позитивних елементів:   ' + count_Odd_Par_Elements);
console.log('Сума парних позитивних елементів   ' + sum_Odd_Par_Elements);
console.log(teacherArray);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити

for (var _i2 = 0; _i2 <= teacherArray.length - 1; _i2++) {
  if (teacherArray[_i2] > maxElemOfArray) {
    maxElemOfArray = teacherArray[_i2]; // максимальный элемент массива
    key_maxElemOfArray = _i2; //  ключ максимального элемента массива
  }

  if (teacherArray[_i2] !== maxElemOfArray && _i2 !== key_maxElemOfArray) {
    teacherArray[_i2] = 0; // присваиваем НОЛЬ всем элементам массива которые не являются максимальным элементом
  }
}

console.log(teacherArray);