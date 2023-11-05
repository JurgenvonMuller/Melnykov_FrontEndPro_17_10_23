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


/*
let teacherArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1. Знайти суму та кількість позитивних елементів.
// 4. Визначити кількість негативних елементів.
// 9. Знайти добуток позитивних елементів.

let countPositiveElemvar1 = 0;   // Количество позитивных элементов вариант 1
let countNegativeElemvar1 = 0;   // Количество негативных элементов вариант 1
let summPositiveElemTeacherArrayvar1 = 0;  // сумма позитивных элементов решения вариант 1
let productPositiveElem1 = 1;
for(let elem of teacherArray) {
  if(elem > 0) {
    summPositiveElemTeacherArrayvar1 += elem;
    productPositiveElem1 = elem * productPositiveElem1;
    countPositiveElemvar1++
  } else if (elem < 0) {
    countNegativeElemvar1++
  }
}
console.log(summPositiveElemTeacherArrayvar1 + ' - сумма положительных элементов');
console.log(countPositiveElemvar1  + ' - количество положительных элементов в массиве');
console.log(countNegativeElemvar1 + ' - количество отрицательных элементов в массиве');
console.log(productPositiveElem1 + ' - произведение положительных элементов массива');

=================   ОСНОВНОЙ ВАРИАНТ РЕШЕНИЯ   ===================== 

//  переменные для первого блока задания 

let countPositiveElemvar2 = 0;   // КОличество позитивных элементов ваиант 2
let countNegativeElemvar2 = 0;   // Количество негативных элементов  вариант 2
let summPositiveElemTeacherArrayvar2 = 0;  // сумма позитивных элементов  решения вариант 2
let productPositiveElem = 1;      // Произведение положительных элементов массива

// переменные для второго блока 
let minElemOfArray = teacherArray[0]; // Наименьший элемент массива
let keyminElemOfArray = 0;           // Ключ наименьшего элемента массива
let maxElemOfArray = teacherArray[0]; // наибольший элемент массива
let keymaxElemOfArray = 0;           // ключ наибольшего элемента массива.

// переменные для 3-го блока 
let countOddParElements = 0;       // Количество положительных парных элементов
let countOddNoneParElements = 0;  // Количество положительных непарных элементов
let sumOddParElements = 0;       //  Сумма положительных парных элементов
let sumOddNoneParElements = 0;  //  Сумма положительных непарных элементов

 Знайти суму та кількість позитивних елементів.
  Визначити кількість негативних елементів.
  Знайти добуток позитивних елементів.

for(let i = 0; i <= teacherArray.length - 1; i++) {
  if(teacherArray[i] > 0) {
    summPositiveElemTeacherArrayvar2 += teacherArray[i];  // сумма положительных элементов
    productPositiveElem = teacherArray[i] * productPositiveElem; // произведение положительных элементов
    countPositiveElemvar2++ ;                              //  Количество положительных элементов
  } else if (teacherArray[i] < 0) {
    countNegativeElemvar2++;                               //  количество отрицательных элементов
  }

5. Знайти кількість непарних позитивних елементів.
8. Знайти суму непарних позитивних елементів.
================================================
6. Знайти кількість парних позитивних елементів.
7. Знайти суму парних позитивних елементів.
                                                      Odd  ------>>>>>   четные элементы
                                                      Even ------->>>>>   нечетные элементы

  if(teacherArray[i] > 0 && teacherArray[i] % 2 !== 0) {
    sumOddNoneParElements += teacherArray[i];           //  Сумма непарных элементов     
    countOddNoneParElements++;                 // КОЛИЧЕСТВО НЕПАРНЫХ ЭЛЕМЕНТОВ
  } else {
    sumOddParElements += teacherArray[i];              // Сумма парных элементов
    countOddParElements++;                      // Количество парных элементов
  }
  
  2.  Знайти мінімальний елемент масиву та його порядковий номер.
  3.  Знайти максимальний елемент масиву та його порядковий номер.
  
  if(teacherArray[i] < minElemOfArray) {
    minElemOfArray = teacherArray[i]; //  минимальный элемент массива
    keyminElemOfArray = i;           //   ключ минимального элемента
  }  else if (teacherArray[i] > maxElemOfArray) {
    maxElemOfArray = teacherArray[i];   // максимальный элемент массива
    keymaxElemOfArray = i;             //  ключ максимального элемента массива
  } 
}
console.log(summPositiveElemTeacherArrayvar2 + '-   Сумма положительных элементов массива');
console.log(countPositiveElemvar2 + '-   Количество положительных элементов массива'); 
console.log(countNegativeElemvar2 + '-   Количество отрицательных элементов массива'); 
console.log(productPositiveElem + ' - произведение положительных элементов массива');

console.log(minElemOfArray + ' - Наименьший элемент массива');
console.log(keyminElemOfArray + ' - Ключ наименьшего элемента массива');
console.log(maxElemOfArray + ' - Наибольший элемент массива');
console.log(keymaxElemOfArray + ' - Ключ наибольшего элемента массива');

console.log('Кількість непарних позитивних елементів   ' + countOddNoneParElements); 
console.log('Сума непарних позитивних елементів   '  + sumOddNoneParElements);

console.log('Кількість парних позитивних елементів:   ' + countOddParElements);
console.log('Сума парних позитивних елементів   ' + sumOddParElements);
console.log(teacherArray);
*/

/*
// 10. Знайти найбільший серед елементів масиву, остальні обнулити
let teacherArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(teacherArray);
let maxElemOfArray = teacherArray[0];
let keyMaxElemOfArray = 0;
for(let i = 1; i < teacherArray.length; i++) {
  if (teacherArray[i] > maxElemOfArray) {
    maxElemOfArray = teacherArray[i]; 
    keyMaxElemOfArray = i;  
  }
}
  
for(let i = 0; i < teacherArray.length; i++)
if(i !== keyMaxElemOfArray) {
  teacherArray[i] = 0;  // присваиваем НОЛЬ всем элементам массива которые не являются максимальным элементом
}

console.log(maxElemOfArray + '  - максимальный элемент массива');   // максимальный элемент массива
console.log(keyMaxElemOfArray + '  - ключ максимального элемента массива') //  ключ максимального элемента массива
console.log(teacherArray + '  - обнуленные элементы массива все кроме максимального');

*/

let teacherArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let countPositiveEvenElements = 0;
let sumPositiveEvenElements = 0;
let countPositiveOddElements = 0;
let sumPositiveOddElements = 0;

for (let i = 0; i < teacherArray.length; i++) {
  if (teacherArray[i] > 0) {
    if (teacherArray[i] % 2 === 0) {
      sumPositiveEvenElements += teacherArray[i];
      countPositiveEvenElements++;
    } else {
      sumPositiveOddElements += teacherArray[i];
      countPositiveOddElements++;
    }
  }
}

console.log(sumPositiveEvenElements,  countPositiveEvenElements, sumPositiveOddElements, countPositiveOddElements);