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
