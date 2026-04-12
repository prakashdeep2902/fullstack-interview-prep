Perfect 👍 — here are your **clean, interview-ready notes** for:

👉 Classes
👉 Constructor
👉 Inheritance
👉 + Tricky Examples (very important)

You can revise this anytime before interviews.

---

# 🧠 1. CLASS (Core Concept)

👉 A class is a **blueprint for creating objects**
👉 Internally, it uses **prototypes**

---

## ✅ Basic Syntax

```js
class Person {
  sayHello() {
    console.log("Hello");
  }
}
```

---

## 🧠 Key Points

- Methods go into `Person.prototype`
- Classes are **NOT hoisted**
- Classes run in **strict mode**

---

## 🔥 Tricky Example

```js
const p = new Person();

class Person {}
```

👉 ❌ **ReferenceError**

👉 Because class is not hoisted

---

---

# ⚙️ 2. CONSTRUCTOR

👉 Special method that runs when object is created

---

## ✅ Example

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

---

## 🧠 Key Points

- Only one constructor allowed
- Used for initializing values
- Optional (JS creates default if not provided)

---

## 🔥 Tricky Example

```js
class A {
  constructor() {
    this.x = 10;
    return { x: 20 };
  }
}

const obj = new A();
console.log(obj.x);
```

👉 ✅ Output: `20`

👉 Because returned object replaces `this`

---

---

# 🧬 3. `this` BEHAVIOR (VERY IMPORTANT)

---

## 🔥 Tricky Example

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    return this.name;
  }
}

const p1 = new Person("Prakash");
const fn = p1.say;

console.log(fn());
```

👉 ❌ Output: `undefined`

👉 Because `this` is lost

---

## ✅ Fix

```js
const fn = p1.say.bind(p1);
```

---

---

# 🧬 4. STATIC METHODS

---

## ✅ Example

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
```

---

## 🔥 Tricky Example

```js
const m = new MathUtil();
m.add(2, 3);
```

👉 ❌ TypeError

👉 Because static methods belong to class, not object

---

## ✅ Correct

```js
MathUtil.add(2, 3);
```

---

---

# 🧬 5. INHERITANCE

👉 Using `extends`

---

## ✅ Example

```js
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Bark");
  }
}
```

---

## 🧠 Chain

```txt
dog → Dog.prototype → Animal.prototype → Object.prototype
```

---

## 🔥 Tricky Example (VERY COMMON)

```js
class Dog extends Animal {
  constructor(name) {
    this.name = name;
    super(name);
  }
}
```

👉 ❌ Error:

```txt
Must call super constructor before using 'this'
```

---

## ✅ Fix

```js
constructor(name) {
  super(name);
  this.name = name;
}
```

---

---

# ⚡ 6. `super()` (Important Rule)

👉 Must be called in child constructor before using `this`

---

## 🔥 Tricky Example

```js
class A {
  constructor() {
    console.log("A");
  }
}

class B extends A {
  constructor() {
    super();
    console.log("B");
  }
}

new B();
```

👉 ✅ Output:

```txt
A
B
```

---

---

# 🧠 7. METHOD SHARING (Prototype)

---

## 🔥 Tricky Example

```js
class A {
  say() {
    return "hello";
  }
}

const a1 = new A();
const a2 = new A();

console.log(a1.say === a2.say);
```

👉 ✅ Output: `true`

👉 Because methods are shared via prototype

---

---

# 🚨 8. CLASS IS NOT HOISTED

---

## 🔥 Example

```js
new Test();

class Test {}
```

👉 ❌ ReferenceError

---

---

# 🧬 9. PRIVATE FIELDS

---

## ✅ Example

```js
class A {
  #x = 10;

  getX() {
    return this.#x;
  }
}
```

---

## 🔥 Tricky Example

```js
const a = new A();
console.log(a.#x);
```

👉 ❌ SyntaxError

---

---

# 🧠 10. CLASS = PROTOTYPE (IMPORTANT)

---

## Equivalent Code

```js
class Person {
  sayHi() {}
}
```

👇 Same as:

```js
function Person() {}

Person.prototype.sayHi = function () {};
```

---

---

# 🔥 FINAL QUICK REVISION

| Concept     | Key Idea                       |
| ----------- | ------------------------------ |
| Class       | Blueprint                      |
| Constructor | Initializes object             |
| this        | Refers to object (can be lost) |
| static      | Class-level method             |
| extends     | Inheritance                    |
| super       | Call parent                    |
| prototype   | Method storage                 |
| hoisting    | ❌ Not supported               |

---

# 🚀 What You Should Do Now

👉 Practice:

1. Write class → convert to prototype
2. Break `this` intentionally and fix it
3. Play with inheritance chains

---
