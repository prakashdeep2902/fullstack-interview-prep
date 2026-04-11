# 2️⃣ `Debounce-Throttle-EventDelegation.md`

```markdown
# Debouncing, Throttling and Event Delegation

These concepts are used to **optimize event handling and improve performance in JavaScript applications.**

---

# 1. Debouncing

## Definition

Debouncing ensures that a function **runs only after a certain period of inactivity**.

If the event keeps firing, the timer **resets**.

---

## Example Use Cases

- Search input API calls
- Window resize
- Autocomplete fields

---

## Example Problem

User types in search box:
```

p
pr
pra
prak
praka
prakash

````

Without debouncing → **6 API calls**

With debouncing → **1 API call**

---

## Debounce Implementation

```javascript
function debounce(func, delay) {

 let timer;

 return function (...args) {

   clearTimeout(timer);

   timer = setTimeout(() => {
     func.apply(this, args);
   }, delay);

 };

}
````

---

## Example Usage

```javascript
function searchData(e) {
  console.log("Searching:", e.target.value);
}

const debouncedSearch = debounce(searchData, 500);

document.getElementById("search").addEventListener("input", debouncedSearch);
```

---

# 2. Throttling

## Definition

Throttling ensures a function **runs only once within a fixed time interval**, even if events trigger multiple times.

---

## Use Cases

- Scroll events
- Mouse movement
- Infinite scrolling
- Game controls

---

## Throttle Implementation

```javascript
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;

      func.apply(this, args);
    }
  };
}
```

---

## Example Usage

```javascript
function handleScroll() {
  console.log("Scroll event");
}

const throttledScroll = throttle(handleScroll, 300);

window.addEventListener("scroll", throttledScroll);
```

---

# Debounce vs Throttle

| Feature   | Debounce         | Throttle           |
| --------- | ---------------- | ------------------ |
| Execution | After inactivity | At fixed intervals |
| Best For  | Search input     | Scroll events      |
| Mechanism | setTimeout reset | Timestamp control  |

---

# 3. Event Delegation

## Definition

Event delegation is a technique where **a parent element handles events for its child elements using event bubbling**.

Instead of adding event listeners to many children, we add **one listener to the parent**.

---

# Why Event Delegation?

Without delegation:

100 elements → **100 event listeners**

With delegation:

100 elements → **1 event listener**

Better performance.

---

# Example HTML

```html
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>
```

---

# JavaScript

```javascript
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
```

---

# Why It Works

Because of **event bubbling**.

Event flow:

```
LI → UL → BODY → HTML → DOCUMENT
```

The parent (`UL`) captures the event.

---

# Hard Example (Dynamic List)

## HTML

```html
<ul id="todo"></ul>

<button id="add">Add Task</button>
```

---

## JavaScript

```javascript
const list = document.getElementById("todo");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = "New Task";

  list.appendChild(li);
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
```

---

# Advantages of Event Delegation

- Fewer event listeners
- Better performance
- Works for dynamic elements
- Cleaner code

---

# Key Concepts

| Concept             | Meaning                            |
| ------------------- | ---------------------------------- |
| Event Bubbling      | Event travels from child to parent |
| event.target        | Element that triggered event       |
| event.currentTarget | Element that owns the listener     |

---

# Interview Questions

### What is debouncing?

Debouncing delays function execution until after a period of inactivity.

### What is throttling?

Throttling limits how often a function can execute within a given time.

### What is event delegation?

A technique where a parent element handles events for its child elements using event bubbling.

---

````

---

✅ **Tip for your GitHub repo**

Add a `README.md` like this:

```markdown
# JavaScript Core Concepts Notes

This repository contains notes on important JavaScript concepts.

Topics covered:

- DOM Manipulation
- Debouncing
- Throttling
- Event Delegation
````

---

If you want, I can also give you **3 more MD notes that look very strong on GitHub for recruiters**:

- `JavaScript-Closures.md`
- `JavaScript-Event-Loop.md`
- `Call-Apply-Bind.md`
