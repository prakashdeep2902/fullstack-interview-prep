# JavaScript Functions – Complete Notes

## 1. What is a Function

A **function** is a reusable block of code that performs a specific task.

### Syntax

```javascript
function greet() {
  console.log("Hello");
}
greet();
```

### Key Points

- Functions help **reuse code**
- Functions run **only when called**
- Functions can accept **parameters**
- Functions can **return values**

---

# 2. Function Declaration

A function declared using the `function` keyword.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

### Important Feature

Function declarations are **hoisted**.

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

---

# 3. Function Expression

A function stored inside a variable.

```javascript
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));
```

### Key Points

- Stored in variables
- **Not hoisted**

---

# 4. Arrow Functions (ES6)

Shorter syntax for writing functions.

```javascript
const add = (a, b) => a + b;
```

### Examples

Single parameter

```javascript
const square = (num) => num * num;
```

No parameter

```javascript
const greet = () => console.log("Hello");
```

### Key Points

- Short syntax
- Used heavily in **React**
- Does **not have its own `this`**

---

# 5. Callback Functions

A **callback function** is a function passed as an argument to another function.

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Prakash", function () {
  console.log("Welcome!");
});
```

### Common Usage

- `setTimeout`
- `map`
- `filter`
- `reduce`
- `event listeners`

---

# 6. Higher Order Functions

A **Higher Order Function (HOF)** is a function that:

1. Takes another function as argument
2. Returns another function

Example

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;

calculate(2, 3, add);
```

### Examples of HOF

- `map()`
- `filter()`
- `reduce()`

---

# 7. Closures

A **closure** occurs when a function remembers variables from its outer scope even after the outer function has finished execution.

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c = counter();

c();
c();
```

### Use Cases

- Private variables
- State preservation
- Functional programming

---

# 8. call(), apply(), bind()

These methods control the value of **`this`**.

### call()

```javascript
greet.call(person);
```

Arguments passed **normally**.

---

### apply()

```javascript
greet.apply(person, ["Delhi", "India"]);
```

Arguments passed as **array**.

---

### bind()

Returns a **new function**.

```javascript
const newFunc = greet.bind(person);
newFunc();
```

---

# 9. IIFE (Immediately Invoked Function Expression)

A function that runs immediately after it is defined.

```javascript
(function () {
  console.log("Runs immediately");
})();
```

### Purpose

- Avoid global variables
- Private scope

---

# 10. Currying

Currying converts a function with multiple arguments into a sequence of functions with one argument.

Normal function

```javascript
add(a, b, c);
```

Curried function

```javascript
add(a)(b)(c);
```

Example

```javascript
const add = (a) => (b) => (c) => a + b + c;

add(2)(3)(4);
```

### Benefits

- Code reuse
- Functional programming
- Partial application

---

# Concepts Covered

- Function Basics
- Function Declaration
- Function Expression
- Arrow Functions
- Callback Functions
- Higher Order Functions
- Closures
- call / apply / bind
- IIFE
- Currying

---

# Conclusion

Functions are the **core building block of JavaScript**.
Understanding functions deeply helps in mastering:

- JavaScript
- Node.js
- React
- Functional Programming
