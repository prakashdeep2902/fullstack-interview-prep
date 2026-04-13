Here are **interview-ready JavaScript notes in Markdown format** (clean, structured, GitHub-ready).
Each concept has **at least 2 lines explanation + examples** as you asked.

---

# 📘 JavaScript Interview Notes

## 1. Variables (`var`, `let`, `const`)

Variables are used to store data values.
`var` is function-scoped, while `let` and `const` are block-scoped and safer to use.

```js
var a = 10; // function scope
let b = 20; // block scope
const c = 30; // cannot be reassigned
```

---

## 2. Data Types

JavaScript has dynamic typing, meaning variables can hold any type of data.
Primitive types include string, number, boolean, null, undefined, symbol, bigint.

```js
let name = "Prakash"; // string
let age = 25; // number
let isDev = true; // boolean
```

---

## 3. Functions

Functions are reusable blocks of code designed to perform a task.
They can take parameters and return values.

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
```

---

## 4. Arrow Functions

Arrow functions provide a shorter syntax and do not have their own `this`.
They are commonly used in callbacks and functional programming.

```js
const add = (a, b) => a + b;
```

---

## 5. Closures

A closure is a function that remembers variables from its outer scope even after execution.
It helps in data encapsulation and creating private variables.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const fn = outer();
fn(); // 1
fn(); // 2
```

---

## 6. Hoisting

Hoisting moves declarations to the top of their scope before execution.
Only declarations are hoisted, not initializations.

```js
console.log(a); // undefined
var a = 10;
```

---

## 7. Scope (Global, Local, Block)

Scope determines where variables are accessible in the code.
JavaScript has global scope, function scope, and block scope.

```js
let x = 10;

function test() {
  let y = 20;
}
```

---

## 8. `this` Keyword

`this` refers to the object that is executing the current function.
Its value depends on how the function is called.

```js
const obj = {
  name: "Prakash",
  getName() {
    return this.name;
  },
};
```

---

## 9. Event Delegation

Event delegation allows a parent element to handle events of its child elements.
It uses event bubbling to improve performance and reduce listeners.

```js
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```

---

## 10. Promises

Promises are used to handle asynchronous operations in JavaScript.
They have three states: pending, fulfilled, and rejected.

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then((res) => console.log(res));
```

---

## 11. Async/Await

Async/await is a cleaner way to handle promises.
It makes asynchronous code look like synchronous code.

```js
async function fetchData() {
  const res = await Promise.resolve("Data");
  console.log(res);
}
```

---

## 12. Callbacks

A callback is a function passed as an argument to another function.
It is executed after some operation is completed.

```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
```

---

## 13. Map vs Filter vs Reduce

These are array methods used for transformations.
`map` transforms, `filter` selects, and `reduce` accumulates values.

```js
const arr = [1, 2, 3];

arr.map((x) => x * 2); // [2, 4, 6]
arr.filter((x) => x > 1); // [2, 3]
arr.reduce((a, b) => a + b, 0); // 6
```

---

## 14. Debouncing

Debouncing delays the execution of a function until a certain time passes.
It is useful for search inputs and performance optimization.

```js
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}
```

---

## 15. Throttling

Throttling ensures a function runs at most once in a given time interval.
It is useful for scroll and resize events.

```js
function throttle(fn, limit) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => (flag = true), limit);
    }
  };
}
```

---

## 16. Prototypal Inheritance

JavaScript uses prototypes to inherit properties and methods.
Objects can access properties of another object via prototype chain.

```js
const parent = {
  greet() {
    console.log("Hello");
  },
};

const child = Object.create(parent);
child.greet();
```

---

## 17. ES6 Classes

Classes are syntactic sugar over prototypes.
They make object-oriented programming easier.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}
```

---

## 18. Destructuring

Destructuring allows unpacking values from arrays or objects.
It makes code cleaner and more readable.

```js
const obj = { name: "Prakash", age: 25 };
const { name, age } = obj;
```

---

## 19. Spread & Rest Operator

Spread expands elements, while rest collects remaining elements.
Both use `...` syntax but serve different purposes.

```js
const arr = [1, 2, 3];
const newArr = [...arr];

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

## 20. Event Loop

The event loop handles asynchronous operations in JavaScript.
It manages call stack, callback queue, and microtask queue.

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

---

## 21. Currying

Currying transforms a function with multiple arguments into nested functions.
Each function takes one argument at a time.

```js
function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

curry(1)(2)(3); // 6
```

---

## 22. Shallow vs Deep Copy

Shallow copy copies reference, deep copy creates a full independent copy.
Shallow changes affect original, deep copy does not.

```js
const obj = { a: 1 };
const copy = { ...obj };
```

---

## 23. Null vs Undefined

`undefined` means variable declared but not assigned.
`null` is an intentional absence of value.

```js
let a;
let b = null;
```

---

## 24. == vs ===

`==` compares values with type conversion.
`===` compares value and type strictly.

```js
5 == "5"; // true
5 === "5"; // false
```

---

## 25. setTimeout vs setInterval

`setTimeout` runs once after delay.
`setInterval` runs repeatedly after interval.

```js
setTimeout(() => console.log("once"), 1000);
setInterval(() => console.log("repeat"), 1000);
```

---
