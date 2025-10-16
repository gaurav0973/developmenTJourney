
## DOM Manipulation Practice — CRUD Tasks

A small collection of hands-on tasks to learn modern DOM manipulation methods: creating, inserting, moving and removing elements using
`document.createElement()`, `.append()`, `.prepend()`, `.after()`, `.before()`, and `.remove()`.

---

## Contents

- Overview
- Tasks (1 → 6)
- Methods covered
- Best practices
- How to use

---


## Tasks

### Task 1 — Basic creation & appending

HTML starter:

```html
<div id="container"></div>
```

Goal:

- Create a new `<p>` element with text `Hello World` and append it to `#container`.
- Create a `<span>` with text ` - Welcome!` and append it to the same container.

Methods to practice: `document.createElement()`, `.append()`

---

### Task 2 — Prepending practice

HTML starter:

```html
<ul id="shopping-list">
  <li>Milk</li>
  <li>Bread</li>
</ul>
```

Goal:

- Create a new `<li>` with text `Eggs` and prepend it so it becomes the first item.
- Create another `<li>` with text `Butter` and prepend it as well.

Methods to practice: `document.createElement()`, `.prepend()`

---

### Task 3 — After / Before insertion

HTML starter:

```html
<div class="items">
  <div class="item" id="first">First Item</div>
  <div class="item" id="third">Third Item</div>
</div>
```

Goal:

- Create a new `<div class="item">Second Item</div>` and insert it AFTER the `#first` element.
- Create another `<div class="item">Fourth Item</div>` and insert it AFTER the `#third` element.

Methods to practice: `document.createElement()`, `.after()`, `.before()` (if needed)

---

### Task 4 — Multiple appends at once

HTML starter:

```html
<div id="gallery"></div>
```

Goal:

- Create three `<img>` elements (use placeholder `src="https://picsum.photos/100"`) and append all three with a single `.append()` call.
- Add an `<h3>` title before the images using `.prepend()` on the gallery container.

Methods to practice: `document.createElement()`, `.append()`, `.prepend()`

---

### Task 5 — Remove & reorder

HTML starter:

```html
<div class="tasks">
  <div class="task">Task 1 ✅</div>
  <div class="task" id="remove-me">Task 2 ❌</div>
  <div class="task">Task 3 ✅</div>
</div>
```

Goal:

- Remove the element with `id="remove-me"`.
- Create a new task `Task 4 ✅` and insert it before the last task.
- Remove the first task.

Methods to practice: `.remove()`, `.before()`, `document.createElement()`

---

### Task 6 — Small CRUD example with events

HTML starter:

```html
<div id="friend-list">
  <div class="friend">Alice</div>
</div>
<button id="add-btn">Add Friend</button>
```

Goal:

- When the `#add-btn` is clicked, add a new friend `Bob` to the list.
- Make each friend removable when clicked (attach an event listener that calls `.remove()`).
- Demonstrate `.before()` and `.after()` by inserting `Charlie` before `Alice` and `Diana` after `Bob`.

Methods to practice: All methods above + event listeners

---

## Modern DOM methods covered

- `document.createElement()` — create new elements
- `.append(...nodes)` — add one or more nodes to the end
- `.prepend(...nodes)` — add nodes to the beginning
- `.after(...nodes)` / `.before(...nodes)` — insert relative to an element
- `.remove()` — remove an element from the DOM
- Event methods: `addEventListener()` for interactions

## Best practices

- Prefer passing multiple nodes to `.append()` / `.prepend()` in a single call instead of calling them repeatedly.
- Always set attributes and text content before inserting elements into the DOM when possible (minor performance win).
- Remember void elements (e.g. `<img>`, `<br>`, `<input>`) cannot have child nodes.
- Use event delegation if a list will grow dynamically and you want fewer listeners.

## How to use

1. Open the HTML file for each task in a browser (or use a simple static server).
2. Add your JavaScript either inline in a `<script>` block in the HTML or in a separate `.js` file and include it.
3. Use the browser console to test and inspect DOM changes.

Quick example (Task 1):

```js
const p = document.createElement("p");
p.textContent = "Hello World";
const span = document.createElement("span");
span.textContent = " - Welcome!";
const container = document.getElementById("container");
container.append(p, span);
```

## Notes

- These exercises are intentionally small — focus on using the native DOM API without libraries.
- Once comfortable, try combining operations and adding persistence (localStorage) or more complex event flows.

---

_Created for DOM practice — open the files in `04_DOM/02_CRUD/` and implement the JS to complete each task._
