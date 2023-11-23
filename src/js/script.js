/*

Вам потрібно зробити конструктор сутності "Студент".

Студент має ім'я, прізвище, рік народження — 
це властивості. 

Є масив з оцінками, це також властивість. 
І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається 
відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє
 місце, в масив записується true, коли викликаємо .absent() - записується false.
 Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
Масив – це властивість, present та absent – ​​методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє 
відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, 
а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
якщо одне з цих значень менше , то - "Добре, але можна краще ", 
якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри 
(конкретних студентів) і показати використання цих методів.

*/

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined); // Массив посещения занятий заполняем АНДЕФ
  }

  getAge() {
    const currentYear = 2023;
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0; // пустой массив возвратит 0 так как нет оценок
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    this.updateAttendance(true);
  }

  absent() {
    this.updateAttendance(false);
  }

  updateAttendance(status) {
    if (this.attendance.filter(Boolean).length < 25) {
      // Проверка доступного места в массиве
      const emptyIndex = this.attendance.indexOf(undefined);
      this.attendance[emptyIndex] = status;
    } else {
      console.log("Array of attendance is full");
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio = this.attendance.filter(Boolean).length / 25;

    if (averageGrade > 90 && attendanceRatio >= 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRatio >= 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

// Делаем студентов
const student1 = new Student("John", "Doe", 1998);
const student2 = new Student("Jane", "Smith", 1999);
const student3 = new Student("Bob", "Johnson", 2000);

// Оценки
student1.grades = [100, 100, 100, 100, 100];
student2.grades = [100, 80, 100, 100, 100];
student3.grades = [9, 9, 9, 9, 9, 10];

console.log(student1.getAverageGrade());
console.log(student2.getAverageGrade());

//Не знаю как не вызывать явно функцию 25 раз на каждое занятие

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

//
console.log(`Student 1 ${student1.firstName}  summary:`, student1.summary());
console.log(`Student 2 ${student2.firstName}  summary:`, student2.summary());
console.log(`Student 3 ${student3.firstName}  summary:`, student3.summary());
