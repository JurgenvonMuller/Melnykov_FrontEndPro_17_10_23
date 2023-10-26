

/*  HOMEWOKR 7

Створити скрипт який має визначити середнє арифметичне 
трьох чисел з насутпними умовами:
отримати від користувача через три prompt три числа
показати через alert середнє арифметичне цих чисел

                Variant 1  - simple;               */

const firstNum1 = +prompt('put your forst number, please', '10');
const secondNum1 = +prompt('Put your second number, please', '20');
const thirdNum1 = +prompt('Put you third number, please', '40');
const quantityNumbers1 = 3;
const arithmeticMean1 = (firstNum1 + secondNum1 + thirdNum1) / quantityNumbers1;
alert(`Your arithmeticMean is equal ${arithmeticMean1}`);

// // Variant 2 advanced; (Это так, для себя для тренировки)

const firstNum2 = +prompt('Enter your forst number, please', '20.9');

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
const arithmeticMean2 = (firstNum2 + secondNum2 + thirdNum2) / quantityNumbers1;
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

/*  HOMEWORK 8 (two parts!!!)

Частина №1
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


//  Частина №1 i 2


let userYearOld;
let userTown;
let userSport;
const currentYear = 2023;
const userBithText = 'year of your Birthday';
const userResidenceText = 'your town where do you live';
const userFavSportText = 'you favorite sport';
const townIndicate = 'you live in';
const capitIndicate = `${townIndicate} the capital of`;
const userAwesome = 'AWESOME! Do you want to become like ';

const userAgree = confirm('Would you like to answer our questions about your age, place of residence, and favorite sport?','');
if (userAgree === true) {
console.log(userAgree);

  const userBirthYear = +prompt(`Enter, please, year of your birthday`, 'yyyy / 1995');
  userYearOld = currentYear - userBirthYear;
  
  const userTownAnswer = prompt('Enter the name of the town where do you live', ' Lion');
  if(userTownAnswer === 'London') {
    userTown = capitIndicate + ' England';
  } else if(userTownAnswer === 'Kiev') {
    userTown = capitIndicate + ' Ukraine';
  } else if(userTownAnswer === 'Washington') {
    userTown = capitIndicate + ' USA';
  } else {
    userTown = townIndicate + userTownAnswer;
  }

  const userFavSport = prompt('What is your favorite sport?','sprint / tennis / swimming');
  if(userFavSport === 'sprint') {
    userSport = `${userAwesome} Usain Bolt?`;
  } else if (userFavSport === 'tennis') {
    userSport = `${userAwesome} Serena Williams?`;
  } else if(userFavSport === 'swimming') {
    userSport = `${userAwesome} Michael Phelps?`;
  } 
  else {
    userSport = `Your favorite sport is ${userFavSport}`
  }

  alert(`You have ${userYearOld} years old,
  and ${userTown}
  ${userSport} `);

} else if(userAgree === false) {
  alert(`I'm sorry that you don't want to tell us about 
  ${userBithText} 
  ${userResidenceText} 
  and ${userFavSportText}`);
}


/*  HOMEWORK 9 
Переписати код нижче з використанням конструкції switch…case*/

/*   ИСХОДНЫЙ КОД:

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}

        РЕШЕНИЕ ДОМАШНЕГО ЗАДАНИЯ С ИСПОЛЬЗОВАНИЕМ switch     */

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr) {
  case null:
    console.log('ви скасували');
  brake;
  case '':
    console.log('Empty String');
  brake;
  case NaN:
    console.log(' number is Ba_NaN');
  brake;
  default:
    console.log('OK!');
  brake;
}




/*      Hometask "Check - list"
        
       FALSE
console.log(Boolean(0));         // false
console.log(Boolean(+0));        // false
console.log(Boolean(-0));        // false
console.log(Boolean(null));      // false
console.log(Boolean(''));        // false
console.log(Boolean(NaN));       // false
console.log(Boolean(undefined)); // false
          
          TRUE

console.log(Boolean('string'));   // true
console.log(Boolean(+Infinity));  // true  
console.log(Boolean(-Infinity));  // true
console.log(Boolean('number'));   // true

        ACHTUNG,  STRING!!!

console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true
*/
