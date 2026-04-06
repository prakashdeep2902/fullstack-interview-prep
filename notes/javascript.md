# 1. What is a JavaScript Variable?

A **variable** is a **container used to store data** in a program.

It allows you to store values like numbers, strings, objects, etc., and use them later.

### Example

```javascript
let name = "Prakash";
let age = 25;
```

Here:

- `name` stores `"Prakash"`
- `age` stores `25`

So a **variable holds a value that can be used or changed later**.

---

# 2. Types of Variables in JavaScript

JavaScript has **3 ways to declare variables**.

| Keyword | Scope          | Can Reassign | Can Redeclare |
| ------- | -------------- | ------------ | ------------- |
| `var`   | Function scope | ✅ Yes       | ✅ Yes        |
| `let`   | Block scope    | ✅ Yes       | ❌ No         |
| `const` | Block scope    | ❌ No        | ❌ No         |

---

# 3. Example of Each Variable

### 1️⃣ var

```javascript
var city = "Delhi";
var city = "Mumbai"; // allowed
```

Problems:

- Can be redeclared
- Causes bugs sometimes

---

### 2️⃣ let

```javascript
let age = 25;
age = 26; // allowed
```

- Cannot redeclare
- Can update value

---

### 3️⃣ const

```javascript
const country = "India";
```

- Cannot redeclare
- Cannot change value

---

# 4. Variable Naming Rules

Valid:

```javascript
let userName;
let _name;
let $price;
let age1;
```

Invalid:

```javascript
let 1age ❌
let user-name ❌
let var ❌
```

Rules:

- Cannot start with number
- Cannot use keywords
- Use camelCase (recommended)

Example:

```javascript
let firstName = "Prakash";
```

---

# 5. Example Program

```javascript
let name = "Prakash";
let age = 25;
const country = "India";

console.log(name);
console.log(age);
console.log(country);
```

Output:

```
Prakash
25
India
```

---

# 6. Most Important Interview Questions

### 1️⃣ What is a variable in JavaScript?

**Answer:**

A variable is a container used to store data values that can be used and manipulated in a program.

Example:

```javascript
let name = "Prakash";
```

---

### 2️⃣ What is the difference between var, let, and const?

| var            | let              | const            |
| -------------- | ---------------- | ---------------- |
| Function scope | Block scope      | Block scope      |
| Can redeclare  | Cannot redeclare | Cannot redeclare |
| Can update     | Can update       | Cannot update    |

---

### 3️⃣ What is block scope?

Variables declared inside `{}` are accessible only inside that block.

Example:

```javascript
{
  let x = 10;
}
console.log(x); // Error
```

---

### 4️⃣ What happens if you use a variable without declaring?

```javascript
x = 10;
```

JavaScript creates a **global variable**, which is bad practice.

---

### 5️⃣ Can we change a const object?

Yes.

```javascript
const user = { name: "Prakash" };

user.name = "Rahul"; // allowed
```

But you cannot reassign:

```javascript
user = {}; // ❌ Error
```

---

# 7. Very Common Interview Trick Question

What will be the output?

```javascript
var a = 10;
var a = 20;

console.log(a);
```

Output:

```
20
```

Because `var` allows **re-declaration**.

---

# 8. Best Practice (Interview Answer)

Modern JavaScript best practice:

- Use **const by default**
- Use **let when value changes**
- Avoid **var**

Example:

```javascript
const name = "Prakash";
let age = 25;
```

---

# 9. Small Practice for You (Very Important)

Try writing this yourself in VS Code:

```javascript
let name = "Prakash";
let age = 25;
let city = "Delhi";

console.log(name);
console.log(age);
console.log(city);
```
