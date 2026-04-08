# 1. Arrays in JavaScript

An **array** is a special variable used to store **multiple values in a single variable**.

Example:

```javascript
let fruits = ["apple", "banana", "mango"];
```

Instead of writing:

```javascript
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";
```

we store them in **one array**.

### Key Points

- Arrays store **multiple values**
- Values are stored using **index**
- Index always starts from **0**

Example:

```javascript
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
```

---

# 2. Creating Arrays

There are **2 common ways**.

## Method 1 (Most common)

```javascript
let numbers = [1, 2, 3, 4];
```

## Method 2

```javascript
let numbers = new Array(1, 2, 3, 4);
```

Interview tip:
**Use [] method mostly**

---

### Easy Example

```javascript
let colors = ["red", "blue", "green"];
console.log(colors);
```

Output

```
["red","blue","green"]
```

---

### Medium Example

```javascript
let students = ["Rahul", "Aman", "Priya"];

console.log(students[1]);
```

Output

```
Aman
```

---

### Hard Example

```javascript
let data = ["Prakash", 25, true, { city: "Delhi" }];

console.log(data[3].city);
```

Output

```
Delhi
```

Arrays can contain **different data types**.

---

# 3. Common Array Methods

Some important ones interviewers ask:

```
push()
pop()
shift()
unshift()
length
```

Example:

```javascript
let arr = [1, 2, 3];

arr.push(4); // add end
arr.pop(); // remove end
arr.shift(); // remove first
arr.unshift(0); // add first
```

---

# 4. forEach()

Used to **loop through array elements**.

Syntax

```javascript
array.forEach((item, index) => {});
```

---

### Easy Example

```javascript
let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});
```

Output

```
1
2
3
```

---

### Medium Example

```javascript
let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num * 2);
});
```

Output

```
2
4
6
```

---

### Hard Example

```javascript
let users = [
  { name: "Rahul", age: 25 },
  { name: "Aman", age: 30 },
];

users.forEach((user) => {
  console.log(user.name);
});
```

Output

```
Rahul
Aman
```

---

# 5. map()

Creates a **new array by transforming each element**.

Important:

- Returns **new array**
- Does not change original array

Syntax

```javascript
array.map((item) => {});
```

---

### Easy Example

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => num * 2);

console.log(result);
```

Output

```
[2,4,6]
```

---

### Medium Example

```javascript
let prices = [100, 200, 300];

let gstPrices = prices.map((price) => price + 18);

console.log(gstPrices);
```

Output

```
[118,218,318]
```

---

### Hard Example

```javascript
let users = [{ name: "Rahul" }, { name: "Aman" }];

let names = users.map((user) => user.name);

console.log(names);
```

Output

```
["Rahul","Aman"]
```

---

# 6. filter()

Used to **filter elements based on condition**.

Returns **new array**.

Syntax

```javascript
array.filter((item) => condition);
```

---

### Easy Example

```javascript
let numbers = [1, 2, 3, 4];

let even = numbers.filter((num) => num % 2 === 0);

console.log(even);
```

Output

```
[2,4]
```

---

### Medium Example

```javascript
let ages = [15, 18, 20, 12];

let adults = ages.filter((age) => age >= 18);

console.log(adults);
```

Output

```
[18,20]
```

---

### Hard Example

```javascript
let users = [
  { name: "Rahul", active: true },
  { name: "Aman", active: false },
  { name: "Priya", active: true },
];

let activeUsers = users.filter((user) => user.active);

console.log(activeUsers);
```

Output

```
Rahul, Priya objects
```

---

# 7. reduce()

Used to **convert array into single value**.

Example uses:

- sum
- product
- total price
- grouping

Syntax

```javascript
array.reduce((accumulator, current) => {}, initialValue);
```

---

### Easy Example

Sum numbers

```javascript
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
```

Output

```
10
```

---

### Medium Example

Find total price

```javascript
let prices = [100, 200, 300];

let total = prices.reduce((acc, price) => acc + price, 0);

console.log(total);
```

Output

```
600
```

---

### Hard Example

```javascript
let cart = [
  { item: "Laptop", price: 50000 },
  { item: "Phone", price: 20000 },
];

let total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
```

Output

```
70000
```

---

# 8. find()

Returns **first element that matches condition**.

---

### Easy Example

```javascript
let numbers = [1, 3, 5, 6];

let even = numbers.find((num) => num % 2 === 0);

console.log(even);
```

Output

```
6
```

---

### Medium Example

```javascript
let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Aman" },
];

let user = users.find((u) => u.id === 2);

console.log(user);
```

Output

```
{name:"Aman"}
```

---

### Hard Example

```javascript
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 },
];

let expensive = products.find((p) => p.price > 25000);

console.log(expensive);
```

Output

```
Laptop object
```

---

# 9. some()

Checks if **at least one element passes condition**.

Returns **true/false**

---

### Easy Example

```javascript
let numbers = [1, 3, 5, 6];

let hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven);
```

Output

```
true
```

---

### Medium Example

```javascript
let ages = [15, 17, 19];

let adult = ages.some((age) => age >= 18);

console.log(adult);
```

Output

```
true
```

---

### Hard Example

```javascript
let users = [
  { name: "Rahul", admin: false },
  { name: "Aman", admin: true },
];

let hasAdmin = users.some((user) => user.admin);

console.log(hasAdmin);
```

---

# 10. every()

Checks if **all elements satisfy condition**

Returns **true/false**

---

### Easy Example

```javascript
let numbers = [2, 4, 6];

let allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven);
```

Output

```
true
```

---

### Medium Example

```javascript
let ages = [20, 25, 30];

let adults = ages.every((age) => age >= 18);

console.log(adults);
```

---

### Hard Example

```javascript
let products = [{ price: 100 }, { price: 200 }, { price: 300 }];

let valid = products.every((p) => p.price > 0);

console.log(valid);
```

---

# Important Interview Difference

| Method  | Returns        | Purpose     |
| ------- | -------------- | ----------- |
| forEach | nothing        | loop        |
| map     | new array      | transform   |
| filter  | new array      | filter      |
| reduce  | single value   | aggregate   |
| find    | single element | first match |
| some    | boolean        | any match   |
| every   | boolean        | all match   |

---

# Real Interview Question Example

Example:

```javascript
let numbers = [1,2,3,4,5]

Find square of even numbers
```

Solution

```javascript
let result = numbers.filter((num) => num % 2 === 0).map((num) => num * num);

console.log(result);
```

Output

```
[4,16]
```

Interviewers **LOVE chaining like this**.

---

# Your Practice (Important)

Try solving these:

### Question 1

Double all numbers

```
[2,4,6]
```

Expected

```
[4,8,12]
```

---

### Question 2

Find numbers greater than 10

```
[5,12,8,20]
```

---

### Question 3

Find total price

```
[100,200,300]
```
