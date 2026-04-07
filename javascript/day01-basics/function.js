function sayHello() {
  console.log("hello my word");
}

sayHello();

// Example 4 — Reusable Code

// this Type of function call function declaration

function sumOfTwoNumbers(num1, num2) {
  const sum = num1 + num2;

  return sum;
}

console.log(sumOfTwoNumbers(2, 2));
console.log(sumOfTwoNumbers(4, 4));

// function expression is not hoisting

// this Type of function called function expression
const greet = function (name) {
  console.log(`My Name is ${name}`);
};

greet("Prakash");

// arrow function

const sum = (text) => `prakash ${text}`;

console.log(sum("and my brother name is vikash"));

// Arrow Function with One Parameter

// If there is only one parameter, parentheses are optional.

const square = (num) => num * num;

console.log(2);

// arrow function with object

const CreateUsers = () => (
  {
    userName: "prakash",
    userAge: 24,
  },
  {
    userName: "vikash",
    userAge: 26,
  }
);

console.log(CreateUsers());

const number = [12, 14, 24, 34, 343, 234];

let prakash = [];
const afterMap = number.map((num) => num * num);

console.log("afterMap:::>", afterMap);

console.log("prakash::===>", prakash);

// arrow function does't contain there own this key word

const UserName = {
  name: "akash",
  age: 26,
  others: function (name, age) {
    (console.log(this.name), console.log(this.age));
  },
};

UserName.others();

// callback function

// a function that is passed as an argumnet into other function and excuted later

const greet3 = function (name, sayHello1) {
  console.log(`${name}`);
  sayHello1();
};

const sayHello1 = function () {
  console.log("hey Hello");
};

greet3("prakash", sayHello1);

// setTimeOut is call back function

const number1 = [1, 2, 3, 4, 5];

const result = number1.map(function (num) {
  return num * num;
});

console.log("square of array element", result);

// this also callback function

// button.addEventListener("click", function () {
//   console.log("Button clicked");
// });

//

const introduction = (vikash, callback) => {
  console.log(vikash);
  callback();
};

introduction("My name is vikash and he is my younger Brother Prakash ", () => {
  console.log("hello my name is prakash");
});

// Higer Order function

function brotherNames(callback1, callback2) {
  // <---------  Higer Order Function
  callback1();
  callback2();
  console.log("my name is prakash");
}

const vikash = function () {
  console.log("my name is vikash"); // <---------  callback function
};

const akash = function () {
  console.log("my name is akash"); // <---------  callback function
};

brotherNames(akash, vikash);

// function returning other function

function multiplyBy(num) {
  return function (x) {
    return 100 * x * num;
  };
}

const double = multiplyBy(2);

console.log(double(2));

// example of Higer order Function

function calculator(a, b, opertor) {
  return opertor(a, b);
}

const add = (x, y) => x + y;

console.log(calculator(5, 2, add));

// closer

// closer is type of function that can user of variable of uter function , lexical scopr

// exmaple

function createBankAcccount() {
  let balance = 1000;
  console.log(balance);
  return {
    deposit: (amount) => {
      balance += amount;

      console.log(balance);
    },
    withdraw: (amount) => {
      balance -= amount;
      console.log(balance);
    },
  };
}

const account = createBankAcccount();
account.withdraw(500);

function counterfn() {
  let count = 1;

  return function () {
    count += 1;
    console.log(count);
  };
}

const counter = counterfn();

counter();
counter();
counter();
counter();

// call, apply and bind()

const person1 = {
  name: "prakash",
  age: 12,
  work: "SDE",
};

const person2 = {
  name: "vikash",
  age: 22,
  work: "SDE",
};

const person3 = {
  name: "akash",
  age: 24,
  work: "SDE",
};

function greet9(city) {
  if (this.age < 18) {
    console.log(
      `${this.name} is not allowed to vote beacuse age less then 18  `,
    );
  } else {
    console.log(
      `${this.name} is allowed to vote beacuse his/her age is ${this.age}`,
    );
  }

  console.log(`Address of ${this.name} is city:${city}`);
}

const callingBind = greet9.bind(person3, "nawada");

callingBind();

// exmaple of pure and impure funtion

const adding = function (a, b) {
  const sum = a + b; // <-----pure function

  return sum;
};

console.log(adding(2, 9));

//impure function
let total = 10;
const countTotal = (num) => {
  total += num;
  return total;
};

console.log(countTotal(5));
console.log(countTotal(5));
