# 1️⃣ Object Creation in JavaScript

An **Object** is a collection of **key-value pairs**.

Think of it like a **real-world object**.

Example: A **person**

- name → "Prakash"
- age → 28
- city → "Delhi"

In JavaScript:

```javascript
const person = {
  name: "Prakash",
  age: 28,
  city: "Delhi",
};
```

Here:

| Key  | Value     |
| ---- | --------- |
| name | "Prakash" |
| age  | 28        |
| city | "Delhi"   |

So the structure is:

```javascript
{
  key: value;
}
```

---

# 2️⃣ Different Ways to Create Objects

There are **3 main ways**.

---

# Method 1 — Object Literal (Most Common)

This is the **most used method**.

```javascript
const car = {
  brand: "BMW",
  model: "X5",
  year: 2023,
};

console.log(car);
```

Output

```
{ brand: 'BMW', model: 'X5', year: 2023 }
```

✔ Simple
✔ Fast
✔ Used in **90% of code**

---

# Method 2 — Using `new Object()`

```javascript
const car = new Object();

car.brand = "BMW";
car.model = "X5";
car.year = 2023;

console.log(car);
```

Output

```
{ brand: 'BMW', model: 'X5', year: 2023 }
```

But this is **not recommended** because it is longer.

---

# Method 3 — Using Constructor Function

Used when creating **multiple objects**.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Prakash", 28);
const user2 = new Person("Rahul", 25);

console.log(user1);
console.log(user2);
```

Output

```
Person { name: 'Prakash', age: 28 }
Person { name: 'Rahul', age: 25 }
```

# 2️⃣ Accessing Object Properties in JavaScript

Once we create an object, we need to **read or access its values**.

Example object:

```javascript
const user = {
  name: "Prakash",
  age: 28,
  city: "Delhi",
};
```

Now we want to access:

- name
- age
- city

There are **two main ways**.

---

# 1️⃣ Dot Notation (Most Common)

Syntax

```javascript
object.property;
```

Example

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

✔ Simple
✔ Clean
✔ Most used

---

# 2️⃣ Bracket Notation

Syntax

```javascript
object["property"];
```

Example

```javascript
const user = {
  name: "Prakash",
  age: 28,
};

console.log(user["name"]);
console.log(user["age"]);
```

Output

```
Prakash
28
```

---

# Dot vs Bracket (Important Interview Question)

### Dot Notation

```javascript
user.name;
```

### Bracket Notation

```javascript
user["name"];
```

Both give the **same result**.

But bracket notation is useful when **property name is dynamic**.

---

# 3️⃣ Dynamic Property Access

Example

```javascript
const user = {
  name: "Prakash",
  age: 28,
};

const key = "name";

console.log(user[key]);
```

Output

```
Prakash
```

Here:

```
user[key]
```

means

```
user["name"]
```

Dot notation **cannot do this**.

❌ This will not work

```javascript
user.key;
```

Output

```
undefined
```

---

# 4️⃣ Access Nested Objects

Objects can contain **objects inside them**.

Example:

```javascript
const user = {
  name: "Prakash",
  address: {
    city: "Delhi",
    country: "India",
  },
};
```

Access city:

```javascript
console.log(user.address.city);
```

Output

```
Delhi
```

Step-by-step access

```
user
  → address
       → city
```

---

# 5️⃣ Access Array Inside Object

Example

```javascript
const user = {
  name: "Prakash",
  skills: ["JavaScript", "React", "Node"],
};

console.log(user.skills[0]);
```

Output

```
JavaScript
```

---

# 6️⃣ Easy Example

```javascript
const car = {
  brand: "BMW",
  model: "X5",
};

console.log(car.brand);
```

Output

```
BMW
```

---

# 7️⃣ Medium Example

```javascript
const student = {
  name: "Rahul",
  marks: 90,
};

console.log(student["marks"]);
```

Output

```
90
```

---

# 8️⃣ Hard Example

```javascript
const company = {
  name: "Google",
  location: {
    city: "California",
    country: "USA",
  },
};

console.log(company.location.country);
```

Output

```
USA
```

---

# ⚠️ Common Mistake

```javascript
const user = {
  name: "Prakash",
};

console.log(user.age);
```

Output

```
undefined
```

Because **age does not exist**.

---

# 3️⃣ Object Methods in JavaScript

An **Object Method** is simply a **function inside an object**.

So an object can store:

- data (properties)
- behavior (methods)

Example:

```javascript
const person = {
  name: "Prakash",
  age: 28,
  greet: function () {
    console.log("Hello!");
  },
};

person.greet();
```

Output

```
Hello!
```

Here:

| Key   | Value     |
| ----- | --------- |
| name  | "Prakash" |
| age   | 28        |
| greet | function  |

So **greet() is a method**.

---

# Method Syntax

Basic syntax:

```javascript
const obj = {
  methodName: function () {
    // code
  },
};
```

Call method:

```javascript
obj.methodName();
```

---

# Example 1 (Easy)

```javascript
const car = {
  brand: "BMW",
  start: function () {
    console.log("Car started");
  },
};

car.start();
```

Output

```
Car started
```

---

# Example 2 (Medium)

```javascript
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(5, 3));
```

Output

```
8
```

The object behaves like a **mini calculator**.

---

# Example 3 (Hard)

Method using object properties.

```javascript
const user = {
  name: "Prakash",
  age: 28,

  introduce: function () {
    console.log("My name is " + this.name);
  },
};

user.introduce();
```

Output

```
My name is Prakash
```

Here we used:

```
this.name
```

We will explain **this keyword deeply next**.

---

# Modern Short Syntax (ES6)

JavaScript allows **short method syntax**.

Instead of:

```javascript
const user = {
  greet: function () {
    console.log("Hello");
  },
};
```

We can write:

```javascript
const user = {
  greet() {
    console.log("Hello");
  },
};
```

This is **modern JavaScript syntax**.

---

# Object With Multiple Methods

Example:

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
```

Output

```
15
5
50
```

---

# Real World Example (Very Important)

Objects often represent **real world entities**.

Example: **Bank Account**

```javascript
const account = {
  name: "Prakash",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  },
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance);
```

Output

```
1300
```

---

# Interview Trick Question

What is the output?

```javascript
const obj = {
  x: 10,
  getX() {
    return this.x;
  },
};

console.log(obj.getX());
```

Answer:

```
10
```

Because `this` refers to the **object calling the method**.

---

# Practice for You

Tell the output.

### Question 1

```javascript
const user = {
  name: "Prakash",
  sayHello() {
    console.log("Hello " + this.name);
  },
};

user.sayHello();
```

---

### Question 2

```javascript
const calc = {
  multiply(a, b) {
    return a * b;
  },
};

console.log(calc.multiply(4, 5));
```
