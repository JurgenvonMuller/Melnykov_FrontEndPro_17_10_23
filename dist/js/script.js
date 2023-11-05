"use strict";

/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент 
item з масиву array.
Наприклад:
*/
var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array + '  - Исходный вариант массива');
var removeElement = function removeElement(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      arr.splice(i, 1);
      break; // Прерываем цикл, когда элемент найден и удален
    }
  }

  return arr;
};
console.log(removeElement(array, 5));
console.log("\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: [1, 2, 3, 4, 6, 7]");

// ================ УНИВЕРСАЛЬНОЕ РЕШЕНИЕ  ============================
/*
let deleteElemArr = function(arr, indexElem, quantityElem) {
  arr.splice(indexElem, quantityElem);
  console.log(arr);
};
console.log(deleteElemArr);
deleteElemArr(myArray, 1, 3);
console.log(myArray);

*/