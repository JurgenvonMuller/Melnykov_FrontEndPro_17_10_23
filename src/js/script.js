/*
Створити клас SuperMath.

Додати до екземпляра метод - 
check(obj), параметр obj 
якого має властивості X, Y, znak. 

Метод повинен підтвердити у користувача, 
чи хоче він зробити дію znak c Х і У. 
Якщо хоче, зробити математичну 
дію znak (яка описана в прототипі), 
інакше - запитати введення нових даних 
через метод input() класу SuperMath. 

Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak  `+' '-'  '/' '*'  '%'.

При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> рахує
// */


class SuperMath {
  constructor() {
    this.myObject = { X: null, Y: null, znak: null };
  }

  check(obj) {
    const userDecision = confirm(`Хочете виконати математичну операцію зі своїми змінними X і Y?`);

    if (userDecision) {
      if (this.isValidOperation(obj)) {
        this.calculate(obj);
      } else {
        alert('Некоректні дані для виконання операції.');
        this.input();
      }
    } else {
      console.log('Ви відмовились від виконання операції.');
    }
  }

  isValidOperation(obj) {
    const { X, Y, znak } = obj;
    if (isNaN(X) || isNaN(Y)) {
      return false;
    }
    const supportedOperators = ['+', '-', '*', '/', '%'];
    return supportedOperators.includes(znak);
  }

  calculate(obj) {
    const { X, Y, znak } = obj;
    let result;

    switch (znak) {
      case '+':
        result = X + Y;
        break;
      case '-':
        result = X - Y;
        break;
      case '*':
        result = X * Y;
        break;
      case '/':
        if (Y !== 0) {
          result = X / Y;
        } else {
          alert('Ділення на нуль неможливе.');
          return;
        }
        break;
      case '%':
        result = X % Y;
        break;
      default:
        alert('Непідтримувана операція');
        return;
    }

    console.log(`Результат: ${result}`);
  }

  input() {
    for (let key in this.myObject) {
      if (this.myObject.hasOwnProperty(key)) {
        let userInput = prompt(`Введіть числове значення для ключа ${key}:`);

        if (userInput !== null && userInput !== '') {
          this.myObject[key] = parseFloat(userInput);
        } else {
          alert('Будь ласка, введіть числове значення.');
          this.input(); // Повторний ввід
          return;
        }
      }
    }

    this.check(this.myObject); // Перевірити після введення даних
  }
}

// Приклад використання
const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);
console.log(p.myObject);
