function printA(){
	console.log('The value of A is ', this.a);
}

var obj = {
	a: 8234,
	printA: printA
};

var secondObj = obj.printA;
var a = 'globally scoped value of A, This is something unexpected';
secondObj();