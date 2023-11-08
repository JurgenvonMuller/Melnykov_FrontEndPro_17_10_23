    /* ===================== ЗАДАНИЕ ======================================

    Дан масив об'єктів. Вивести масив телефонних номерів користувачів,
    у яких баланс більше 2000 доларів. 
    І знайти суму всіх балансів користувачів
    */

let users = [
  {
  "index": 0,
  "isActive": true,
  "balance": "$2,226.60",
  "name": "Eugenia Sawyer",
  "gender": "female",
  "phone": "+1 (840) 583-3207",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
  "index": 1,
  "isActive": true,
  "balance": "$2,613.77",
  "name": "Pauline Gallegos",
  "gender": "female",
  "phone": "+1 (985) 593-3328",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
  "index": 2,
  "isActive": false,
  "balance": "$3,976.41",
  "name": "Middleton Chaney",
  "gender": "male",
  "phone": "+1 (995) 591-2478",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
  "index": 3,
  "isActive": true,
  "balance": "$1,934.58",
  "name": "Burns Poole",
  "gender": "male",
  "phone": "+1 (885) 559-3422",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
  "index": 4,
  "isActive": true,
  "balance": "$3,261.65",
  "name": "Mcfadden Horne",
  "gender": "male",
  "phone": "+1 (942) 565-3988",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
  "index": 5,
  "isActive": false,
  "balance": "$1,790.56",
  "name": "Suzette Lewis",
  "gender": "female",
  "phone": "+1 (837) 586-3283",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
]
  
  
let findRichestUsersPhones = (arr) => {

  let richUsersBalance =  arr.filter(obj => parseFloat(obj.balance.replace(/[$,]/g, '')) > 2000)
  let richUsersPhones = richUsersBalance.map(obj => obj.phone);
  
  console.log(`There are clients phone numbers which has more than 2000 USD
  ${richUsersPhones}`);

  return  richUsersPhones
};

let calcTotalUsersMoney = (arr) => {

  // заменяем в объекте строку на число и избавляемся от знака доллара
  let usersMoneyClearing = arr.map(obj => parseFloat(obj.balance.replace(/[$,]/g, '')));
  
  // Находим сумму всех элементов получившегося массива.
  let totalUsersMoney = usersMoneyClearing.reduce((accu, currentValue) => accu + currentValue, 0);

  // Дробные числа с длинным хвостом  округляем числами с 2 знаками после запятой.
  totalUsersMoney = Number(totalUsersMoney.toFixed(2));

  console.log(` Actually all clients has  ${totalUsersMoney}  USD`);

  return totalUsersMoney
};

findRichestUsersPhones(users);

calcTotalUsersMoney(users);
  

























































// =========================   NOTES   ++++++++++++++++++++++++++++++++++

// let usersBilansesAndPhones = () => {
//   let richUsers = [];
//   let userMoney;
//   let totalMoney = 0;
//     for(let obj of users) {
//       // console.log(obj.balance);
//       // console.log(obj.phone);
//       userMoney = parseFloat((obj.balance).replace(/\$|,/g, ''));
//       totalMoney +=  userMoney;
//       if(userMoney > 2000) {
//         richUsers.push(obj.phone);
//       } 
//     }
//   totalMoney = totalMoney.toFixed(2);
//   // console.log (totalMoney);
//   // console.log(richUsers);

//   return { totalMoney, richUsers }
// };
// let result  = usersBilansesAndPhones();
// console.log(result.totalMoney);
// console.log(result.richUsers);

/*
let usersBilansesAndPhones = () => {
  let richUsers = [];
  let userMoney;
  let totalMoney = 0;
  
  // Заменяем parseFloat на стрелочную функцию в методе map

  let parsedBalances = users.map(obj => parseFloat((obj.balance).replace(/\$|,/g, '')));

  totalMoney = parsedBalances.reduce((acc, val) => acc + val, 0);
  
  richUsers = users.filter(obj => parseFloat((obj.balance).replace(/\$|,/g, '')) > 2000).map(obj => obj.phone);

  

  totalMoney = totalMoney.toFixed(2);

  return { totalMoney, richUsers };
};
let result  = usersBilansesAndPhones();
console.log(result.totalMoney);
console.log(result.richUsers);

*/


// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

