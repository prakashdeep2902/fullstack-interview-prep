# JavaScript Data Types (Basic Concept)

A **data type** defines **what kind of value a variable can store**.

Example:

```javascript
let name = "Prakash"; // String
let age = 25; // Number
let isWorking = true; // Boolean
```

Here each variable stores **different types of data**.

---

# Types of JavaScript Data Types

JavaScript has **2 main categories**:

### 1️⃣ Primitive Data Types

These store **single simple values**.

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

For beginners/interviews, mainly focus on **first 5**.

---

### 2️⃣ Non-Primitive (Reference Types)

These store **collections of data**.

- Object
- Array
- Function

Example:

```javascript
let user = { name: "Prakash", age: 25 }; // Object
let numbers = [1, 2, 3, 4]; // Array
```

---

# Important Primitive Data Types with Examples

### 1️⃣ String

Used for **text**.

```javascript
let name = "Prakash";
let city = "Delhi";
```

---

### 2️⃣ Number

Used for **numbers**.

```javascript
let age = 25;
let price = 99.99;
```

---

### 3️⃣ Boolean

Used for **true / false values**.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

---

### 4️⃣ Undefined

A variable declared but **no value assigned**.

```javascript
let x;
console.log(x);
```

Output

```
undefined
```

---

### 5️⃣ Null

Represents **empty or intentional absence of value**.

```javascript
let data = null;
```

---

# Example Program

```javascript
let name = "Prakash"; // String
let age = 25; // Number
let isWorking = true; // Boolean
let salary; // Undefined
let project = null; // Null

console.log(name);
console.log(age);
console.log(isWorking);
console.log(salary);
console.log(project);
```

---

# typeof Operator (Very Important)

Used to **check the data type of a variable**.

Example:

```javascript
let name = "Prakash";

console.log(typeof name);
```

Output

```
string
```

More examples:

```javascript
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof "Hello"); // string
```

---

# Quick Summary

| Data Type | Example            |
| --------- | ------------------ |
| String    | `"Hello"`          |
| Number    | `25`               |
| Boolean   | `true / false`     |
| Undefined | `let x;`           |
| Null      | `let x = null`     |
| Object    | `{name:"Prakash"}` |
| Array     | `[1,2,3]`          |

---

# JavaScript Data Types – Answers

---

## 1️⃣ What are the different data types available in JavaScript?

JavaScript has **two main categories** of data types:

**1. Primitive Data Types**

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

**2. Non-Primitive (Reference Types)**

- Object
- Array
- Function

---

## 2️⃣ What is the difference between primitive and non-primitive data types?

| Primitive                | Non-Primitive               |
| ------------------------ | --------------------------- |
| Stores single value      | Stores collection of values |
| Stored by **value**      | Stored by **reference**     |
| Immutable                | Mutable                     |
| Examples: string, number | Examples: object, array     |

Example:

```javascript
let a = 10;
let b = a;

b = 20;
```

Here **a remains 10** because primitive types copy **value**.

---

## 3️⃣ What are primitive data types in JavaScript?

Primitive data types are:

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Example:

```javascript
let name = "Prakash";
let age = 25;
let isWorking = true;
```

---

## 4️⃣ What is the difference between null and undefined?

| Undefined                          | Null                    |
| ---------------------------------- | ----------------------- |
| Variable declared but not assigned | Intentional empty value |
| Default value by JavaScript        | Assigned by developer   |

Example:

```javascript
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## 5️⃣ Output

```javascript
let x;
console.log(typeof x);
```

Output:

```
undefined
```

Because `x` is declared but **not assigned any value**.

---

## 6️⃣ Output

```javascript
let x = null;
console.log(typeof x);
```

Output:

```
object
```

This is a **JavaScript bug from old versions**, but it still exists.

---

## 7️⃣ What is the typeof operator?

`typeof` is used to **check the data type of a variable**.

Example:

```javascript
let name = "Prakash";

console.log(typeof name);
```

Output:

```
string
```

---

## 8️⃣ Output

```javascript
console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof true);
```

Output:

```
string
number
boolean
```

---

## 9️⃣ Difference between Array and Object

| Array                 | Object                 |
| --------------------- | ---------------------- |
| Stores list of values | Stores key-value pairs |
| Uses index            | Uses property name     |

Example:

Array:

```javascript
let numbers = [10, 20, 30];
```

Object:

```javascript
let user = {
  name: "Prakash",
  age: 25,
};
```

---

## 🔟 Output

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output:

```
10
20
```

Because primitive values are **copied by value**.

---

## 1️⃣1️⃣ Output

```javascript
let obj1 = { name: "Prakash" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);
```

Output:

```
Rahul
```

Because objects are **stored by reference**, both variables point to the **same object**.

---

## 1️⃣2️⃣ Is Array primitive or non-primitive?

Array is a **non-primitive (reference) data type**.

Example:

```javascript
let arr = [1, 2, 3];
```

---

## 1️⃣3️⃣ What is BigInt?

`BigInt` is used to store **very large numbers** beyond the normal number limit.

Example:

```javascript
let big = 123456789012345678901234567890n;
```

The **`n`** at the end indicates BigInt.

---

## 1️⃣4️⃣ What is Symbol?

`Symbol` is a **unique identifier** used mostly for object properties.

Example:

```javascript
let id = Symbol("id");
```

Each Symbol value is **unique**.

---

## 1️⃣5️⃣ Output

```javascript
console.log(typeof []);
```

Output:

```
object
```

Because arrays are internally **objects in JavaScript**.
