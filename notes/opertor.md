## 1️⃣ What are operators in JavaScript?

**Operators** are symbols used to **perform operations on variables or values**.

Example:

```javascript
let a = 10;
let b = 5;

let result = a + b;
```

Here `+` is the **addition operator**.

---

# 2️⃣ What are the different types of operators in JavaScript?

Main types:

1. **Arithmetic Operators** → `+ - * / %`
2. **Assignment Operators** → `= += -= *=`
3. **Comparison Operators** → `== === > <`
4. **Logical Operators** → `&& || !`
5. **Increment / Decrement** → `++ --`

---

# 3️⃣ Difference between `==` and `===`

| Operator | Meaning                     |
| -------- | --------------------------- |
| `==`     | Compares values only        |
| `===`    | Compares value **and type** |

Example:

```javascript
5 == "5"; // true
5 === "5"; // false
```

---

# 4️⃣ Output

```javascript
console.log(5 == "5");
```

Output

```
true
```

Because `==` converts `"5"` (string) to number.

---

# 5️⃣ Output

```javascript
console.log(5 === "5");
```

Output

```
false
```

Because `===` checks **value AND data type**.

---

# 6️⃣ Output

```javascript
let x = 10;
x += 5;

console.log(x);
```

Output

```
15
```

Because:

```
x += 5
```

means

```
x = x + 5
```

---

# 7️⃣ What is modulus operator `%`?

The **modulus operator** returns the **remainder after division**.

Example:

```javascript
10 % 3;
```

Because:

```
10 / 3 = 3 remainder 1
```

So output is **1**.

---

# 8️⃣ Output

```javascript
console.log(10 % 3);
```

Output

```
1
```

---

# 9️⃣ What are logical operators?

Logical operators are used to **combine conditions**.

| Operator | Meaning |     |     |
| -------- | ------- | --- | --- |
| `&&`     | AND     |     |     |
| `        |         | `   | OR  |
| `!`      | NOT     |     |     |

Example:

```javascript
let age = 25;

age > 18 && age < 30;
```

---

# 🔟 Output

```javascript
console.log(true && false);
```

Output

```
false
```

Because **AND (`&&`) requires both conditions true**.

---

# 1️⃣1️⃣ Output

```javascript
console.log(true || false);
```

Output

```
true
```

Because **OR (`||`) requires only one condition true**.

---

# 1️⃣2️⃣ Output

```javascript
console.log(!true);
```

Output

```
false
```

Because `!` **reverses the value**.

---

# 1️⃣3️⃣ Output

```javascript
let a = 5;
console.log(a++);
```

Output

```
5
```

Then value becomes:

```
a = 6
```

Because **post-increment returns value first, then increases**.

---

# 1️⃣4️⃣ Output

```javascript
let a = 5;
console.log(++a);
```

Output

```
6
```

Because **pre-increment increases value first**.

---

# 1️⃣5️⃣ Difference between `a++` and `++a`

| Operator | Behavior                          |
| -------- | --------------------------------- |
| `a++`    | Return value first, then increase |
| `++a`    | Increase first, then return value |

Example:

```javascript
let a = 5;

console.log(a++); // 5
console.log(a); // 6
```

```javascript
let b = 5;

console.log(++b); // 6
```
