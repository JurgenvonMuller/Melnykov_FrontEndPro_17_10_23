// console.log( typeof {} );
// (10).toString()

// console.log(null);

//  HOMEWOKR 7
// Створити скрипт який має визначити середнє арифметичне 
// трьох чисел з насутпними умовами:
// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

// //  Variant 1  - simple;
// const firstNum1 = +prompt('put your forst number, please', '10');
// const secondNum1 = +prompt('Put your second number, please', '20');
// const thirdNum1 = +prompt('Put you third number, please', '40');
// const quantityNumber1 = 3;
// const arithmeticMean1 = (firstNum1 + secondNum1 + thirdNum1) / quantityNumber1;
// alert(`Your arithmeticMean is equal ${arithmeticMean1}`);

// // Variant 2 advanced; (Это так, для себя для тренировки)
// const firstNum2 = +prompt('put your forst number, please', '20.9');

// if(isNaN(firstNum2)) {
//   alert('Please put a NUMBER', 'for exaple 12.5');
// }

// const secondNum2 = +prompt('Put your second number, please', '20.4');
// if(isNaN(secondNum2)) {
//   alert('Please put a NUMBER', 'for exaple 12.5');
// }
// const thirdNum2 = +prompt('Put you third number, please', '45');

// if(isNaN(thirdNum2)) {
//   alert('Please put a NUMBER', 'for exaple 12.5');
// }
// const arithmeticMean2 = (firstNum2 + secondNum2 + thirdNum2) / quantityNumber1;
// const decimalQuantity = +prompt('What level of precision do you require for rounding?', '0 - 3');
// let arithmeticMean;

// if (decimalQuantity === 0) {
//   // toFixed возвращает СТРОКУ!!!
//   arithmeticMean = +arithmeticMean2.toFixed(0); // не явное преобразование строки в number.
//   console.log(typeof arithmeticMean, arithmeticMean);
//   alert(`Your arithmeticMean is equal ${arithmeticMean}`);

// } else if(decimalQuantity === 1 ) {
//   arithmeticMean = +arithmeticMean2.toFixed(1);
//   alert(`Your arithmeticMean is equal ${arithmeticMean}`);

// } else if(decimalQuantity === 2 ) {
//   arithmeticMean = +arithmeticMean2.toFixed(2);
//   alert(`Your arithmeticMean is equal ${arithmeticMean}`);

// } else if(decimalQuantity === 3 ) {
//   arithmeticMean = +arithmeticMean2.toFixed(3);
//   alert(`Your arithmeticMean is equal ${arithmeticMean}`);

// } else {
//   alert('Please put correct level of precision', '0 -3');
// }

/*  HOMEWORK 8 

Створити скрипт яки повинен виконувати наступне:
запитати у користувача рік народження;
запитати в нього, в якому місті він живе;
запитати його улюблений вид спорту.
При натисканні на ОК показуємо вікно, 
де має бути відображена наступна інформація:
його вік;
якщо користувач вкаже Київ, Вашингтон чи Лондон, 
то показати йому повідомлення - "Ти живеш у столиці..." 
і на місце точок підставляємо країну, столицею якої є місто. 
Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

Частина №2
Вибираємо самі три види спорту та три чемпіони у цих видах. 
Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому 
повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок
 ім'я та прізвище чемпіона.
Все це має бути відображено в одному вікні (алерті).
Якщо в якомусь випадку він не захоче вводити інформацію і
 натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” 
 і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .*/

const userBirthday;
const userTown;
const userSport;
const currentDate = new Date();

userBirthday = prompt('Put your date of birthday', 'dd.mm.yy - 01.01.2000');
//  userTown = prompt('Put the name of the town where do you live', '');
//  userSport = prompt('Enter your favorite sport', '');



