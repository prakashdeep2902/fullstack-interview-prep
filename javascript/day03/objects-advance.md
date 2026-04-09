# Advanced JavaScript Objects Notes

## 1. Object.keys()

Returns an array containing all the **keys (property names)** of an object.

### Hard Example

```javascript
const orders = {
  order1: { price: 200, status: "delivered" },
  order2: { price: 500, status: "pending" },
  order3: { price: 150, status: "delivered" },
};

const deliveredOrders = Object.keys(orders).filter(
  (key) => orders[key].status === "delivered",
);

console.log(deliveredOrders);
```

Output

```
["order1", "order3"]
```

---

## 2. Object.values()

Returns an array of **all values** of an object.

### Hard Example

```javascript
const expenses = {
  food: 500,
  travel: 1200,
  shopping: 800,
  bills: 1500,
};

const totalExpense = Object.values(expenses).reduce(
  (total, value) => total + value,
  0,
);

console.log(totalExpense);
```

Output

```
4000
```

---

## 3. Object.entries()

Returns an array of **[key, value] pairs**.

### Hard Example

```javascript
const products = {
  laptop: 80000,
  phone: 30000,
  tablet: 20000,
};

const discounted = Object.entries(products).map(([key, value]) => {
  return [key, value * 0.9];
});

console.log(Object.fromEntries(discounted));
```

Output

```
{ laptop: 72000, phone: 27000, tablet: 18000 }
```

---

## 4. Spread Operator (...)

Used to **copy or merge objects**.

### Hard Example

```javascript
const defaultConfig = {
  theme: "light",
  language: "English",
  notifications: true,
};

const userConfig = {
  theme: "dark",
};

const finalConfig = {
  ...defaultConfig,
  ...userConfig,
};

console.log(finalConfig);
```

Output

```
{ theme: "dark", language: "English", notifications: true }
```

---

## 5. Rest Operator (...)

Collects **remaining properties into an object**.

### Hard Example

```javascript
function sanitizeUser(user) {
  const { password, token, ...safeData } = user;
  return safeData;
}

const user = {
  name: "Prakash",
  email: "prakash@gmail.com",
  password: "12345",
  token: "abc123",
};

console.log(sanitizeUser(user));
```

Output

```
{ name: "Prakash", email: "prakash@gmail.com" }
```

---

## 6. Object.assign()

Copies properties from **source objects to a target object**.

### Hard Example

```javascript
const defaults = { role: "user", active: true };
const newUser = { name: "Prakash" };

const result = Object.assign({}, defaults, newUser);

console.log(result);
```

Output

```
{ role: "user", active: true, name: "Prakash" }
```

---

## 7. Object.freeze()

Prevents **adding, deleting, or modifying properties**.

### Hard Example

```javascript
const settings = {
  apiUrl: "https://api.myapp.com",
  timeout: 5000,
};

Object.freeze(settings);

settings.timeout = 10000;
settings.newKey = "test";

console.log(settings);
```

Output

```
{ apiUrl: "https://api.myapp.com", timeout: 5000 }
```

---

## 8. Object.seal()

Prevents **adding or deleting properties**, but allows modifying existing values.

### Hard Example

```javascript
const account = {
  username: "prakash",
  balance: 1000,
};

Object.seal(account);

account.balance = 2000;
account.currency = "INR";

console.log(account);
```

Output

```
{ username: "prakash", balance: 2000 }
```

---

## 9. Shallow Copy vs Deep Copy

### Shallow Copy

Only the **first level is copied**.

```javascript
const user = {
  name: "Prakash",
  address: { city: "Delhi" },
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city);
```

Output

```
Mumbai
```

---

### Deep Copy

Copies **all nested objects completely**.

```javascript
const user = {
  name: "Prakash",
  address: { city: "Delhi" },
};

const deepCopy = structuredClone(user);

deepCopy.address.city = "Mumbai";

console.log(user.address.city);
```

Output

```
Delhi
```

---

## 10. Object.fromEntries()

Converts **array of key-value pairs into an object**.

### Hard Example

```javascript
const user = {
  name: "Prakash",
  age: 26,
  password: "secret",
};

const filtered = Object.fromEntries(
  Object.entries(user).filter(([key]) => key !== "password"),
);

console.log(filtered);
```

Output

```
{ name: "Prakash", age: 26 }
```

---

## 11. hasOwnProperty()

Checks whether the object **directly contains a property**.

### Hard Example

```javascript
const product = {
  name: "Laptop",
  price: 80000,
};

for (let key in product) {
  if (product.hasOwnProperty(key)) {
    console.log(key, product[key]);
  }
}
```

Output

```
name Laptop
price 80000
```

---

## 12. Object.create()

Creates a new object using another object as its **prototype**.

### Hard Example

```javascript
const animal = {
  speak() {
    return "Animal sound";
  },
};

const dog = Object.create(animal);
dog.bark = () => "Woof";

console.log(dog.speak());
console.log(dog.bark());
```

Output

```
Animal sound
Woof
```

---

## 13. Object.defineProperty()

Allows defining a property with **custom behavior**.

### Hard Example

```javascript
const product = {};

Object.defineProperty(product, "price", {
  value: 1000,
  writable: false,
  enumerable: true,
});

product.price = 2000;

console.log(product.price);
```

Output

```
1000
```

---

## 14. this in Objects

`this` refers to the **object calling the method**.

### Hard Example

```javascript
const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
};

console.log(bankAccount.deposit(500));
```

Output

```
1500
```

---

## 15. Prototype Chain

Objects can inherit properties from other objects.

### Hard Example

```javascript
const vehicle = {
  start() {
    return "Vehicle started";
  },
};

const car = Object.create(vehicle);
car.brand = "Toyota";

console.log(car.start());
```

Output

```
Vehicle started
```

---

## 16. Map vs Object

### Hard Example

```javascript
const map = new Map();

map.set({ id: 1 }, "User1");
map.set({ id: 2 }, "User2");

console.log(map.size);
```

Output

```
2
```

Objects cannot reliably use **objects as keys**, but `Map` can.

---

## 17. Best Deep Clone Method

### Modern Solution

```javascript
const user = {
  name: "Prakash",
  skills: ["JS", "React"],
  address: { city: "Delhi" },
};

const clone = structuredClone(user);

clone.address.city = "Mumbai";

console.log(user.address.city);
```

Output

```
Delhi
```

---
