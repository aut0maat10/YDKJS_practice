// ch5 SCOPE CLOSURE

// closure is all around you in JavaScript, you
// just have to recognize it.

// Closure is when a function is able to remember 
// and access its lexical scope even when that 
// function is executing outside its lexical scope.

function foo() {
	var a = 2;

	function bar() {
		console.log( a ); // 2
	}

	bar();
}

foo();

// function bar() has access to the variable a
// in the outer enclosing scope because of lexical
// scope look-up rules 

function foo() {
	var a = 2;

	function bar() {
		console.log(a);
	}

	return bar;
}
var baz = foo();
baz();  // 2 -- closure was just observed!