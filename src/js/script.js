/*
1. Створити сутність "Людина".

Властивості:
імʼя;
вік.
Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.
2. Створити сутність "Автомобіль".

Властивості:
марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника):
марка, модель, рік виписку, номерний знак 

присвоїти власника - метод повинен приймати екземпляр класу Людина,
та зберігати екземпляр класу Людина у відповідному полі, якщо вік 
більше 18, інакше виводити у консоль відповідне повідомлення


метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.

*/
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  personInfo() {
    console.log(
      `The name of person is "${this.name}" The Age of preson is ${this.age} years.`
    );
  }
}

class Car {
  constructor(type, model, productYear, carNr) {
    this.type = type;
    this.model = model;
    this.productYear = productYear;
    this.carNr = carNr;
    this.owners = [];
  }
  addOwnerOfCar(owner) {
    if (owner.age > 18) {
      this.owners.push(owner);
      return this.owners[this.owners.length - 1];
    } else {
      console.log("You are very young");
    }
  }
  carInfo() {
    console.log(
      `Car Info - Type: ${this.type}, Model: ${this.model}, Product Year: ${this.productYear}, Car Number: ${this.carNr}`
    );
    console.log("Owners:");
    this.owners.forEach((owner) => {
      console.log(`Owner: ${owner.name}, Age: ${owner.age}`);
    });
  }
}

let newPerson = new Person("Bill", 45);
let newPerson1 = new Person("Bob", 10);
let newPerson2 = new Person("Nike", 78);

let car = new Car("Sedan", "Toyota", 2022, "ABC123");
let car1 = new Car("Sedan", "BMW", 2021, "BBC456");
let car2 = new Car("Sedan", "KIA", 2020, "CBC562");

let newOwner = car.addOwnerOfCar(newPerson);
let newOwner1 = car1.addOwnerOfCar(newPerson1);
let newOwner2 = car2.addOwnerOfCar(newPerson2);

console.log(car.carInfo());
console.log(car1.carInfo());
console.log(car2.carInfo());
