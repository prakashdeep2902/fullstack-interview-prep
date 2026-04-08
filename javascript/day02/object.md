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

---
