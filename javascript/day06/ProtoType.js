let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);

// my own ProtoType

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("prakash");

p1.sayHello();

console.log(Person.__proto__);
