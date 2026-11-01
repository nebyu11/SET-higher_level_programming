# AI Usage Disclosure

## Project: 0x15. JavaScript - Web Interactive (Week 6 & Week 7)

**Student:** Yonas Leykun  
**Date:** 2026-10-13  
**AI Tool Used:** Antigravity (Google DeepMind)

---

## How AI Was Used

### Task Understanding
AI was used to analyze the project requirements for Week 6 and Week 7 (DOM manipulation, event handling, asynchronous data fetching via `fetch` API, state-driven rendering, and script execution timing) and clarify how modern vanilla JavaScript APIs cleanly replace legacy jQuery patterns.

### Code Generation & Review
AI assisted in:
- Structuring clean, idiomatic ES6+ scripts adhering strictly to the `semistandard` coding style (semicolons, 2-space indentation, single quotes, no `var`).
- Selecting DOM elements precisely using `document.querySelector` and `document.querySelectorAll`.
- Implementing `classList.toggle()` to ensure clean class switching between `red` and `green` without leaving the element empty or with conflicting classes.
- Utilizing `document.createElement()` and `appendChild()` for dynamic DOM element insertion.
- Using `textContent` for safe string updates to the DOM tree.
- Fetching REST API endpoints asynchronously using `fetch()` and `async/await` syntax.
- Implementing robust error handling by inspecting `response.ok` and wrapping asynchronous operations in `try/catch` blocks to display descriptive fallback messages.
- Ensuring scripts executed from `<head>` wait for document structure readiness via `document.addEventListener('DOMContentLoaded', ...)`.
- Designing state-driven DOM updates using a centralized JavaScript array as the single source of truth paired with a deterministic `render()` function.
- Handling multiple input events simultaneously (mouse click on buttons and keyboard `Enter` keypresses on text inputs).

### Debugging & Verification
- Validated each script against its corresponding HTML test harness (`7-main.html` through `103-main.html`).
- Verified that all actions operate purely via client-side DOM manipulation without triggering page reloads.
- Checked code quality and syntax compliance using `npx semistandard`.

### What I Learned / Did Myself
- Modern vanilla JavaScript natively supports clean, promise-based HTTP requests using `fetch()` without external libraries.
- The importance of defensive coding: verifying `response.ok` before attempting to parse JSON bodies.
- Why timing matters when importing scripts in the `<head>` versus at the end of the `<body>`, and how `DOMContentLoaded` guarantees element availability.
- Managing UI state as a single source of truth and re-rendering declaratively, mimicking foundational principles of modern frontend frameworks.
- Attaching multiple event listeners (`click`, `keydown`) to support accessible interaction patterns.

---

## Summary
AI was used as a pair-programming assistant to validate code patterns and ensure rigorous compliance with project specifications and coding style guidelines. All logic and implementations were verified.
