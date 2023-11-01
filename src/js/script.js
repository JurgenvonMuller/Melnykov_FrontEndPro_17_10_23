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

let teacherArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// 1. Знайти суму та кількість позитивних елементів.
let countPositiveElem = 0;
let positiveElemTeacherArray = 0;
let sumPositivElem = 0;
for(let elem of teacherArray) {
  if(elem > 0) {
    sumPositivElem += elem;
    countPositiveElem++
  }
} 
console.log(sumPositivElem);
console.log(countPositiveElem);



for(let i = 0; i <= teacherArray.length - 1; i++) {
  if(teacherArray[i] > 0) {
    // console.log(teacherArray[i]); элементы массива > 0;
    positiveElemTeacherArray += teacherArray[i];
    countPositiveElem++
  }
}
console.log(positiveElemTeacherArray);
console.log(countPositiveElem / 2);  // делим на 2 тк 2 ваианта решения и что бы не считало 2 раза

// 2. Знайти мінімальний елемент масиву та його порядковий номер.


  let minElemOfArray = teacherArray[0];
  for( let i = 0; i <= teacherArray.length - 1; i++) {
    if(teacherArray[i] < minElemOfArray) {
      minElemOfArray = teacherArray[i];
    }
  }
  console.log(minElemOfArray);
