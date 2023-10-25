// console.log( typeof {} );
// (10).toString()

// console.log(null);

// Створити скрипт який має визначити середнє арифметичне 
// трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

//  Variant 1  - simple;
const firstNum1 = +prompt('put your forst number, please', '10');
const secondNum1 = +prompt('Put your second number, please', '20');
const thirdNum1 = +prompt('Put you third number, please', '40');
const quantityNumber1 = 3;
const arithmeticMean1 = (firstNum1 + secondNum1 + thirdNum1) / quantityNumber1;
alert(`Your arithmeticMean is equal ${arithmeticMean1}`);

// Variant 2 advanced; (Это так, для себя для тренировки)
const firstNum2 = +prompt('put your forst number, please', '20.9');

if(isNaN(firstNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}

const secondNum2 = +prompt('Put your second number, please', '20.4');
if(isNaN(secondNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
const thirdNum2 = +prompt('Put you third number, please', '45');

if(isNaN(thirdNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
const arithmeticMean2 = (firstNum2 + secondNum2 + thirdNum2) / quantityNumber1;
const decimalQuantity = +prompt('What level of precision do you require for rounding?', '0 - 3');
let arithmeticMean;

if (decimalQuantity === 0) {
  // toFixed возвращает СТРОКУ!!!
  arithmeticMean = +arithmeticMean2.toFixed(0); // не явное преобразование строки в number.
  console.log(typeof arithmeticMean, arithmeticMean);
  alert(`Your arithmeticMean is equal ${arithmeticMean}`);

} else if(decimalQuantity === 1 ) {
  arithmeticMean = +arithmeticMean2.toFixed(1);
  alert(`Your arithmeticMean is equal ${arithmeticMean}`);

} else if(decimalQuantity === 2 ) {
  arithmeticMean = +arithmeticMean2.toFixed(2);
  alert(`Your arithmeticMean is equal ${arithmeticMean}`);

} else if(decimalQuantity === 3 ) {
  arithmeticMean = +arithmeticMean2.toFixed(3);
  alert(`Your arithmeticMean is equal ${arithmeticMean}`);

} else {
  alert('Please put correct level of precision', '0 -3');
}