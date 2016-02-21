function printA(){
	console.log('The value of a is ', this.a);
}
var simpleObject = {
	a: 234,
	printA: printA
}

simpleObject.printA();