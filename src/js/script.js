/*
1. Створити клас Людина.

Властивості:
імʼя;
стать.
Методи:
конструктор, який приймає два параметри: імʼя та стать.

2. Створити клас Квартира.
Властивості:
конструктор не потрібен;
масив жителів, який при створенні пустий.
Методи:
додати жителя - метод повинен приймати екземпляр класу Людина, 
та додавати до масиву жителів.


3. Створити клас Будинок.

Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр:
максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр
класу Квартира, перевіряти, 
чи не буде кількість перевищувати максимальну кількість 
квартир, і якщо це так, додати квартиру, 
в іншому випадку виводить у консоль відповідне повідомлення.
В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;
додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.

/*
+
maxPeopleInFlat такого в умові нема - не треба додумувати :)

maxFlats = 3; - те саме - не треба додумувати. Ця властивість 
задається в конструкторі - тому ми можемо бути впевненими, що вона 
створиться. 

return null; як і return this - використовується досить рідко, 
відношення до методів класу має бути як що звичайної фуцкнії - 
і вертати вона має щось що притаманно їй - не обов"язково this або 
взагалі
будь-що :) В твому випадку якщо ми 
виклечемо зайвий раз house1.addFlat().addPerson(person5) - буде помилка, 
бо addFlat() поверне null. Ну і тут помилка в тому, 
що addFlat() має приймати квартиру як аргумент, а не створювати її
*/


class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  peopleInFlat = [];

  addPerson(person) {
    this.peopleInFlat.push(person);
    return this.peopleInFlat;
  }
}

class House {
  flats = [];
  maxFlats;

  constructor(maxFlats) {
    this.maxFlats = maxFlats;
  }

  addFlat() {
    if (this.flats.length < this.maxFlats) {
      let newFlat = new Flat(); // Создаем новый экземпляр класса Flat
      this.flats.push(newFlat);
      return newFlat;
    } else {
      throw new Error("The house is full, please make a new house");
    }
  }
}

let person1 = new Person("Heinrich", "male");
let person2 = new Person("Mikki", "female");
let person3 = new Person("Billy", "male");
let person4 = new Person("Lily", "female");
let person5 = new Person("Bartek", "male");
let person6 = new Person("Iwona", "female");
let person7 = new Person("Iwan", "male");
let person8 = new Person("Maria", "female");

let house1 = new House(3);

try {
  // Расселяем по квартирам
  let flat1 = house1.addFlat();
  flat1.addPerson(person1);
  flat1.addPerson(person2);

  let flat2 = house1.addFlat();
  flat2.addPerson(person3);
  flat2.addPerson(person4);

  let flat3 = house1.addFlat();
  flat3.addPerson(person5);
  flat3.addPerson(person6);
  /* При создании 4-й квартиры выдаст ошибку*/

  // let flat4 = house1.addFlat();
  // flat4.addPerson(person7);
  // flat4.addPerson(person8);

  console.log(house1.flats);
} catch (error) {
  console.error(error.message);
};
