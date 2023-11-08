"use strict";

/* ===================== ЗАДАНИЕ ======================================

Дан масив об'єктів. Вивести масив телефонних номерів користувачів,
у яких баланс більше 2000 доларів. 
І знайти суму всіх балансів користувачів
*/

var users = [{
  "index": 0,
  "isActive": true,
  "balance": "$2,226.60",
  "name": "Eugenia Sawyer",
  "gender": "female",
  "phone": "+1 (840) 583-3207",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
}, {
  "index": 1,
  "isActive": true,
  "balance": "$2,613.77",
  "name": "Pauline Gallegos",
  "gender": "female",
  "phone": "+1 (985) 593-3328",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
}, {
  "index": 2,
  "isActive": false,
  "balance": "$3,976.41",
  "name": "Middleton Chaney",
  "gender": "male",
  "phone": "+1 (995) 591-2478",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
}, {
  "index": 3,
  "isActive": true,
  "balance": "$1,934.58",
  "name": "Burns Poole",
  "gender": "male",
  "phone": "+1 (885) 559-3422",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
}, {
  "index": 4,
  "isActive": true,
  "balance": "$3,261.65",
  "name": "Mcfadden Horne",
  "gender": "male",
  "phone": "+1 (942) 565-3988",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
}, {
  "index": 5,
  "isActive": false,
  "balance": "$1,790.56",
  "name": "Suzette Lewis",
  "gender": "female",
  "phone": "+1 (837) 586-3283",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
}];
var richUsers;
var usersBilanses = function usersBilanses() {
  var userMoney;
  var totalMoney = 0;
  for (var _i = 0, _users = users; _i < _users.length; _i++) {
    var obj = _users[_i];
    console.log(obj.balance);
    console.log(obj.phone);
    userMoney = parseFloat(obj.balance.replace(/\$|,/g, ''));
    totalMoney += userMoney;
    if (userMoney > 2000) {
      ;
    }
  }
  totalMoney = totalMoney.toFixed(2);
  console.log(totalMoney);
};
usersBilanses();

// перебираем  объекты по очереди 
// каждый объект перебираем по ключу и находим нужные нам итые ключи 

// складываем весь баланс
// сортируем тех у кого больше 2000 долларов и выводим их телефонный номер по ключу

// let numberOfObjects = users.length;

// let keysOfFirstObject = Object.keys(users[0]);
// let keysOfSecondObject = Object.keys(users[1]);
// let keysOfThirdObject = Object.keys(users[2]);
// console.log(keysOfFirstObject);

// return totalMoney
//  return RichUsersTelNumbers

// let users = [
//   { name: "Ivan", money: 1000 },
//   { name: "Vasyl", money: 2000 }
// ];

// let usersBalances = () => {
// for (let obj of users) {
//   console.log("Объект:", obj);

//   // Получение значений по ключам "name" и "money" для каждого объекта
//   let nameValue = obj.name;
//   let moneyValue = obj.money;

//   console.log("Значение ключа 'name':", nameValue);
//   console.log("Значение ключа 'money':", moneyValue);
// }
// };

// usersBalances();
// Этот код выведет каждый объект, а затем для каждого объекта отобразит значения по ключам "name" и "money". Таким образом, вы сможете увидеть значения каждого ключа в каждом объекте.