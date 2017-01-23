
// VALUES AND TYPES

/* built-in types:
	string
	number
	boolean
	null, undefined
	object
	symbol */

// THE typeof OPERATOR EXAMINES VALUE & TYPE

var a;
typeof a; // "undefined"

a = "hello world";
typeof a; // "string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object" -- weird, bug

a = undefined;
typeof a; // "undefined"

a = { b: "c" };
typeof a;  // "object"

//OBJECTS

var obj = {
	a: "hello world",
	b: 42,
	c: true
};

/* ACCESSED EITHER WITH
  1. DOT NOTATION (PREFERRED WHEN POSSIBLE): 
  */

obj.a; // "hello world"
obj.b; // 42
obj.c; // true

// 2. BRACKET NOTATION:

obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true

/* ARRAYS: An array is an object that holds values (of any
 type), in numericallty indexed positions. */

 var arr = [
 	"hello world",
 	42,
 	true
 ];

 arr[0]; // "hello world"
 arr.length; // 3
 typeof arr; // object

 //FUNCTIONS (ANOTHER OBJECT SUBTYPE)

 function foo() {
 	return 42;
 }

 foo.bar = "hello world";

typeof foo;         // "function"
typeof foo();       // "number"
typeof foo.bar;     // "string"

// BUILT-IN TYPE METHODS

var a = "hello world";
var b = 3.14159;

a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4); // 3.1416

// COMPARING VALUES

/* two main types of value comparison: EQUALITY and 
	INEQUALITY. The result of any comparison is a strictly
	boolean value: TRUE or FALSE. */


// COERCION

// EXPLICIT COERCION

var a = "42";
var b = Number( a );

a; // "42"
b; // 42 -- the number!

// IMPLICIT COERCION

var a = "42";
var b = a * 1; // "42" implicitly coerced to 42

a; // "42"
b; // 42 -- the number!

// EQUALITY OPERATORS == , ===, !=, and !==

// == allows coercion, === does not:

var a = "42";
var b = 42;

a == b; // true
a === b; // false

// INEQUALITY <, >,  <=, >=

// VARIABLES

// FUNCTION SCOPES








