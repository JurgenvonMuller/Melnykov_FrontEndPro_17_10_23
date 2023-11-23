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


метод, який виводить у консоль інформацію про 
автомобіль та викликає метод виводу інформації 
класу Людина для виведення інформації про власника
В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.

1 +

2 перечитай умову уважно - що саме має бути в полі "власник"

Інформація про власника має виводитися як виклик personInfo

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
      `The name of person is "${this.name}". The Age of person is ${this.age} years.`
    );
  }
};

class Car {
  constructor(carBrand, model, productYear, carNr) {
    this.carBrand = carBrand;
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
      throw new Error("You are very young");
    }
  }

  carInfo() {
    console.log(`Car Info - Brand: ${this.carBrand}, Model: ${
      this.model
    }, Product Year: ${this.productYear}, Car Number: ${this.carNr}
    ${this.owners
      .map((owner) => `Owner: ${owner.name}, Age: ${owner.age}`)
      .join("\n")}`);
  }
};

let person1 = new Person("Bill", 45);
let person2 = new Person("Bob", 100);
let person3 = new Person("Nike", 78);
let person4 = new Person("Piter", 5);


let car1 = new Car("Toyota", "Camry", 2022, "ABC123");
let car2 = new Car("BMW", "M3", 2021, "BBC456");
let car3 = new Car("KIA", "Kona", 2020, "CBC562");
let car4 = new Car("KIA", "Sorento", 2020, "CBC562");

// Присваиваем владельцев каждому автомобилю
try {
  car1.addOwnerOfCar(person1);
  car2.addOwnerOfCar(person2);
  car3.addOwnerOfCar(person3);
  car4.addOwnerOfCar(person4);
} catch (error) {
  console.error(error.message);

  // Дополнительный вывод для молодых владельцев
  if (error.message === "You are very young") {
    console.log(`Sorry, ${person4.name} is too young to own a car.`);
  }
}

// И наоборот  - присваиваем машины владельцам
person1.car = car1;
person2.car = car2;
person3.car = car3;
person4.car = car4;

car1.carInfo();
car2.carInfo();
car3.carInfo();
car4.carInfo();
