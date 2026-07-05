# Playwright Programming

A hands-on learning repository for **JavaScript fundamentals** and **Playwright automation** concepts, organized chapter by chapter.

## Overview

This repo tracks my progress while learning programming concepts that underpin end-to-end browser automation with Playwright. It starts with JavaScript basics (variables, loops, functions, built-in objects) and will grow into Playwright-specific topics like locators, assertions, fixtures, and test patterns.

## Repository Structure

```
PlaywrightProgramming/
├── Chapter_01_Basics/                  # JavaScript fundamentals
│   ├── 01_Basics.js                    # console.log, variables
│   ├── 02_JS.js                        # loops, functions, hoisting
│   ├── 03_JS_Commands.js               # process object (platform, arch)
│   └── 04_HotCode.js                   # function call patterns
├── Chapter_02_Javascript_Concepts/     # (coming soon)
└── Chapter_03_Idetifier_Literals/      # (coming soon)
```

## Chapter 01 - Basics

Core JavaScript concepts practiced so far:

- **01_Basics.js** - First steps: `console.log`, declaring variables with `let`.
- **02_JS.js** - Control flow: `for` loops, function declarations, scoping.
- **03_JS_Commands.js** - Node.js built-ins: `process.platform`, `process.arch`.
- **04_HotCode.js** - Hot-path function calls and result tracking.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A code editor (VS Code suggested)

## Running the Examples

Each `.js` file is a standalone Node.js script. Run any example with:

```bash
node Chapter_01_Basics/01_Basics.js
node Chapter_01_Basics/02_JS.js
node Chapter_01_Basics/03_JS_Commands.js
node Chapter_01_Basics/04_HotCode.js
```

> Note: `02_JS.js` calls `print()` before it is defined. In Node.js this works due to **function hoisting**, but it is a good example of why declaration order still matters for readability.

## Roadmap

- [x] Chapter 01 - JavaScript Basics
- [ ] Chapter 02 - JavaScript Concepts (async/await, promises, ES6+)
- [ ] Chapter 03 - Identifiers & Literals
- [ ] Playwright setup and first test
- [ ] Locators, assertions, and Page Object Model
- [ ] CI integration

## Author

**erpurvi** 

**learning in public, one chapter at a time.**

**GitHub:** https://github.com/erpurvi
