# 1️⃣ Function Basics

### Q1: What is a function in JavaScript?

A **function** is a reusable block of code designed to perform a specific task.

Example:

```javascript
function greet(name) {
  return "Hello " + name;
}

greet("Prakash");
```

---

### Q2: Difference between Parameters and Arguments?

| Parameters                       | Arguments                      |
| -------------------------------- | ------------------------------ |
| Variables in function definition | Values passed to function      |
| Declared when creating function  | Provided when calling function |

Example:

```javascript
function greet(name) {
  // name → parameter
  console.log(name);
}

greet("Prakash"); // "Prakash" → argument
```

---

### Q3: What are default parameters?

Default parameters allow assigning **default values** if no argument is passed.

```javascript
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet());
```

Output

```
Hello Guest
```

---

# 2️⃣ Function Declaration

### Q: What is Function Declaration?

A **function declaration** defines a named function using the `function` keyword.

```javascript
function sayHello() {
  console.log("Hello");
}
```

### Important Feature

✔ Function declarations are **hoisted**

Example:

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Output

```
Hello
```

Because the function is **hoisted to the top** during compilation.

---

# 3️⃣ Function Expression

### Q: What is a Function Expression?

A function assigned to a variable.

```javascript
const greet = function () {
  console.log("Hello");
};
```

### Important Feature

❌ Function expressions are **NOT hoisted**

Example:

```javascript
sayHi();

const sayHi = function () {
  console.log("Hi");
};
```

Output

```
ReferenceError
```

Because the variable is not initialized yet.

---

# 4️⃣ Arrow Functions

### Q: What is an Arrow Function?

Arrow functions are a **shorter syntax for writing functions**.

```javascript
const add = (a, b) => {
  return a + b;
};
```

Short version:

```javascript
const add = (a, b) => a + b;
```

---

### Q: Difference between Arrow Function and Normal Function?

| Normal Function            | Arrow Function                |
| -------------------------- | ----------------------------- |
| Has its own `this`         | Does not have its own `this`  |
| Can be used as constructor | Cannot be used as constructor |
| Uses `function` keyword    | Uses `=>`                     |

---

### Example

```javascript
const obj = {
  name: "Prakash",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet();
```

Output

```
undefined
```

Because arrow functions **do not bind `this`**.

---

# 5️⃣ Callback Functions

### Q: What is a Callback Function?

A **callback function** is a function passed as an argument to another function.

Example:

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Prakash", sayBye);
```

Output

```
Hello Prakash
Bye!
```

---

### Q: What is Callback Hell?

When callbacks are **nested deeply**, making code hard to read.

Example:

```javascript
login(function () {
  getUser(function () {
    getOrders(function () {
      processPayment();
    });
  });
});
```

Solution:

- Promises
- Async/Await

---

# 6️⃣ Higher Order Functions

### Q: What is a Higher Order Function?

A function that:

1️⃣ Takes another function as argument
2️⃣ Returns a function

Example:

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

calculate(2, 3, add);
```

Output

```
5
```

---

### Common Built-in Higher Order Functions

- `map()`
- `filter()`
- `reduce()`
- `forEach()`

Example:

```javascript
const numbers = [1, 2, 3];

numbers.map((num) => num * 2);
```

Output

```
[2,4,6]
```

---

# 7️⃣ Closures ⭐

### Q: What is a Closure?

A **closure** is a function that remembers variables from its **outer scope**, even after the outer function finishes execution.

Example:

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
```

Output

```
1
2
```

Even though `counter()` finished executing, the inner function **remembers `count`**.

---

### Use Cases

- Data privacy
- Counters
- Memoization
- Event handlers

---

# 8️⃣ call / apply / bind

These are used to **control the `this` keyword**.

---

### call()

Calls function immediately and passes arguments individually.

```javascript
const person = { name: "Prakash" };

function greet(city) {
  console.log(this.name + " from " + city);
}

greet.call(person, "Delhi");
```

Output

```
Prakash from Delhi
```

---

### apply()

Same as call but arguments are passed as **array**.

```javascript
greet.apply(person, ["Delhi"]);
```

---

### bind()

Returns a **new function** with bound `this`.

```javascript
const newFunc = greet.bind(person);

newFunc("Delhi");
```

---

### Difference

| call                 | apply                | bind                 |
| -------------------- | -------------------- | -------------------- |
| Executes immediately | Executes immediately | Returns new function |
| Arguments separated  | Arguments array      | Used later           |

---

# 9️⃣ IIFE

### Q: What is IIFE?

IIFE = **Immediately Invoked Function Expression**

Runs **immediately after creation**.

```javascript
(function () {
  console.log("Hello World");
})();
```

Output

```
Hello World
```

---

### Why use IIFE?

- Avoid global variables
- Create private scope

---

# 🔟 Currying

### Q: What is Currying?

Currying converts a function with **multiple arguments into nested functions**.

Example:

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(2)(3));
```

Output

```
6
```

---

Example 2

```javascript
const sum = (a) => (b) => (c) => a + b + c;

sum(1)(2)(3);
```

Output

```
6
```

---

# 1️⃣1️⃣ Debouncing

### Q: What is Debouncing?

Debouncing ensures a function **runs only after a delay**, preventing multiple rapid executions.

Example: **Search input**

Implementation:

```javascript
function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}
```

---

# 1️⃣2️⃣ Throttling

### Q: What is Throttling?

Throttling ensures a function **runs at most once within a fixed time interval**.

Example: **Scroll events**

Implementation:

```javascript
function throttle(func, limit) {
  let lastCall = 0;

  return function () {
    let now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}
```

---
