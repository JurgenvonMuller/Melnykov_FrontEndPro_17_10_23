/* 
                  HOMEWORK 10 
Вивести на сторінку в один рядок через кому числа від 10 до 20.
*/
// for( let num = 10; num <=20; num++) {

//   document.write(` ${num}`); // вывод на страницу сайта как в задании НЕ В КОНСОЛЬ!
// }
/*
Вивести квадрати чисел від 10 до 20.
*/

for(let num1 = 10; num1 <= 20; num1++) {
  let exp = 2;
  let res1 = num1 ** exp;
  //let res1 = num1 **2;  ----- , без доп переменной exp.
  document.write('  ' + res1 + '  ');
}

document.write(`<br>`);
/*
Вивести таблицю множення на 7.

*/

let num2 = 7;
for( let multip = 0; multip <= 10; multip++) {
  let result2 = num2 * multip;
  document.write(`
  ${num2} * ${multip} = ${result2} <br>`);
}

document.write(`<br>`);






/*
Знайти суму всіх цілих чисел від 1 до 15.
*/


let result3 = 0;
for(let num3 = 1; num3 <=15; num3++) {
  result3 += num3;
}
document.write(result3);

document.write(`<br>`);

/*
Знайти добуток усіх цілих чисел від 15 до 35.
*/

let result4 = 1;
for(let num4 = 15; num4 <= 35; num4++) {
  result4 *= num4;
}
document.write(result4);


document.write(`<br>`);


/*
Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
*/
let count = 0; 
let summ = 0;
for( let num5 = 1; num5 <= 500; num5++) {
  summ += num5;
  count++
  // console.log(summ, count);
}
console.log( summ / count);

document.write(`<br>`);

/* 

Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/

for(let num6 = 30; num6 <= 80; num6++) {
  if(num6 % 2 === 0) {
    console.log (num6);
  }
}

/*

Вивести всі числа в діапазоні від 100 до 200 кратні 3.
*/

for (let num7 = 100; num7 <=200; num7++) {
  if(num7 % 3 === 0 )  {
    console.log(num7);
  }
}

/*

Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

*/
let naturNumber = +prompt("Slava, enter here any natural number, please", '');

for (let mult = 1; mult <= naturNumber; mult++) {
  if(naturNumber % mult === 0) {
    console.log(mult);
  }
}


/*
Визначити кількість його парних дільників.


Знайти суму його парних дільників.


Надрукувати повну таблицю множення від 1 до 10.
*/



