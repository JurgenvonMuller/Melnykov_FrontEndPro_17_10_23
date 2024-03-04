/*Є текстове поле на сторінці. Під час фокусування на цьому полі збоку
 з'являється <div>. При пропажі фокусу - <div> так само пропадає
 */

// Получаем ссылки на элементы DOM
let inputField = document.getElementById("myInput");
let myDiv = document.getElementById("myDiv");

// Добавляем обработчик события для фокуса на текстовом поле
inputField.addEventListener("focus", function () {
  myDiv.style.display = "block";
});

// Добавляем обработчик события для потери фокуса текстовым полем
inputField.addEventListener("blur", function () {
  myDiv.style.display = "none";
});



















































// class A {
//   variableA;

//   read() {
//     console.log(`I am a method READ in obj A`);
//   }
// }

// class B extends A {
//   variableB;

//   close() {
//     console.log(`I am a method CLOSE in obj B`);
//   }
// }

// let instanceB = new B();

// console.log("read" in instanceB);
// console.log("close" in instanceB);

// console.log(instanceB.hasOwnProperty("read"));
// console.log(instanceB.hasOwnProperty("close"));

// const keys = Object.keys(instanceB);

// console.log(keys);
