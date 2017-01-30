// HOISTING

// order of code executed

var a = 2;
var a;
console.log( a ); // 2 (not 'undefined')

// another example

console.log( a );
var a = 2; // returns 'undefined'

// WHICH COMES FIRST? THE COMPLIER STRIKES AGAIN

// all declarations, both variables and functions, are 
// processed first, before any part of the code is
// executed.

// so, metaphorically, in this process, variable 
// and function declarations are "moved" from
// where thay appear in the flow of the code
// to the top of the code. This process is called
// HOISTING