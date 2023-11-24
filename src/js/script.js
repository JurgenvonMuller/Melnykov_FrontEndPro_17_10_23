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
    const userDecision = confirm(`Выполнить мат операцию X і Y?`);

    if (userDecision) {
      const userDecisionOkObj = confirm(
        `Выполнить мат операцию существующим объектом X і Y?`
      );

      if (userDecisionOkObj) {
        if (this.isValidOperation(obj)) {
          this.calculate(obj);
        } else {
          console.log("Не корректные данные ");
        }
      } else {
        this.input();
        if (this.isValidOperation(this.myObject)) {
          this.calculate(this.myObject);
        } else {
          console.log("Не корректные данные");
        }
      }
    } else {
      console.log("Вы отказались");
    }
  }

  isValidOperation(obj) {
    const { X, Y, znak } = obj;

    if (isNaN(X) || isNaN(Y)) {
      return false;
    }

    const supportedOperators = ["+", "-", "*", "/", "%"];
    return supportedOperators.includes(znak);
  }

  calculate(obj) {
    const { X, Y, znak } = obj;
    let result;

    switch (znak) {
      case "+":
        result = X + Y;
        break;
      case "-":
        result = X - Y;
        break;
      case "*":
        result = X * Y;
        break;
      case "/":
        if (Y !== 0) {
          result = X / Y;
        } else {
          alert("Деление на НОЛЬ????");
          return;
        }
        break;
      default:
        alert("Что - то пошло не так ");
        return;
    }

    console.log(`Результат: ${result}`);
  }

  input() {
    for (let key in this.myObject) {
      if (this.myObject.hasOwnProperty(key)) {
        let userInput;

        if (key === "znak") {
          userInput = prompt(
            `Введите одну из математических операций (+, -, *, /, %) для ${key}:`
          );
        } else {
          userInput = prompt(`Введите числовое значение для ${key}:`);
        }

        if (userInput !== null && userInput !== "") {
          if (
            key === "znak" &&
            !["+", "-", "*", "/", "%"].includes(userInput)
          ) {
            alert(
              "Некорректная операция. Введите одну из математических операций: +, -, *, /, %"
            );
            this.input(); // Повторный ввод
            return;
          } else {
            this.myObject[key] = userInput;
          }
        } else {
          alert("Необходимо ввести значение.");
          this.input(); // Повторный ввод
          return;
        }
      }
    }
  }
}

// Приклад використання
const p = new SuperMath();
const obj = { X: 36, Y: 6, znak: "+" };
p.check(obj);
