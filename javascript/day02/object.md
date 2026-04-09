## 1️⃣ Object Creation

An **object** in JavaScript is a collection of **key–value pairs** used to store related data and behavior.

```
{
  key: value
}
```

### Example

```javascript
const user = {
  name: "Prakash",
  age: 28,
  city: "Delhi",
};
```

| Key  | Value     |
| ---- | --------- |
| name | "Prakash" |
| age  | 28        |
| city | "Delhi"   |

---

### Ways to Create Objects

#### 1. Object Literal (Most Common)

```javascript
const user = {
  name: "Prakash",
  age: 28,
};
```

✔ Simple
✔ Most used in real projects

---

#### 2. Using `new Object()`

```javascript
const user = new Object();

user.name = "Prakash";
user.age = 28;
```

⚠️ Rarely used in modern JavaScript.

---

#### 3. Constructor Function

Used when creating multiple objects.

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Prakash", 28);
const user2 = new User("Rahul", 25);
```

---

### Objects Can Contain

Objects can store different data types:

```javascript
const user = {
  name: "Prakash",
  age: 28,
  isDeveloper: true,
  skills: ["JavaScript", "React"],
  address: {
    city: "Delhi",
    country: "India",
  },
};
```

---

# 2️⃣ Accessing Object Properties

Once an object is created, we can access its properties.

## Dot Notation

```
object.property
```

Example:

```javascript
const user = {
  name: "Prakash",
  age: 28,
};

console.log(user.name);
console.log(user.age);
```

Output

```
Prakash
28
```

---

## Bracket Notation

```
object["property"]
```

Example:

```javascript
console.log(user["name"]);
```

Used when property names are **dynamic**.

---

## Dynamic Property Access

```javascript
const key = "name";

console.log(user[key]);
```

---

## Access Nested Objects

```javascript
const user = {
  name: "Prakash",
  address: {
    city: "Delhi",
    country: "India",
  },
};

console.log(user.address.city);
```

---

## Access Array Inside Object

```javascript
const user = {
  name: "Prakash",
  skills: ["JavaScript", "React"],
};

console.log(user.skills[0]);
```

Output

```
JavaScript
```

---

# 3️⃣ Object Methods

A **method** is a **function stored inside an object**.

Objects can store both:

- properties (data)
- methods (behavior)

Example:

```javascript
const user = {
  name: "Prakash",

  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();
```

Output

```
Hello Prakash
```

---

## Method Syntax

### Traditional

```javascript
const obj = {
  greet: function () {
    console.log("Hello");
  },
};
```

### Modern ES6 Syntax

```javascript
const obj = {
  greet() {
    console.log("Hello");
  },
};
```

---

## Object with Multiple Methods

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(10, 5));
```

---

# 4️⃣ `this` Keyword

`this` refers to **the object that is calling the function**.

Example:

```javascript
const user = {
  name: "Prakash",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output

```
Prakash
```

Here:

```
this → user object
```

---

## Why We Use `this`

Without `this`:

```javascript
const user = {
  name: "Prakash",
  greet() {
    console.log(name);
  },
};
```

❌ Error because `name` is not defined.

Correct:

```javascript
console.log(this.name);
```

---

## `this` in Arrow Functions

Arrow functions **do not have their own `this`**.

Example:

```javascript
const user = {
  name: "Prakash",
  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

Output

```
undefined
```

Because arrow functions inherit `this` from **parent scope**.

---

## Best Practice

Use **normal functions for object methods**.

Correct:

```javascript
const obj = {
  show() {
    console.log(this);
  },
};
```

Avoid:

```javascript
const obj = {
  show: () => {
    console.log(this);
  },
};
```

---

# 5️⃣ Object Destructuring

Object destructuring allows extracting values from objects into variables.

Instead of:

```javascript
const user = {
  name: "Prakash",
  age: 28,
};

const name = user.name;
const age = user.age;
```

We can write:

```javascript
const { name, age } = user;
```

---

## Example

```javascript
const user = {
  name: "Prakash",
  age: 28,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

---

## Rename Variables

```javascript
const { name: userName, age: userAge } = user;
```

---

## Default Values

```javascript
const user = {
  name: "Prakash",
};

const { name, age = 25 } = user;
```

Output

```
25
```

---

## Nested Destructuring

```javascript
const user = {
  name: "Prakash",
  address: {
    city: "Delhi",
  },
};

const {
  address: { city },
} = user;

console.log(city);
```

---

## Destructuring in Function Parameters

Very common in React and Node.js.

```javascript
function printUser({ name, age }) {
  console.log(name, age);
}

const user = {
  name: "Prakash",
  age: 28,
};

printUser(user);
```

---

# ⭐ Interview Tips

Important points interviewers check:

1. Difference between **dot notation vs bracket notation**
2. Understanding of **this keyword**
3. When **arrow functions break `this`**
4. Using **object destructuring**
5. Accessing **nested object properties**

---

# Quick Summary

| Topic                | Key Idea                        |
| -------------------- | ------------------------------- |
| Object Creation      | Objects store key-value data    |
| Access Properties    | Dot notation / Bracket notation |
| Object Methods       | Functions inside objects        |
| this Keyword         | Refers to calling object        |
| Object Destructuring | Extract values from objects     |

---
