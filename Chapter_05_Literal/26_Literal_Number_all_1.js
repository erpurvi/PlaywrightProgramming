// ============================================================
// Topic: All Number Literal Types Supported in JavaScript
// File: 26_Literal_Number_all.js
// ============================================================

/*
  JavaScript has only one number type: "number" (64-bit IEEE 754 floating point).
  But it supports many literal formats to express numbers in different ways.
*/

// --------------------------------------------------------
// 1. Decimal (Base-10) Literals
// --------------------------------------------------------

let integer = 42;
let negative = -100;
let zero = 0;
let float = 3.14;
let negativeFloat = -2.5;

console.log( integer, typeof integer );           // 42 number
console.log( negative, typeof negative );          // -100 number
console.log( zero, typeof zero );                  // 0 number
console.log( float, typeof float );                // 3.14 number
console.log( negativeFloat, typeof negativeFloat ); // -2.5 number


// --------------------------------------------------------
// 2. Hexadecimal (Base-16) Literals - prefix 0x or 0X
// --------------------------------------------------------

let hexRed   = 0xFF;      // 255
let hexGreen = 0x00;      // 0
let hexBlue  = 0x99;      // 153
let hexColor = 0xFF00FF;  // Magenta color code
let hexMax   = 0xFFFFFFFF; // 4294967295

console.log( hexRed, typeof hexRed );     // 255 number
console.log( hexGreen, typeof hexGreen ); // 0 number
console.log( hexBlue, typeof hexBlue );   // 153 number
console.log( hexColor, typeof hexColor ); // 16711935 number
console.log( hexMax, typeof hexMax );     // 4294967295 number


// --------------------------------------------------------
// 3. Octal (Base-8) Literals - prefix 0o or 0O
// --------------------------------------------------------

let oct1 = 0o77;   // 63  (7*8 + 7)
let oct2 = 0o10;   // 8   (1*8 + 0)
let oct3 = 0o777;  // 511 (7*64 + 7*8 + 7)

console.log( oct1, typeof oct1 ); // 63 number
console.log( oct2, typeof oct2 ); // 8 number
console.log( oct3, typeof oct3 ); // 511 number


// --------------------------------------------------------
// 4. Binary (Base-2) Literals - prefix 0b or 0B
// --------------------------------------------------------

let bin1 = 0b1010;     // 10
let bin2 = 0b11111111; // 255
let bin3 = 0b0001;     // 1
let bin4 = 0b10000000; // 128

console.log( bin1, typeof bin1 ); // 10 number
console.log( bin2, typeof bin2 ); // 255 number
console.log( bin3, typeof bin3 ); // 1 number
console.log( bin4, typeof bin4 ); // 128 number


// --------------------------------------------------------
// 5. Exponential / Scientific Notation
// --------------------------------------------------------

let million = 1e6;        // 1,000,000
let tiny    = 1.5e-4;     // 0.00015
let large   = 6.022e23;   // Avogadro's number (approximate)
let small   = 6.626e-34;  // Planck's constant (approximate)
let eNotation = 1E3;      // 1000 (uppercase E works too)

console.log( million, typeof million );   // 1000000 number
console.log( tiny, typeof tiny );         // 0.00015 number
console.log( large, typeof large );       // 6.022e+23 number
console.log( small, typeof small );       // 6.626e-34 number
console.log( eNotation, typeof eNotation ); // 1000 number


// --------------------------------------------------------
// 6. BigInt Literals - suffix n (ES2020)
// --------------------------------------------------------

let big1 = 123n;
let big2 = 9007199254740991n;  // Max safe integer in JS as BigInt
let big3 = -9999999999999999n;
let bigHex = 0xFFn;            // BigInt from hex
let bigBin = 0b1010n;          // BigInt from binary
let bigOct = 0o77n;            // BigInt from octal

console.log( big1, typeof big1 );     // 123n bigint
console.log( big2, typeof big2 );     // 9007199254740991n bigint
console.log( big3, typeof big3 );     // -9999999999999999n bigint
console.log( bigHex, typeof bigHex ); // 255n bigint
console.log( bigBin, typeof bigBin ); // 10n bigint
console.log( bigOct, typeof bigOct ); // 63n bigint


// --------------------------------------------------------
// 7. Numeric Separators - underscore _ (ES2021)
// --------------------------------------------------------

let millionSep = 1_000_000;         // 1000000
let billionSep = 1_000_000_000;     // 1000000000
let hexSep     = 0xFF_FF_FF;        // 16777215
let binSep     = 0b1010_1100_0011;  // 2755
let bigSep     = 1_000_000n;        // 1000000n good for bigint

console.log( millionSep, typeof millionSep );   // 1000000 number
console.log( billionSep, typeof billionSep );   // 1000000000 number
console.log( hexSep, typeof hexSep );           // 16777215 number
console.log( binSep, typeof binSep );           // 2755 number
console.log( bigSep, typeof bigSep );           // 1000000n bigint


// --------------------------------------------------------
// 8. Special Number Values
// --------------------------------------------------------

let inf = Infinity;
let negInf = -Infinity;
let notANumber = NaN;

console.log( inf, typeof inf );           // Infinity number
console.log( negInf, typeof negInf );      // -Infinity number
console.log( notANumber, typeof notANumber ); // NaN number

// How they occur
console.log( 1 / 0 );            // Infinity
console.log( -1 / 0 );           // -Infinity
console.log( 0 / 0 );            // NaN
console.log( "hello" * 3 );      // NaN
console.log( Math.sqrt( -1 ) );  // NaN

// Checking NaN (NaN is NOT equal to itself!)
console.log( NaN === NaN );              // false
console.log( Number.isNaN( NaN ) );      // true  (correct way)
console.log( isNaN( "hello" ) );         // true  (coerces first, avoid!)


// --------------------------------------------------------
// 9. Summary - All Number Literal Types
// --------------------------------------------------------

/*
  | Literal Type     | Syntax Examples        | Storage Type  |
  |------------------|------------------------|---------------|
  | Decimal Integer  | 42, -100, 0            | number        |
  | Decimal Float    | 3.14, -2.5, .5, 5.    | number        |
  | Hexadecimal      | 0xFF, 0X1A             | number        |
  | Octal            | 0o77, 0O10             | number        |
  | Binary           | 0b1010, 0B1111         | number        |
  | Exponential      | 1e6, 1.5e-4, 1E3      | number        |
  | BigInt           | 123n, 0xFFn, 0b1010n   | bigint        |
  | Separators       | 1_000_000, 0xFF_FF     | number/bigint |
  | Infinity         | Infinity, -Infinity    | number        |
  | NaN              | NaN                    | number        |
*/

// ============================================================
// END
// ============================================================
