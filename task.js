const PHONE_PRICE = 99.99;
const SPENDING_THRESHOLD = 200.00;
const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;

var bankBalance = 372.44;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

while (amount < bankBalance) {
	//keep buying phones
	amount = amount + PHONE_PRICE;
	// accessory
	if (amount < SPENDING_THRESHOLD) {
		// buy accessory
		amount = amount + ACCESSORY_PRICE;
	}
}

// taxes 

amount = amount + calculateTax(amount);

console.log( "Your purchase:" + formatAmount(amount)); //442.75

// can you afford this purchase?

if (amount > bankBalance) {
	console.log("Unfortunately, you can't afford this purchase.");
}



// trying out stuff below

amount = 0;
amount = PHONE_PRICE + ( PHONE_PRICE * TAX_RATE);
console.log( "$" + amount.toFixed( 2 ));

// keep buying phones
while (amount < bankBalance) {
	//buy a new phone!
	amount = amount + PHONE_PRICE;
}