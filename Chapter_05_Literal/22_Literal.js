let age = "pramod"; // This is a string literal assigned to the variable 'age'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

// typeof - operatr - It will tell you what is a data type that it has. 
console.log( typeof age );
console.log( typeof pi );   //number as js does not have double & float data type. It has only one data type called number.
console.log( typeof isStudent );
console.log( typeof nullValue );    //interview question - What is the data type of null? Answer: object (this is a known bug in JavaScript)    
console.log( typeof undefinedValue );