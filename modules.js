function notSoUsefulFunction(){
	var someArray = [1,2,3,4,5];
	var something = "something something";

	function doSomething(){
		console.log(something);
	}

	function doSomethingElse(){
		console.log(someArray);
	}
}
x = notSoUsefulFunction();

function coolModule(){
	var something = 'something something';
	var counter = 0;
	function doSomething(){
		console.log(something);
	}
	function incrementCounter(){
		counter++;
		console.log(counter);
	}
	return {
		doSomething: doSomething,
		incrementCounter: incrementCounter
	};
}

var more = coolModule();
more.doSomething();
more.incrementCounter();
var notModifiedByPreviousFunction = coolModule();
notModifiedByPreviousFunction.incrementCounter();

var singletonCounter = (function singleton(){
	var counter=0;
	function incrementCounter(){
		counter++;
		console.log(counter);
	}
	return {
		incrementCounter: incrementCounter
	}
})();
singletonCounter.incrementCounter();