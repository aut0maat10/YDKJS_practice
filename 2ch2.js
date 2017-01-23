// LEXICAL SCOPE

// code example with 3 nested scopes

function foo(a) {
	var b = a * 2;
	function bar(c) {
		console.log( a, b, c );
	}

	bar(b*3);
}

foo(2); // 2, 4, 12

// these nested bubbles are strictly nested (see chapter 2) 
// and can't partially exist inside two outer scope bubbles.

// A function's lexical scope is only defined by WHERE the
// function was declared = an author-time (lexical) decision. Cheating 
// lexical scope leads to poorer performance and should be avoided
// (see functions eval and with).

// eval

function foo(str, a) {
	eval(str); // CHEATING!
	console.log(a, b);
}

var b = 2;
foo("var b = 3;" , 1); // 1 3
