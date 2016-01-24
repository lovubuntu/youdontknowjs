function nothingUsefulFunction(){
	var someArray = [1,2,3,4,5];
	var something = "something something";

	function doSomething(){
		console.log(something);
	}

	function doSomethingElse(){
		console.log(someArray);
	}
}
x = nothingUsefulFunction();

function coolModule(){
	var someArray = [1,3,4,5,6];
	var something = 'something something';
	function doSomething(){
		console.log(something);
	}
	function doSomethingElse(){
		console.log(someArray);
	}
	return {
		doSomething: doSomething,
		doSomethingElse: doSomethingElse
	};
}

var more = coolModule();
more.doSomething();
more.doSomethingElse();