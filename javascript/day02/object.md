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
