function pollutingNamespaceByFunction(){
	var a = 3;
	function pollutingFunction(){
		var a = 2;
		console.log('But variable not polluted '+a);
	}
	pollutingFunction();
	console.log(a);
}

pollutingNamespaceByFunction();

function fnWithExpression(){
	var a = 3;
	(function immediatelyInvokedFunctionExpressionVariation1(){
		var a = 2;
		console.log('I\'m not polluting the global namespace by my function name');
		console.log(a);
	})();
// 	No need to call the function since it is an expression
	(function immediatelyInvokedFunctionExpressionVariation2(){console.log('Hi');}())
	console.log(a);
}
fnWithExpression();