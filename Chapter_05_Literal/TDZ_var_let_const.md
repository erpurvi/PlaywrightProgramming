# Hoisting & Temporal Dead Zone (TDZ) — var vs let vs const

## Hoisting 

JavaScript moves all variable and function declarations to the top of their
scope **before** executing the code. This is called "hoisting."

## Temporal Dead Zone (TDZ)

The period between entering a scope and the actual declaration of a `let`/`const`
variable. During TDZ, the variable exists but cannot be accessed — any attempt
throws a `ReferenceError`.

---

## 1. `var` — HOISTED (initialized to `undefined`)

```js
console.log("var before declaration:", myVar); // undefined (hoisted, NOT an error)

var myVar = 10;

console.log("var after declaration:", myVar);  // 10
```

**What actually happens behind the scenes:**

```
┌─────────────────────────────────┐
│ var myVar;          // hoisted  │  <-- declaration moved to top
│ console.log(myVar); // undefined│
│ myVar = 10;         // assigned │
└─────────────────────────────────┘
```

---

## 2. `let` — HOISTED but in TDZ (NOT initialized)

```js
// console.log(myLet);  // ❌ ReferenceError: Cannot access before initialization

let myLet = 20;

console.log("let after declaration:", myLet); // 20
```

> `let` **IS** hoisted, but NOT initialized to `undefined`.
> It stays in the Temporal Dead Zone until the line where it's declared.

---

## 3. `const` — HOISTED but in TDZ (NOT initialized)

```js
// console.log(myConst);  // ❌ ReferenceError: Cannot access before initialization

const myConst = 30;

console.log("const after declaration:", myConst); // 30
```

> Same as `let` — hoisted but in TDZ.
> Additionally, `const` **MUST** be initialized at declaration time.

---

## 4. Function Hoisting

```js
sayHello(); // ✅ Works! Function declarations are fully hoisted.

function sayHello() {
    console.log("Hello from hoisted function!");
}

// BUT function expressions (assigned to var/let/const) are NOT fully hoisted:

// greet(); // ❌ TypeError: greet is not a function
var greet = function () {
    console.log("Greetings!");
};
greet(); // ✅ Works after assignment
```

---

## 5. Block Scope & TDZ

```js
{
    // console.log(blockVar); // ❌ ReferenceError
    let blockVar = "I am inside a block";

    console.log(blockVar); // ✅ "I am inside a block"
}

// console.log(blockVar); // ❌ ReferenceError (out of scope)
```

---

## 6. Summary Table

| Feature           | var          | let      | const    |
|-------------------|--------------|----------|----------|
| **Hoisted?**      | ✅           | ✅       | ✅       |
| **Initialized?**  | `undefined`  | ❌       | ❌       |
| **TDZ?**          | ❌           | ✅       | ✅       |
| **Access before declaration** | `undefined` (no error) | Error | Error |
| **Re-declare?**   | ✅           | ❌       | ❌       |
| **Re-assign?**    | ✅           | ✅       | ❌       |
| **Scope**         | Function     | Block    | Block    |
| **Must init at declaration?** | ❌ | ❌       | ✅       |
| **Window/Global object?** | ✅     | ❌       | ❌       |

---

### Key Takeaways

- All three (`var`, `let`, `const`) are **HOISTED** — but differently.
- `var` → hoisted + initialized to `undefined` (can access safely, but value is `undefined`).
- `let`/`const` → hoisted but NOT initialized (in TDZ, accessing throws `ReferenceError`).
- TDZ exists from scope entry until the variable's declaration line is reached.
- Use `let` by default. Use `const` when value should never change. Avoid `var` in modern code.
