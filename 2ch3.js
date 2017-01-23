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