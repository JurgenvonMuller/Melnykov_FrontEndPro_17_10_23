class A {
  read() {
    console.log('Method read from class A');
  }
}

class B extends A {
  close() {
    console.log('Method close from class B');
  }
}

const instanceB = new B();

// Перевірка наявності методів read/close в instanceB через оператор in
console.log('read' in instanceB);  // true
console.log('close' in instanceB); // true

// Перевірка наявності методів read/close в instanceB через метод hasOwnProperty
console.log(instanceB.hasOwnProperty('read'));  // true
console.log(instanceB.hasOwnProperty('close')); // true

// Перевірка всіх ключів instanceB (Object.keys)
console.log(Object.keys(instanceB)); // ['close']
