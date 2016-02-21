function printA(){
	console.log('This is the value from ', this.a);
}

var a = 'something something';

var obj = {
	a: 234
};

var fun = function(){
	printA.call(obj);
}

fun();

printA.call(window);