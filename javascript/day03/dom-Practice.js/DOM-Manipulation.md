Below are **two Markdown (`.md`) files** you can directly place in your GitHub repo.
Example repo structure:

```
javascript-notes/
│
├── DOM-Manipulation.md
└── Debounce-Throttle-EventDelegation.md
```

---

# 1️⃣ `DOM-Manipulation.md`

````markdown
# DOM Manipulation Notes (JavaScript)

## 1. What is DOM?

DOM stands for **Document Object Model**.

When a browser loads an HTML page, it converts the HTML into a **tree structure of objects** that JavaScript can interact with.

Example HTML:

```html
<h1 id="title">Hello</h1>
<button id="btn">Click</button>
```
````

DOM Tree:

Document
└── html
└── body
├── h1
└── button

JavaScript can:

- Read elements
- Modify content
- Change styles
- Listen to events
- Add or remove elements

---

# 2. Selecting Elements

## getElementById

Selects an element using its **id**.

```javascript
const title = document.getElementById("title");
```

---

## querySelector

Selects elements using **CSS selectors**.

```javascript
document.querySelector("#title"); // by id
document.querySelector(".class"); // by class
document.querySelector("p"); // by tag
```

---

## querySelectorAll

Returns **all matching elements**.

```javascript
const items = document.querySelectorAll("li");
```

---

# 3. Changing HTML Content

## textContent

Changes only text.

```javascript
title.textContent = "Hello World";
```

---

## innerHTML

Allows inserting HTML.

```javascript
title.innerHTML = "<span>Hello</span>";
```

---

# 4. Changing CSS with JavaScript

```javascript
title.style.color = "red";
title.style.fontSize = "30px";
```

---

# 5. DOM Events

Events are **user actions**.

Examples:

- click
- input
- mouseover
- keydown
- submit

---

# addEventListener

```javascript
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

---

# 6. Creating Elements Dynamically

```javascript
const li = document.createElement("li");
li.textContent = "New Item";

document.querySelector("ul").appendChild(li);
```

---

# 7. Removing Elements

```javascript
element.remove();
```

---

# 8. DOM Traversing

```javascript
parentElement;
children;
nextElementSibling;
previousElementSibling;
```

Example:

```javascript
const parent = element.parentElement;
```

---

# HARD EXAMPLE: Todo List (DOM Manipulation)

## HTML

```html
<input type="text" id="taskInput" />
<button id="addTask">Add</button>

<ul id="taskList"></ul>
```

---

## JavaScript

```javascript
const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");

button.addEventListener("click", function () {
  const task = input.value;

  if (task === "") return;

  const li = document.createElement("li");

  li.textContent = task;

  li.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
});
```

---

# How This Works

1. User types a task
2. Clicks **Add**
3. JavaScript creates `<li>`
4. Task is appended to `<ul>`
5. Clicking a task removes it

---

# Key DOM Methods Summary

| Method           | Purpose                       |
| ---------------- | ----------------------------- |
| getElementById   | Select element by ID          |
| querySelector    | Select first matching element |
| querySelectorAll | Select all elements           |
| createElement    | Create new element            |
| appendChild      | Add element to DOM            |
| remove           | Remove element                |

---

# Interview Questions

### What is the DOM?

The DOM is a programming interface that represents HTML as a tree structure allowing JavaScript to manipulate web page content dynamically.

### Difference between innerHTML and textContent

| innerHTML       | textContent |
| --------------- | ----------- |
| Parses HTML     | Only text   |
| Slower          | Faster      |
| Can insert tags | No HTML     |

---

```

---


```
