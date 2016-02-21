function printA(){
	console.log('The value of a is ', this.a);
}

var lastLevelGetsPrinted = {
	a: 999,
	printA: printA
};

var firstLevel = {
	a: 7167,
	lastLevelGetsPrinted: lastLevelGetsPrinted
};

firstLevel.lastLevelGetsPrinted.printA();