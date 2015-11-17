var bankBalance = prompt("Enter your bank balance");
var PHONE_PRICE = 4500;
var TAX_RATE_PERCENT = 0.1;
var ACCESSORY_PRICE = 1000;
var SPENDING_THRESHOLD = 1200;


function calculateTax(amount){
	return amount * TAX_RATE_PERCENT;
}

function prettyPrintPrice(amount){
	return "Rs." + parseFloat(amount).toFixed(2);
}

function buyPhoneAndAccessoriesTillThresholdLimit(){
	var totalPhonesBought = 0;
	while(bankBalance > 0){
		var purchaseAmount = PHONE_PRICE;
		if (ACCESSORY_PRICE < SPENDING_THRESHOLD) {
			purchaseAmount += ACCESSORY_PRICE;
		};
		var phoneTax = calculateTax(purchaseAmount);
		var totalPhoneCost = purchaseAmount + phoneTax;
		if (bankBalance > totalPhoneCost) {
			bankBalance -= totalPhoneCost;
			totalPhonesBought++;
			console.log(prettyPrintPrice(totalPhoneCost));
		}
		else{
			break;
		}
	}
	console.log("Total phones bought: "+totalPhonesBought);
}

buyPhoneAndAccessoriesTillThresholdLimit();