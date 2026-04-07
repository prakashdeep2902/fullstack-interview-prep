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

**Debouncing** and **Throttling** are **performance optimization techniques in JavaScript**. They control how often a function executes when an event fires many times in a short period (like typing, scrolling, resizing).

These are very important when working with **events** in frontend apps (React, vanilla JS, etc.).

---

# 1. Debouncing

### Idea

**Debouncing delays function execution until the user stops triggering the event for a specified time.**

If the event keeps firing, the timer **resets**.

### Real-life Example

Imagine **search input suggestions**:

- User types: `h` → `he` → `hel` → `hell` → `hello`
- Without debounce → API called **5 times**
- With debounce → API called **1 time after user stops typing**

---

### Visual Flow

```
User typing:  h   he   hel   hell   hello
Time:        |----|----|----|----|

Debounce delay: 500ms

Function executes ONLY after user stops typing.
```

---

### Debounce Implementation

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

---

### Example

```javascript
function search(value) {
  console.log("Searching for:", value);
}

const debouncedSearch = debounce(search, 500);

input.addEventListener("keyup", (e) => {
  debouncedSearch(e.target.value);
});
```

Now the search runs **only after 500ms of no typing**.

---

### When to Use Debounce

Use debounce when you want **the final action only**.

Common use cases:

- Search input API calls
- Auto-save
- Window resize calculations
- Form validation while typing

---

# 2. Throttling

### Idea

**Throttling ensures a function runs at most once in a given time interval.**

Even if the event fires many times, the function runs **at a fixed rate**.

---

### Real-life Example

Scrolling a page.

Without throttle:

```
scroll event → fires 100+ times per second
```

With throttle (500ms):

```
function runs every 500ms
```

---

### Visual Flow

```
Scroll events: |||||||||||||||||||||||

Throttle 500ms:

Run ---- wait ---- Run ---- wait ---- Run
```

---

### Throttle Implementation

```javascript
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

---

### Example

```javascript
function handleScroll() {
  console.log("Scroll event handled");
}

const throttledScroll = throttle(handleScroll, 500);

window.addEventListener("scroll", throttledScroll);
```

Now the function runs **only once every 500ms**, even if scrolling happens continuously.

---

# 3. Debounce vs Throttle

| Feature   | Debounce          | Throttle           |
| --------- | ----------------- | ------------------ |
| Execution | After events stop | At fixed intervals |
| Best for  | Final action      | Continuous events  |
| Example   | Search input      | Scroll / resize    |
| Calls     | Only last call    | Regular calls      |

---

### Timeline Comparison

```
Events:  ||||||||||||||||||

Debounce:
                RUN

Throttle:
RUN----RUN----RUN----RUN
```

---

# 4. Simple Way to Remember

**Debounce**

> "Wait until user stops."

Example:

```
Search bar
```

**Throttle**

> "Run every X seconds."

Example:

```
Scroll event
```

---

# 5. Real Example (Debounce + API)

```javascript
const fetchResults = debounce(async (query) => {
  const res = await fetch(`/search?q=${query}`);
  const data = await res.json();
  console.log(data);
}, 400);

input.addEventListener("input", (e) => {
  fetchResults(e.target.value);
});
```

This **prevents API spam**.

---

# 6. Libraries That Provide These

Many libraries include them already:

- **Lodash**

```javascript
_.debounce(fn, 300);
_.throttle(fn, 300);
```

---

# Quick Interview Definition

**Debouncing**

> A technique that delays function execution until a certain time has passed since the last event.

**Throttling**

> A technique that limits how often a function can run within a given time interval.

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
