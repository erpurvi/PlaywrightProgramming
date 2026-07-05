# JavaScript Keywords

A complete reference to all reserved keywords in JavaScript. These words cannot be used as identifiers (variable names, function names, or labels) in any JavaScript program.

---

## 1. Reserved Keywords (ES5 and earlier)

The original set of reserved words in ECMAScript 5.

| # | Keyword     | # | Keyword   | # | Keyword     | # | Keyword      |
|---|-------------|---|-----------|---|-------------|---|--------------|
| 1 | `break`     | 11| `do`      | 21| `in`        | 31| `typeof`     |
| 2 | `case`      | 12| `else`    | 22| `instanceof`| 32| `var`        |
| 3 | `catch`     | 13| `false`   | 23| `new`       | 33| `void`       |
| 4 | `continue`  | 14| `finally` | 24| `null`      | 34| `while`      |
| 5 | `debugger`  | 15| `for`     | 25| `return`    | 35| `with`       |
| 6 | `default`   | 16| `function`| 26| `switch`    |   |              |
| 7 | `delete`    | 17| `if`      | 27| `this`      |   |              |
| 8 |             | 18|          | 28| `throw`     |   |              |
| 9 |             | 19|          | 29| `true`      |   |              |
|10 |             | 20|          | 30| `try`       |   |              |

---

## 2. Reserved Keywords (ES6+)

Added in ECMAScript 2015 and later versions.

| # | Keyword     | Purpose                                      |
|---|-------------|----------------------------------------------|
| 1 | `class`     | Declares a class                             |
| 2 | `const`     | Declares a block-scoped constant             |
| 3 | `export`    | Exports functions/objects from a module      |
| 4 | `extends`   | Creates a child class                        |
| 5 | `import`    | Imports functions/objects from a module      |
| 6 | `let`       | Declares a block-scoped variable             |
| 7 | `super`     | Refers to the parent class                   |
| 8 | `yield`     | Pauses and resumes a generator function      |

---

## 3. Contextual Keywords (Future Reserved)

These words are not reserved in normal code but are reserved in **strict mode** and reserved for future versions.

| # | Keyword      | Status         |
|---|--------------|----------------|
| 1 | `implements` | Strict/Future  |
| 2 | `interface`  | Strict/Future  |
| 3 | `package`    | Strict/Future  |
| 4 | `private`    | Strict/Future  |
| 5 | `protected`  | Strict/Future  |
| 6 | `public`     | Strict/Future  |
| 7 | `static`     | Strict/Future  |
| 8 | `enum`       | Future         |

---

## 4. Special Contextual Keywords

Used in specific contexts only.

| # | Keyword   | Context                                      |
|---|-----------|----------------------------------------------|
| 1 | `await`   | Async functions (ES2017)                     |
| 2 | `async`   | Async functions (ES2017)                     |
| 3 | `from`    | Import/export statements                     |
| 4 | `as`      | Import/export renaming                       |
| 5 | `of`      | `for...of` loops                             |
| 6 | `get`     | Getters in object literals/classes           |
| 7 | `set`     | Setters in object literals/classes           |

---

## 5. Literals (Reserved by convention)

| # | Literal  | Type           |
|---|----------|----------------|
| 1 | `true`   | Boolean        |
| 2 | `false`  | Boolean        |
| 3 | `null`   | Null value     |

---

## Total Count

- **ES5 Reserved Keywords:** 35
- **ES6+ Reserved Keywords:** 8
- **Future/Strict Reserved:** 8
- **Contextual Keywords:** 7
- **Literals:** 3
- **Grand Total:** 61 keywords

---

## Notes

- **Strict Mode**: Enables stricter parsing and error handling. Many "future reserved" words become fully reserved in strict mode.
- **Use**: Always avoid using these keywords as variable or function names to prevent syntax errors.
- **Reference**: [MDN Web Docs - Reserved Words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)
