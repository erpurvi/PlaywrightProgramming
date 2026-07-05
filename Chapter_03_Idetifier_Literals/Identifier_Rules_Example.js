// ============================================
// JavaScript Identifier Rules - Example Program
// ============================================

// --- 1. Must begin with a letter (a-z, A-Z) ---
let age = 25;
let Name = "Alice";
console.log("Letter start:", age, Name);

// --- 2. Can begin with an underscore (_) ---
let _privateValue = 100;
console.log("Underscore start:", _privateValue);

// --- 3. Can begin with a dollar sign ($) ---
let $price = 99.99;
console.log("Dollar sign start:", $price);

// --- 4. Subsequent characters can be letters, digits, underscores, or dollar signs ---
let item1_price = 50;
let camelCaseValue$ = "ok";
console.log("Mixed chars:", item1_price, camelCaseValue$);

// --- 5. CANNOT start with a digit (would cause SyntaxError) ---
// let 1number = 10;  // Invalid - uncomment to see the error
// console.log(1number);

// --- 6. CANNOT be a reserved keyword (would cause SyntaxError) ---
// let var = 5;       // Invalid - 'var' is reserved
// let return = "hi"; // Invalid - 'return' is reserved

// --- 7. Case-sensitive identifiers ---
let myVar = "first";
let myvar = "second";
console.log("Case sensitive:", myVar, myvar, "are different");

// --- 8. CANNOT contain spaces (would cause SyntaxError) ---
// let my variable = 1; // Invalid - contains a space

// --- 9. CANNOT contain special characters (would cause SyntaxError) ---
// let my-var = 1;    // Invalid - hyphen not allowed
// let @value = 2;    // Invalid - @ not allowed
// let #tag = 3;      // Invalid - # not allowed

// --- 10. Can contain Unicode letters ---
let café = "coffee";
let नमस्ते = "hello";
console.log("Unicode identifiers:", café, नमस्ते);

// --- 11. No length limit (keep readable) ---
let thisIsAVeryLongIdentifierNameThatStillWorks = 1;
console.log("Long identifier:", thisIsAVeryLongIdentifierNameThatStillWorks);

// --- 12. Cannot duplicate identifier name in the same scope ---
// (let will throw a SyntaxError on redeclaration in the same block)
let uniqueName = "first";
// let uniqueName = "second"; // Invalid - duplicate declaration
uniqueName = "second";        // Valid - reassignment is allowed
console.log("No duplicates in same scope:", uniqueName);
