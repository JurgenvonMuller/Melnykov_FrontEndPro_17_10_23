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
додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
3. Створити клас Будинок.

Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
чи не буде кількість перевищувати максимальну кількість 
квартир, і якщо це так, додати квартиру, 
в іншому випадку виводить у консоль відповідне повідомлення.
В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;
додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.

*/
class Persons {
  name;
  gender;
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
};

class Flat {
  peopleInFlat = [];
  maxPeopleInFlat = 2;
  addPerson(person) {
    
    if(this.peopleInFlat.length < this.maxPeopleInFlat) {
      this.peopleInFlat.push(person);
    } else {
      console.log('This flat is full. Next person will go to next flat', '')
      this.createNewFlat().addPerson();
    }
    return this;
  }
  createNewFlat() {
    return new Flat();
  }
};

class House {
  flats = new Array(3); // Ограничение в 3 квартиры создан пустой массив 30 мест))
  constructor(flat) {
    this.flat = flat;
  }
  addFlat(flat) {
    this.flats.push(flat);
  }
};

let person1 = new Persons('Heinrich', 'male');
let person2 = new Persons('Mikki', 'female');
let person3 = new Persons('Billy', 'male');
let person4 = new Persons('Lily', 'female');
console.log(person4.name);

let flat  = new Flat();

// let flat3  = new Flat();

flat.addPerson(person1).addPerson(person2).addPerson(person3);
console.log(flat.peopleInFlat);

