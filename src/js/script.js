
//        Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

/*
Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише 
числових елементів даного масиву.
*/


let a = 12;
let print = () => { console.log(a + 'Yes')};

let mixArray = [832, 'defender',  print, 23, NaN, 543, a, 987, undefined, 56, true, 456, false, "bignumber"]

let calcArithmeticMean = (arr) => {

  let filterNumber = arr.filter(item => typeof item === 'number' && !isNaN(item));

  let summOfNumbers = filterNumber.reduce((accu, currentValue) => accu + currentValue, 0);

  let arithmeticMean = summOfNumbers / filterNumber.length;

  console.log(filterNumber);
  console.log(arithmeticMean);

  return arithmeticMean
};
calcArithmeticMean(mixArray);

/*
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y,
 рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
 Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак
  виходять від користувача.
  
*/

let numberX = +prompt('Put your first number', '');
let numberY = +prompt('Put your second number', '');
let znak = prompt("What mathematical operation do you want to do", '+, -, *, /, %, ^');

let userMathOperation = (numberX, numberY, znak) => {
  if (!isNaN(numberX) && !isNaN(numberY)) {
    if (znak === '+') {
        let addition = numberX + numberY;
        console.log(`Result of addition:    ${numberX} ${znak} ${numberY} =  ${addition}`);
    } else if (znak === '-') {
        let subtraction = numberX - numberY;
        console.log(`Result of subtraction:    ${numberX}  ${znak} ${numberY} =  ${subtraction}`);
    } else if (znak === '/') {
        let division = numberX / numberY;
        console.log(`Result of division:  ${numberX} ${znak} ${numberY} =  ${division }`);
    } else if (znak === '%') {
        let modulo = numberX % numberY;
        console.log(`Result of modulo:   ${numberX} ${znak} ${numberY} =  ${modulo}`);
    } else if (znak === '^') {
        let exponentiation = Math.pow(numberX, numberY);
        console.log(`Result of exponentiation: ${numberX} ${znak} ${numberY} =  ${exponentiation}`);
    } else {
        console.log('Invalid mathematical operation');
    }
  } else {
      console.log('One or both of the entered values are not numbers');
  }
};

userMathOperation(numberX, numberY, znak);


/*
Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.
*/

let mainArray = [];

let userTwoDimArray = () => {

  let longOfMainArray = +prompt(`Put length of main array (srtings)`, '4');
  let longSecondaryArray = +prompt(`Put length of seconday array (colums)`, '4');
  
  for(let i = 0; i < longOfMainArray; i++) {
    let secondaryArray = [];

    for (let j = 0; j < longSecondaryArray; j++) {
      let elemSecondaryArray = +prompt(`Put element number ${j +1} to string number ${i +1}`);
      secondaryArray.push(elemSecondaryArray);
    }

    mainArray.push(secondaryArray);
  }
  return mainArray
};

userTwoDimArray();
console.log(mainArray);



/*
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.
*/

let userString = prompt('Put you frase here, please', '');
console.log(userString);

let userCharDelete = (userString) => {

  let charsToRemove = prompt('Put chars which you want to delete from your string', '');

  let regPattern = new RegExp('[' + charsToRemove + ']', 'g');
  console.log(regPattern);

  let newUserString = userString.replace(regPattern, '');
  console.log(newUserString);

  return newUserString
};

userCharDelete(userString);

