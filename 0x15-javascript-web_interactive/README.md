# 0x15. JavaScript - Web Interactive

## Description
This project introduces foundational front-end web development concepts using modern vanilla JavaScript. It spans DOM (Document Object Model) manipulation, element selection, event handling with `addEventListener`, dynamic CSS class toggling with `classList`, modifying DOM node styles and text content, dynamically creating and inserting new HTML elements into the document tree, asynchronous data fetching via the native `fetch` API (`async/await`), graceful network error handling, execution lifecycle control using `DOMContentLoaded`, and state-driven DOM rendering without external libraries such as jQuery.

## Learning Objectives
- How to select HTML elements using `document.querySelector` and `document.querySelectorAll`
- Differences between ID, class, and tag name selectors
- How to modify element styles directly via the `style` object
- How to handle user interactions using `addEventListener` for click, keydown, and lifecycle events
- How to manipulate CSS classes using `classList.add()` and `classList.toggle()`
- How to update element text content safely using `textContent`
- How to dynamically create new DOM nodes using `document.createElement()` and insert them with `appendChild()`
- How to fetch remote data asynchronously using the native `fetch()` API and `async/await`
- How to gracefully handle failed requests using `response.ok` checks and `try/catch` blocks
- How to ensure scripts placed in the `<head>` tag execute safely after document parsing using `DOMContentLoaded`
- How to implement a single source of truth state array and re-render the UI deterministically
- Understanding how modern vanilla JavaScript fully eliminates the need for legacy libraries like jQuery

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- All files will be interpreted on any current, modern browser (Chrome, Firefox, Safari, Edge)
- All files must end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- You must use vanilla JavaScript only. Do not import jQuery or any other external library.
- You are not allowed to use `var` (`let` or `const` only)
- HTML should not reload for each action: DOM manipulation, update values, fetch data...
- Code style is compliant with `semistandard` (version 16.x.x / 17.x.x)

## Tasks

| File | Description |
| --- | --- |
| `0-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) using vanilla JavaScript. |
| `1-script.js` | Updates the text color of every `<p>` element on the page to blue (`#0000FF`) using `document.querySelectorAll` and iterating with `.forEach()`. |
| `2-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) when the user clicks on the tag `DIV#red_header` using `addEventListener`. |
| `3-script.js` | Adds the CSS class `red` to the `<header>` element when the user clicks on the tag `DIV#red_header` using `classList.add()`. |
| `4-script.js` | Toggles the class of the `<header>` element between `red` and `green` when the user clicks on the tag `DIV#toggle_header` using `classList.toggle()`. Ensures the element always has exactly one class and is never empty. |
| `5-script.js` | Adds a `<li>Item</li>` element to `UL.my_list` when the user clicks on the tag `DIV#add_item` using `document.createElement()` and `appendChild()`. |
| `6-script.js` | Updates the text of the `<header>` element to `New Header!!!` when the user clicks on `DIV#update_header` using the `textContent` property. |
| `7-script.js` | Fetches character `name` from `https://swapi-api.alx-tools.com/api/people/5/?format=json` and displays it in `DIV#character` using `fetch` with `async/await` and error handling. |
| `8-script.js` | Fetches and lists all movie titles from `https://swapi-api.alx-tools.com/api/films/?format=json` into `UL#list_movies` as `<li>` items using `fetch` and `async/await`. |
| `9-script.js` | Fetches hello translation from `https://hellosalut.stefanbohacek.dev/?lang=fr` and displays it in `DIV#hello`, wrapped in a `DOMContentLoaded` event listener for `<head>` loading. |
| `100-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) imported from the `<head>` tag using `DOMContentLoaded`. |
| `101-script.js` | Manages list items using a JavaScript array as single source of truth with a `render()` function, supporting add, remove (`pop`), and clear operations. |
| `102-script.js` | Fetches and displays language-specific greeting from `https://hellosalut.stefanbohacek.dev/?lang=` based on the input code upon clicking `INPUT#btn_translate`. |
| `103-script.js` | Fetches and displays language-specific greeting on either clicking `INPUT#btn_translate` or pressing `ENTER` inside `INPUT#language_code`. |
