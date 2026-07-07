// ============================================
// JavaScript Naming Conventions
// ============================================

// --- 1. camelCase (variables & functions) ---
let firstName = "John";
function getUserName() {
    return firstName;
}
console.log("camelCase:", getUserName());

// --- 2. PascalCase (classes & constructors) ---
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}
let profile = new UserProfile("Alice");
console.log("PascalCase:", new UserProfile("Alice"));

// --- 3. UPPER_SNAKE_CASE (constants) ---
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";
console.log("UPPER_SNAKE_CASE:", MAX_LOGIN_ATTEMPTS, API_BASE_URL);

// --- 4. snake_case (not typical in JS, but valid) ---
let user_age = 30;
console.log("snake_case:", user_age);

// --- 5. _leadingUnderscore (private/internal convention) ---
let _internalCache = { hit: 0 };
console.log("_leadingUnderscore:", _internalCache);

// --- 6. $leadingDollar (jQuery or framework convention) ---
let $button = "button element";
console.log("$leadingDollar:", $button);

// --- 7. Hungarian-style prefix (older JS) ---
let bIsActive = true;
let sUserEmail = "a@b.com";
let nClickCount = 5;
console.log("Hungarian-style prefix:", bIsActive, sUserEmail, nClickCount);

// --- 8. SCREAMING_SNAKE_CASE for environment-like constants ---
const PORT_NUMBER = 8080;
console.log("SCREAMING_SNAKE_CASE:", PORT_NUMBER);

// --- 9. kebab-case (NOT valid in JS identifiers) ---
// let my-var = 1; // SyntaxError - hyphens not allowed

// --- 10. Meaningful & descriptive names ---
let daysUntilDeadline = 7;     // good
let d = 7;                     // avoid single-letter outside loops
console.log("Meaningful names:", daysUntilDeadline, d);

// --- 11. Booleans start with is/has/can ---
let isLoggedIn = true;
let hasPermission = false;
let canEdit = true;
console.log("Boolean prefix:", isLoggedIn, hasPermission, canEdit);

// --- 12. Functions start with a verb ---
function calculateTotal() { return 100; }
function fetchData() { return "data"; }
console.log("Function verbs:", calculateTotal(), fetchData());
