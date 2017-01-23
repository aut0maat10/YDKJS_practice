// SCOPE

/* Programming languages store values in variables and
	later retrieve or modify those values. Questions: 
	1. Where are those variables stored?
	2. How does our program find them when it needs them?  

	Scope = the set of rules for storing and finding 
	these variables. 

	Three actors process the program:

	1. Engine
	2. Compiler
	3. Scope 

	LHS and RHS */

	// QUIZ identify the LHS and RHS look-ups

	function foo(a) { 
		var b = a; 
		return a + b; 
	}

	var c = foo(2); 

	// LHS: c = , a = 2 (implicit param assignment) , b =
	// RHS = foo(2 , = a , a + , +b

