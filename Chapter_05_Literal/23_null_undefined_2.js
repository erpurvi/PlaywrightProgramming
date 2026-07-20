// ============================================
// null vs undefined in JavaScript
// ============================================
// Both mean "no value", but they are NOT the same.
//  - undefined  = JS says: "I have no idea what this is"
//  - null       = YOU say: "I deliberately set this to empty"


// 1) undefined — variable declared but never assigned
let a;
console.log( a );              // undefined
console.log( typeof a );        // "undefined"

// function with no return statement
function noReturn() { }
console.log( noReturn() );      // undefined

// missing object property
const user = { name: "Purvi" };
console.log( user.age );        // undefined


// 2) null — intentionally empty / "no value"
let b = null;
console.log( b );               // null
console.log( typeof b );        // "object"  <-- famous JS bug from 1995


// 3) They are NOT equal with ==
console.log( null == undefined );  // true   (loose equality, both mean "no value")
console.log( null === undefined ); // false  (strict: different types)


// 4) Quick checks
let x;          // undefined
let y = null;   // null

console.log( x == null );   // true   (catches both — handy but loose)
console.log( y == null );   // true
console.log( x === null );  // false  (x is undefined, not null)
console.log( y === null );  // true

// Cleaner approach: check for undefined explicitly
console.log( typeof x === "undefined" );  // true
console.log( typeof y === "undefined" );  // false


// 5) Why "typeof null" is "object" — historical bug
// In the very first version of JS, values were stored as a type tag + value.
// 0 meant "object", null had tag 0 and value 0, so typeof read "object".
// It was never fixed because too much code depended on it.

// Real-world note:
//   API responses: null  -> server says "this field is empty"
//                  undefined -> field is missing from the response

// Note: prefer `null` when you want to explicitly mark "no value".
//       `undefined` usually means "I haven't decided yet" or "doesn't exist".
