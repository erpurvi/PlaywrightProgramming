// ============================================
// JavaScript Identifier Naming Cases
// (Excluding kebab-case as it is invalid in JS)
// ============================================

// --- 1. camelCase (standard for variables & functions) ---
let firstName = "John";
function getUserAge() {
    return 25;
}
console.log("camelCase        :", firstName, getUserAge());

// --- 2. PascalCase (standard for classes & constructors) ---
class FirstName {
    constructor(value) {
        this.value = value;
    }
}
let myName = new FirstName("Alice");
console.log("PascalCase       :", myName);

// --- 3. snake_case (allowed in JS, less common) ---
let first_name = "Bob";
console.log("snake_case       :", first_name);

// --- 4. SCREAMING_SNAKE_CASE (for constants) ---
const FIRST_NAME = "Charlie";
const MAX_LIMIT = 100;
console.log("SCREAMING_SNAKE  :", FIRST_NAME, MAX_LIMIT);

// --- 5. Hungarian Notation (older style, avoid) ---
let strFirstName = "Dave";  // 'str' prefix = string
let nCount = 10;            // 'n' prefix = number
let bIsActive = true;       // 'b' prefix = boolean
console.log("Hungarian        :", strFirstName, nCount, bIsActive);

// --- 6. Train-Case (NOT valid in JS identifiers) ---
// let First-Name = "Eve"; // SyntaxError - hyphens are subtraction operator
// Train-Case is used in HTTP headers (e.g., Content-Type), not in JS code
