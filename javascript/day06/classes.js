class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const p1 = new Person("Prakash", 25);
p1.greet();

class Car {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(this.name + " started");
  }
}

const c1 = new Car("BMW");

console.log(c1.__proto__);
console.log(c1.__proto__ === Car.prototype);

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getUsers() {
    try {
      const response = await fetch(`${this.baseURL}/users`);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

// Usage
const api = new ApiService("https://jsonplaceholder.typicode.com");

api.getUsers().then((users) => {
  //   console.log(users);
});

class person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello My name is ${this.name}`);
  }
}

const p2 = new person("prakash");

p2.sayHello();

// inheritance

class animals {
  constructor(name) {
    this.name = name;
  }
}

class dog extends animals {
  constructor(name) {
    super(name); // ✅ pass value
  }

  bark() {
    console.log(`animal which name is ${this.name} is barking`);
  }
}

const d1 = new dog("Dog");
d1.bark();

// class Counter {
//   constructor(num) {
//     this.num = num;
//   }

//   increment() {
//     return this.num++;
//   }
// }

// const c2 = new Counter(1);

// console.log(c2.increment());
// console.log(c2.increment());
// console.log(c2.increment());
// console.log(c2.increment());

class Counter {
  count = 0;

  increment() {
    this.count++;
  }
}

const c = new Counter();
const fn = c.increment.bind(c);

console.log(c.increment);
