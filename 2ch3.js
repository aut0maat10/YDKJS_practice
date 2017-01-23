// FUNCTION VS BLOCK SCOPE

// Scope from functions

// Hiding in plain scope

// you can "hide" variables and functions by enclosing
// them in the scope of a function.

function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;
	b = a + doSomethingElse( a * 2 );
	console.log( b * 3 );
}

doSomething( 2 ); // 15

// this design keeps private details private:
//  b and doSomethingElse are not accessible 
// to any outside influence

// COLLISION AVOIDANCE

// Global "Namespaces"

var myReallyCoolLibrary = {
	awesome: "stuff",
	doSomething: function() {
		// ...
	},
	doAnotherThing: function() {
		// ...
	}
};

// MODULE MANAGEMENT (see ch5)

// FUNCTIONS AS SCOPES

//example:

var a = 2;

function foo() {

	var a = 3;
	console.log(a); // 3
}

foo();
console.log(a); = 2

// this works, but is not idela, since the named function
// foo "pollutes" the enclosing (global) scope. We also 
// have to call the function by name foo() so that the wrapped 
// code executes

// a better solution is using a FUNCTION - EXPRESSION:

var a = 2;

(function foo() {
	var a = 3;
	console.log(a); // 3
})(); // <-- this

console.log(a); // 2

// in the second example, the name foo is not bound
// in the enclosing scope, but only inside of its
// own function. Therefore, it doesn't pollute the
// enclosing scope.

// Function-expressions can be anonymous (unlike 
// function declarations)

setTimeout( function() {
	console.log("I waited 1 second!");
}, 1000);

// inline function expressions are powerful and useful,
// but the best practice is always to name your
// function expressions:

setTimeout ( function timeoutHandler() { // <-- I have a name!
	console.log( "I waited one second!");
}, 1000);

// INVOKING FUNCTION EXPRESSIONS IMMEDIATELY (IIFE)

var a = 2;

(function foo() {
	var a = 3;
	console.log(a); // 3
})();

console.log(a); // 2

// as the function expression is wrapped in (),
// we can execute that function by adding another
// () on the end: (function foo(){ .. })() . 
// The first () pair makes the function an expression,
// and the second () executes the function. 

// The pattern is so common that the community
// has a greed on a term for it:
// IIFE = Immediately Invoked Function Expression

// BLOCK SCOPE

// try/catch

// let = another way to declare variables

var foo = true;

if (foo) {
	let bar = foo * 2;
	bar = something( bar );
	console.log( bar );
}
console.log( bar ); // reference error
