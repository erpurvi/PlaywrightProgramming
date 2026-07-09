//let - Block scoped variable
let a = 10; //global SCOPE

let retryCount = 0;
retryCount = retryCount + 1; //re-assignment is allowed with let
retryCount = retryCount + 1;
console.log( "Retry Attempt:", retryCount );

// let retryCount = 5; //re-declaration is not allowed with let, it will throw error

//let retryCount = 5; //SyntaxError: Identifier 'retryCount' has already been declared

//let is block scoped, so it cannot be accessed outside the block in which it is defined
let testStatus = "pending";


if ( testStatus === "pending" ) {
    let executionTime = 1200;
    console.log( "Inside Block, Execution Time:", executionTime );    //1200
}
// console.log( "Outside Block, Execution Time:", executionTime );   //ReferenceError: executionTime is not defined


// { }
// if{}
// function() { }

//let = Loyal, Honest, Trustworthy, Block Scoped
//var = variable / traitor, function scoped, re-declarable, re-assignable, not trustworthy


