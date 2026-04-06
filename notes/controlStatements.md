# 1️⃣ What are control statements in JavaScript?

Control statements are used to **control the flow of execution of a program based on conditions**.

They allow the program to make **decisions or repeat actions**.

Examples:

- `if`
- `if...else`
- `switch`
- loops (`for`, `while`)

---

# 2️⃣ What is the purpose of the `if` statement?

The `if` statement executes a block of code **only when the condition is true**.

Example:

```javascript
let age = 20;

if (age > 18) {
  console.log("Adult");
}
```

---

# 3️⃣ Difference between `if`, `if...else`, and `else if`

| Statement   | Use                                 |
| ----------- | ----------------------------------- |
| `if`        | Execute code when condition is true |
| `if...else` | Choose between two conditions       |
| `else if`   | Check multiple conditions           |

Example:

```javascript
let score = 80;

if (score > 90) {
  console.log("A");
} else if (score > 70) {
  console.log("B");
} else {
  console.log("C");
}
```

---

# 4️⃣ Output

```javascript
let age = 20;

if (age > 18) {
  console.log("Adult");
}
```

Output

```
Adult
```

Because **20 > 18 is true**.

---

# 5️⃣ Output

```javascript
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Output

```
Minor
```

Because **16 is less than 18**.

---

# 6️⃣ Output

```javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

Output

```
Grade B
```

Because **85 >= 80**.

---

# 7️⃣ What is the `switch` statement?

`switch` is used to **execute different code blocks based on different values**.

Example:

```javascript
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
}
```

---

# 8️⃣ Output

```javascript
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

Output

```
Monday
```

Because **day = 1 matches case 1**.

---

# 9️⃣ What is a loop in JavaScript?

A **loop** is used to **repeat a block of code multiple times** until a condition becomes false.

Examples:

- `for`
- `while`
- `do...while`

---

# 🔟 Output

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

Output

```
1
2
3
```

---

# 1️⃣1️⃣ Output

```javascript
let i = 1;

while (i <= 2) {
  console.log(i);
  i++;
}
```

Output

```
1
2
```

---

# 1️⃣2️⃣ What happens if `break` is removed from switch?

If `break` is removed, the program will **continue executing the next cases** even if they don't match.

Example:

```javascript
let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}
```

Output

```
One
Two
```

This is called **fall-through behavior**.

---

# 1️⃣3️⃣ Output

```javascript
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    continue;
  }
  console.log(i);
}
```

Output

```
0
2
```

Because `continue` **skips the current iteration** when `i = 1`.

---

# 1️⃣4️⃣ Difference between `break` and `continue`

| break                     | continue                |
| ------------------------- | ----------------------- |
| Stops the loop completely | Skips current iteration |
| Exits the loop            | Moves to next iteration |

Example:

```javascript
break → stop loop
continue → skip one iteration
```

---

# 1️⃣5️⃣ Which loop is best when iterations are known?

The **for loop** is best when the **number of iterations is known**.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---
