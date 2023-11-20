/*

Вам потрібно зробити конструктор сутності "Студент".

Студент має ім'я, прізвище, рік народження — це властивості. 
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
    this.attendance = new Array(25).fill(undefined); // Масив відвідуваності, спочатку порожній
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0; // Якщо немає оцінок, середня оцінка - 0
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
      // Перевіряємо, чи є місце для нового запису про відвідуваність
      const emptyIndex = this.attendance.indexOf(undefined);
      this.attendance[emptyIndex] = status;
    } else {
      console.log('Масив відвідуваності вже заповнений');
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio = this.attendance.filter(Boolean).length / 25;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return 'Молодець!';
    } else if (averageGrade > 90 || attendanceRatio > 0.9) {
      return 'Добре, але можна краще';
    } else {
      return 'Редиска!';
    }
  }
}

// Створюємо екземпляри
const student1 = new Student('John', 'Doe', 1998);
const student2 = new Student('Jane', 'Smith', 1999);
const student3 = new Student('Bob', 'Johnson', 2000);

// Додаємо оцінки та відвідуваність для прикладу
student1.grades = [95, 85, 92, 88, 97];
student2.grades = [90, 88, 94, 78, 85];
student3.grades = [92, 99, 99, 99, 91];

student1.present();
student1.present();
student1.absent();

// Перевіряємо результати
console.log('Student 1 summary:', student1.summary());
console.log('Student 2 summary:', student2.summary());
console.log('Student 3 summary:', student3.summary());
