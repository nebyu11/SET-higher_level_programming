# 0x15. JavaScript - Web Interactive

## Description
This project covers client-side vanilla JavaScript DOM (Document Object Model) manipulation and event handling without using jQuery or external libraries. It focuses on selecting elements, modifying styles and classes, handling user interaction events, and dynamically creating and inserting elements into the DOM.

## Learning Objectives
- Understanding DOM element selection using `document.querySelector` and `document.querySelectorAll`.
- Manipulating element styles directly via the `style` property.
- Managing element classes using the `classList` API (`add`, `toggle`, `remove`, `contains`).
- Handling user events using `addEventListener`.
- Dynamically creating and appending elements using `document.createElement` and `appendChild`.
- Updating DOM node content using the `textContent` property.
- Writing modern, clean vanilla JavaScript without `var` and without external dependencies.

## Requirements
- All code is interpreted on current, modern browsers.
- All files end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Vanilla JavaScript only (no jQuery, no external libraries).
- No usage of `var` (use `const` or `let`).
- HTML pages do not reload during DOM manipulation or event handling.

## File Descriptions

| File | Description |
| --- | --- |
| `0-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`). |
| `1-script.js` | Updates the text color of all `<p>` elements on the page to blue (`#0000FF`) using `document.querySelectorAll` and `forEach`. |
| `2-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) when the user clicks on `DIV#red_header` using `addEventListener`. |
| `3-script.js` | Adds the CSS class `red` to the `<header>` element when the user clicks on `DIV#red_header` using `classList.add()`. |
| `4-script.js` | Toggles the class of the `<header>` element between `red` and `green` when the user clicks on `DIV#toggle_header` using `classList.toggle()`. |
| `5-script.js` | Adds a new `<li>Item</li>` element to `UL.my_list` when the user clicks on `DIV#add_item` using `document.createElement()` and `appendChild()`. |
| `6-script.js` | Updates the text content of the `<header>` element to `New Header!!!` when the user clicks on `DIV#update_header` using `textContent`. |
