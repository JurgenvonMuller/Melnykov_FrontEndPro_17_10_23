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
                
    РЕШЕНИЕ ДОМАШНЕГО ЗАДАНИЯ С ИСПОЛЬЗОВАНИЕМ switch / case    */
                
  let numOrStr = prompt('input number or string');
  console.log(numOrStr)
  
  // if(numOrStr === null) {
  //   console.log('ви скасували')
  //   } else if( numOrStr.trim() === '' ) {
  //   console.log('Empty String');
  //   } else if ( isNaN( +numOrStr ) ) {
  //   console.log(' number is Ba_NaN')
  //   } else {
  //   console.log('OK!')
  //   }


  switch(true) {
    case numOrStr === null:
      console.log('ви скасували');
    break;
    case  numOrStr === '':
      console.log('Empty String');
    break;
    case isNaN( +numOrStr ):
      console.log(' number is Ba_NaN');
    break;
    default:
      console.log('OK!');
    break;
  }

//   let numOrStr = prompt('Введите число или строку');
// console.log(numOrStr);

// switch (true) {
//   case numOrStr === null:
//     console.log('Вы отменили');
//     break;
//   case numOrStr.trim() === '':
//     console.log('Пустая строка');
//     break;
//   case isNaN(+numOrStr):
//     console.log('Введенное значение не является числом (NaN)');
//     break;
//   default:
//     console.log('OK!');
//     break;
// }
