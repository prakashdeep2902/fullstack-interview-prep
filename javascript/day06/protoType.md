# 🔥 1. `__proto__` vs `prototype` (MOST CONFUSING)

👉 First, the golden rule:

- `prototype` → belongs to **functions**
- `__proto__` → belongs to **objects**

---

## 🧪 Example

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Prakash");
```

---

## 🔍 What is `prototype`?

```js
console.log(Person.prototype);
```

👉 This is an **object** automatically created by JS.

```js
Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};
```

---

## 🔍 What is `__proto__`?

```js
console.log(p1.__proto__);
```

👉 This points to:

```js
Person.prototype;
```

---

## 🧠 KEY RELATION (VERY IMPORTANT)

```js
p1.__proto__ === Person.prototype; // true
```

---

## 📌 Simple Diagram

```
Person (function)
   ↓
Person.prototype  ←── p1.__proto__
   ↓
Object.prototype
   ↓
null
```

---

## ⚡ In One Line

👉 `prototype` = blueprint for objects
👉 `__proto__` = link to that blueprint

---

# 🚀 2. `Object.create()` (POWERFUL)

👉 This lets you create an object with a specific prototype.

---

## 🧪 Example

```js
const animal = {
  speak() {
    console.log("Animal speaks");
  },
};

const dog = Object.create(animal);

dog.speak();
```

👉 Output:

```
Animal speaks
```

---

## 🔍 What’s happening?

```
dog → animal → Object.prototype → null
```

👉 `dog` doesn’t have `speak`, so it borrows from `animal`

---

## 🎯 Add Own Properties

```js
dog.name = "Tommy";

console.log(dog.name); // Tommy
```

---

## ⚠️ Important

```js
console.log(dog.__proto__ === animal); // true
```

---

## 💡 Why use `Object.create()`?

- Fine control over inheritance
- Used in advanced JS patterns
- Cleaner than constructor functions sometimes

---

# 🎯 3. Prototype Interview Questions

Here are the **most asked** ones 👇

---

## ❓ Q1: Difference between `__proto__` and `prototype`?

👉 Answer:

- `prototype` is a property of functions
- `__proto__` is a property of objects
- Both point to the same object in inheritance

---

## ❓ Q2: What is Prototype Chain?

👉 When JS looks for a property:

```
object → prototype → parent prototype → null
```

---

## ❓ Q3: What is inheritance in JS?

👉 Achieved using prototype

```js
Child.__proto__ = Parent;
```

(or better using `Object.create`)

---

## ❓ Q4: Output?

```js
function A() {}
A.prototype.x = 10;

const obj = new A();

console.log(obj.x);
```

👉 Answer: `10`

---

## ❓ Q5: What happens here?

```js
const obj = {};
console.log(obj.toString());
```

👉 Comes from:

```
Object.prototype
```

---

## ❓ Q6: Is `__proto__` recommended?

👉 ❌ No (older way)
👉 ✅ Use:

```js
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, proto);
```

---

## ❓ Q7: How does `new` keyword work?

👉 Behind the scenes:

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Prakash");
```

JS does:

1. Creates empty object `{}`
2. Sets `__proto__` to `Person.prototype`
3. Calls function
4. Returns object

---

# 🧠 FINAL SUMMARY

| Concept         | Meaning              |
| --------------- | -------------------- |
| `prototype`     | Property of function |
| `__proto__`     | Property of object   |
| Prototype Chain | Lookup system        |
| `Object.create` | Custom inheritance   |
