
/*
Мережа фастфудів пропонує кілька видів гамбургерів:

маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).
Гамбургер може бути з одним із декількох видів начинок:

сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).
Можна додати добавки:

посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

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















// Клас Гамбургер
class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SPICE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
    return basePrice + toppingsPrice;
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
    return baseCalories + toppingsCalories;
  }
}

// Приклад використання
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Price with spice: " + hamburger.calculatePrice());
