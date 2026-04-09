// create object using new objects

const person = new Object();

person.name = "prakash";
person.age = 20;
person.work = "SDE1";

console.log(person);

// Method 3 — Using Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Prakash", 28);
const user2 = new Person("Rahul", 25);

console.log(user1);
console.log(user2);

const user = {
  name: "Prakash",
  age: 28,
};

const key = "age";

console.log(user[key]);
