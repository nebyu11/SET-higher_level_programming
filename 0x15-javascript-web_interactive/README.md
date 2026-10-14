# 0x15. JavaScript - Web Interactive

## Description
This project covers client-side vanilla JavaScript DOM manipulation, event handling, and fetch API usage. It focuses on selecting elements, modifying styles and classes, handling user interaction events, dynamically creating and inserting elements into the DOM, and fetching data from external APIs — all without using jQuery or any external library.

## Learning Objectives
- Understanding DOM element selection using `document.querySelector` and `document.querySelectorAll`.
- Manipulating element styles directly via the `style` property.
- Managing element classes using the `classList` API (`add`, `toggle`, `remove`, `contains`).
- Handling user events using `addEventListener`.
- Dynamically creating and appending elements using `document.createElement` and `appendChild`.
- Updating DOM node content using the `textContent` property.
- Fetching data from APIs using the `fetch()` API with `async/await`.
- Handling failed HTTP requests gracefully with `try/catch` and `response.ok`.
- Using `DOMContentLoaded` when scripts are loaded from the `<head>` tag.
- Keeping a JavaScript array as the single source of truth and re-rendering the DOM from it.
- Writing modern, clean vanilla JavaScript without `var` and without external dependencies.

## Requirements
- All code is interpreted on current, modern browsers.
- All files end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Vanilla JavaScript only (no jQuery, no external libraries).
- No usage of `var` (use `const` or `let`).
- HTML pages do not reload during DOM manipulation or event handling.

## File Descriptions

### Part 1 — DOM Manipulation & Events

| File | Description |
| --- | --- |
| `0-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`). |
| `1-script.js` | Updates the text color of all `<p>` elements to blue (`#0000FF`) using `document.querySelectorAll` and `forEach`. |
| `2-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) when the user clicks on `DIV#red_header` using `addEventListener`. |
| `3-script.js` | Adds the CSS class `red` to the `<header>` element when the user clicks on `DIV#red_header` using `classList.add()`. |
| `4-script.js` | Toggles the class of the `<header>` element between `red` and `green` when the user clicks on `DIV#toggle_header` using `classList.toggle()`. |
| `5-script.js` | Adds a new `<li>Item</li>` element to `UL.my_list` when the user clicks on `DIV#add_item` using `document.createElement()` and `appendChild()`. |
| `6-script.js` | Updates the text content of the `<header>` element to `New Header!!!` when the user clicks on `DIV#update_header` using `textContent`. |

### Part 2 — Fetch API & Advanced DOM

| File | Description |
| --- | --- |
| `7-script.js` | Fetches a Star Wars character name from SWAPI (`/api/people/5/`) and displays it in `DIV#character`. Handles errors gracefully. |
| `8-script.js` | Fetches all Star Wars film titles from SWAPI (`/api/films/`) and lists them in `UL#list_movies` as `<li>` elements. Handles errors gracefully. |
| `9-script.js` | Fetches the French translation of "Hello" from hellosalut API and displays it in `DIV#hello`. Loaded from `<head>` — uses `DOMContentLoaded`. |
| `100-script.js` | Updates the text color of the `<header>` to red (`#FF0000`). Loaded from `<head>` — uses `DOMContentLoaded`. |
| `101-script.js` | Add/remove/clear `<li>` items in `UL.my_list` using a JavaScript array as single source of truth and a `render()` function. Loaded from `<head>`. |
| `102-script.js` | Fetches the translation of "Hello" in the language typed by the user when `INPUT#btn_translate` is clicked. Loaded from `<head>`. |
| `103-script.js` | Same as `102-script.js` but also triggers on `Enter` key press in `INPUT#language_code`. Loaded from `<head>`. |
