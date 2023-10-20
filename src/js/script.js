
let num = 123456;
let firstNum = Number(num.toString(10)[4]);

console.log(firstNum);

if( firstNum == 1 || firstNum == 2 || firstNum == 3) {
  console.log('yes')
} else {
  console.log('no')
}

