var v = 10;
let l = 30;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // re-declaration is allowed with var
browser = "Edge"; // re-assignment is allowed with var

//for functions


var testCases = [ "login", "logout", "signup" ];

for ( var i = 0; i < testCases.length; i++ ) {
    console.log( "Running test:", testCases[ i ] ); //i local to the for loop block but var is function scoped so it will leak outside the block
}

console.log( "Loop counter leaked outside:", i );   //i is accessible here because var is function scoped, not block scoped

console.log( "Hi" );
console.log( "Hi" );
console.log( "Hi" );

//function crete
function say() {
    console.log( "Hi from Function" );
}

say();
say();