# Playwright Programming

A hands-on learning repository for **JavaScript fundamentals** and **Playwright automation** concepts, organized chapter by chapter.

> Progressive learning path — start with JS basics, then move to Playwright end-to-end testing.

## Contents

- **Chapter_01_Basics** — Basic setup and verification scripts
- **Chapter_02_Javascript_Concepts** — JavaScript fundamentals
- **Chapter_03_Identifier_Literals** — Identifier rules, literals, and comments
- **Chapter_04_JavaScript_Concepts** — var/let/const, scope, and hoisting
- **Chapter_05_Literal** — Literals (string, number, null/undefined, template literals, backtick, BigInt)
- **Chapter_06_Operator** — JavaScript operators introduction

> More chapters will be added as the learning path progresses.

## Files

| File | Description |
|---|---|
| `Chapter_01_Basics/01_Basics.js` | Basics overview |
| `Chapter_01_Basics/02_JS.js` | Core JS syntax and language building blocks |
| `Chapter_01_Basics/03_JS_Commands.js` | Commonly used JS commands and quick references |
| `Chapter_01_Basics/04_HotCode.js` | Handy reusable code snippets and patterns |
| `Chapter_02_Javascript_Concepts/05_JS_Basics.js` | Deeper dive into JS fundamentals |
| `Chapter_02_Javascript_Concepts/JavaScript_Keywords.md` | List of reserved keywords with examples |
| `Chapter_03_Identifier_Literals/06_Identifier_Rules.js` | Rules for naming identifiers in JavaScript |
| `Chapter_03_Identifier_Literals/07_Identifier_Rules_part2.js` | Continued identifier rules and edge cases |
| `Chapter_03_Identifier_Literals/08_Comments.js` | Single-line, multi-line, and JSDoc comment syntax |
| `Chapter_03_Identifier_Literals/Identifier_Rule_NamingConvention.js` | Naming conventions (camelCase, PascalCase, etc.) |
| `Chapter_03_Identifier_Literals/Identifier_Rule_NamingConvention_Image.js` | Code samples paired with naming-convention visuals |
| `Chapter_03_Identifier_Literals/Identifier_Rules_Example.js` | Identifier rule examples in practice |
| `Chapter_03_Identifier_Literals/ShortCut_Commands_VSCode.md` | Useful VS Code keyboard shortcuts |
| `Chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_windows.md` | Windows-specific VS Code shortcut reference |
| `Chapter_04_JavaScript_Concepts/09_var_let_const.js` | Differences between `var`, `let`, and `const` |
| `Chapter_04_JavaScript_Concepts/10_functions.js` | Function declarations and usage |
| `Chapter_04_JavaScript_Concepts/11_var_explained.js` | Deep dive into `var` behavior |
| `Chapter_04_JavaScript_Concepts/12_let_peope_love.js` | Why developers prefer `let` |
| `Chapter_04_JavaScript_Concepts/13_const_explained.js` | `const` behavior and immutability |
| `Chapter_04_JavaScript_Concepts/14_var_functionscope.js` | Function scope of `var` |
| `Chapter_04_JavaScript_Concepts/15_let_scope.js` | Block scope of `let` |
| `Chapter_04_JavaScript_Concepts/16_Hoisting.js` | Hoisting with `var` at global scope |
| `Chapter_04_JavaScript_Concepts/17_Hoisting_fn.js` | Hoisting inside functions (var function-scope) |
| `Chapter_04_JavaScript_Concepts/18_let_Hoisting.js` | Hoisting and TDZ with `let` |
| `Chapter_04_JavaScript_Concepts/19_let_Hoisting_block.js` | Block-scoped `let` hoisting and TDZ |
| `Chapter_04_JavaScript_Concepts/20_let_const.js` | `let` and `const` comparison |
| `Chapter_04_JavaScript_Concepts/21_Jr_QA.js` | Jr QA interview practice with var/let/const |
| `Chapter_05_Literal/22_Literal.js` | Literal types: string, number, boolean, null, undefined |
| `Chapter_05_Literal/23_null_undefined.js` | Deep dive into `null` vs `undefined` |
| `Chapter_05_Literal/23_null_undefined_2.js` | Additional `null` vs `undefined` examples |
| `Chapter_05_Literal/24_null.js` | `null` literal and typeof quirk |
| `Chapter_05_Literal/25_Literal_All.js` | All literal types combined with a Playwright story |
| `Chapter_05_Literal/26_Literal_Number_all.js` | Number literal types: decimal, hex, octal, binary, BigInt, separators |
| `Chapter_05_Literal/26_Literal_Number_all_1.js` | Number literal types (extended version) |
| `Chapter_05_Literal/27_String.js` | String literals: single, double quotes, and escape characters |
| `Chapter_05_Literal/28_Template_Literal.js` | Template literals and string interpolation |
| `Chapter_05_Literal/29_Backtick_single_double.js` | Single quote vs double quote vs backtick comparison |
| `Chapter_05_Literal/TDZ_var_let_const.md` | Hoisting & TDZ reference (var, let, const) in markdown |
| `Chapter_06_Operator/30_Operators.js` | JavaScript operators introduction |

## How to Run

You can run any `.js` file using Node.js:

```bash
node Chapter_04_JavaScript_Concepts/17_Hoisting_fn.js
```

## Topics Covered

- JavaScript identifier naming rules
- Valid and invalid identifier examples
- Naming conventions (camelCase, UPPER_CASE)
- Comments (single-line and multi-line)
- `var` vs `let` vs `const` and their scoping rules
- Function scope vs block scope
- Hoisting with `var`, `let`, `const` (global, function-scoped, block-scoped)
- Temporal Dead Zone (TDZ)
- Literals: string (single/double/backtick), number (decimal/hex/octal/binary), boolean, null, undefined
- Numeric separators and BigInt
- Template literals and interpolation
- Null vs undefined (typeof quirk, loose vs strict equality)
- JavaScript operators

## Git Shortcuts

Save these so commit & push becomes one-line muscle memory:

| Action | Command |
|---|---|
| Check what changed | `git status` |
| Stage a specific file | `git add path/to/file.js` |
| Stage everything | `git add -A` |
| Stage all tracked file changes (incl. deletions) | `git add -u` |
| Commit with inline message | `git commit -m "your message"` |
| Push to remote | `git push` |
| Pull latest from remote | `git pull` |
| View commit log | `git log --oneline` |

### One-liner: stage + commit + push (after first time)

```bash
git add -A && git commit -m "your message" && git push
```

### One-liner: commit a single file

```bash
git add path/to/file.js && git commit -m "update file" && git push
```

> **Tip:** Every commit on this repo automatically gets the co-author `CommandCodeBot` so your commits are properly attributed to your AI pair programmer.

## Author

**Purvi Babariya**
GitHub: [@erpurvi](https://github.com/erpurvi)
