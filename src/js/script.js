/*
Мережа фастфудів пропонує кілька видів 
гамбургерів:

маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).
Гамбургер може бути з одним із декількох 
видів начинок:

сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).
Можна додати добавки:

посипати приправою (+15 тугриків, 0 калорій) 
- полити майонезом (+ 20 тугриків, +5 калорій).
Напишіть програму, яка розраховує вартість
 та калорійність гамбургера. 
 Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, 
  константи, методи для вибору опцій 
  та розрахунку потрібних величин

Приклад роботи коду:

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(“Calories: “ + hamburger.calculate ());

// скільки коштує
console.log("Price: “ + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: “ + hamburger.calculatePrice());
*/

class Hamburger {
  constructor(size, stufing) {
    this.size = size;
    this.stuffing = stufing;
    this.toppingArray = [];
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };

  addTopping(topping) {
    this.toppingArray.push(topping);
  }

  calculate() {
    let totalCalories =
      this.size.calories +
      this.stuffing.calories +
      this.toppingArray.reduce((accu, topping) => accu + topping.calories, 0);

    return totalCalories;
  }

  calculatePrice() {
    let totalPrice =
      this.size.price +
      this.stuffing.price +
      this.toppingArray.reduce((accu, topping) => accu + topping.price, 0);

    return totalPrice;
  }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories: ` + hamburger.calculate());

// скільки коштує
console.log(`Price: ` + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log(`Price with sauce: ` + hamburger.calculatePrice());
