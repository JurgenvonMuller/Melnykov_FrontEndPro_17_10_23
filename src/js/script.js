/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент 
item з масиву array.
Наприклад:
*/
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array + '  - Исходный вариант массива')

let removeElement = function(arr, item) {

  let index = arr.indexOf(item);
  arr.splice(index, 1);
  return arr;
};

console.log(removeElement(array, 5));

console.log(array + ' - Полученный измененный вариант массива');
console.log(`Ожидаемый результат: [1, 2, 3, 4, 6, 7]`)



















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

