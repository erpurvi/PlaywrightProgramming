var a = 10; //global SCOPE 

//var is function scoped, so it can be accessed outside the block in which it is defined

console.log( "Value of a:", a );

function printHello() {
    console.log( "Hello TheTestingAcademy" );
    var a = 20; //Local Scope
    console.log( "Value of a inside function:", a );
    if ( true ) {
        var a = 30;
        console.log( a ); // 30
    }
}
printHello();

var a = 50;


// var == trump, flipper, dual faced, no trust worthy