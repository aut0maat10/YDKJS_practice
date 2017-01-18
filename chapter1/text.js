// Chapter 1: variables, etc.

var amount = 99.99;

amount = amount * 2;

console.log( amount ); // 199.98

// convert 'amount' to a string and add "$" on the beginning

amount = "$" + String( amount);

console.log ( amount ); // "$199.98"



// Calculate tax rate: CONSTANTS

var TAX_RATE  = 0.08; // 8% sales tax
var amount = 99.99;
amount = amount * 2;
amount = amount + (amount * TAX_RATE);

console.log( amount ); // 215.9787
console.log( amount.toFixed( 2 )); // "215.98"

//

// as of ES6 you can declare constants with const:

const TAX_RATE = 0.08;

var amount = 99.99;


// BLOCKS

var amount = 99.99;

// a general block

{
	amount = amount * 2;
	console.log( amount ); // 199.98
}

/* Typically, blocks are attached to control statements,
 such as an if statement or a loop. Example: */

 var amount = 99.99;
 //is amount big enough?
 if (amount > 10) { // block attached to if
 	amount = amount * 2;
 	console.log( amount ); // 199.98
}

// CONDITIONALS

var bank_balance = 302.13;
var amount = 99.99;

if ( amount < bank_balance ) {
	console.log( "I want to buy this phone!");
}

// ELSE CLAUSE: ADDITIONAL ALTERNATIVE

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

//can we afford the extra purchase?
if ( amount < bank_balance ) {
	console.log( "I'll take the accessory!" );
	amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
	console.log( "No, thanks." );
}

// LOOPS: while loops, do...while loops:

while (numOfCustomers > 0) {
	console.log( "How may I help you?" );

	// help the customer
	numOfCustomers = numOfCustomers -1;
}

// versus:

do {
	console.log( "How may I help you?" );

	//help the customer...
	numOfCustomers = numOfCustomers - 1; 
} while (numOfCustomers > 0);

// FOR LOOP

for (var i = 0; i <= 9; i = i + 1) {
	console.log( i );
}

// 0 1 2 3 4 5 6 7 8 9

// FUNCTIONS

function printAmount() {
	console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;
printAmount(); //"99.99"

amount = amount * 2;
printAmount(); // "199.98"

/* Functions can take arguments (=parameters) 
	– values you pass in. They can also return a 
	value back. */

function printAmount(amt) {
	console.log( amt.toFixed( 2 ));
}

function formatAmount() {
	return "$" + amount.toFixed( 2 );
}

var amount = 99.99;
printAmount( amount * 2 ); // "199.98"
amount = formatAmount();
console.log( amount );     // "$99.99"


// another example:

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
	//calculate the new amount with the tax
	amt = amt + ( amt * TAX_RATE);
	//return the new amount
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount ( amount );
console.log( amount.toFixed( 2 ) ); //"107.99"

//SCOPE: a collection of variables and rules

function one() {
	//this 'a' only belongs to the 'one' function
	var a = 1;
	console.log( a );
}

function two() {
	//this 'a' only belongs to the 'two' function
	var a = 2;
	console.log( a );
}

one(); // 1
two(); // 2

// A scope can be nested;

function outer() {
	var a = 1;

		function inner() {
			var b = 2;

			//we can access both 'a' and 'b' here
			console.log( a + b ); // 3
		}

		inner();
		//we can only access 'a' here
		console.log( a ); // 1
}

outer();




