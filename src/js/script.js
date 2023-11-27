class A {
  variableA;

  read() {
    console.log(`I am a method READ in obj A`);
  }
}

class B extends A {
  variableB;

  close() {
    console.log(`I am a method CLOSE in obj B`);
  }
}

let instanceB = new B();

console.log("read" in instanceB);
console.log("close" in instanceB);

console.log(instanceB.hasOwnProperty("read"));
console.log(instanceB.hasOwnProperty("close"));

const keys = Object.keys(instanceB);

console.log(keys);
