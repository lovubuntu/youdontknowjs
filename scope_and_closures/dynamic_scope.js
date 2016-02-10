function notDynamicInScope(){
	console.log("Javascript is not dynamic in scope by default",a);
}

function callPrintA(){
	var a = 23;
	notDynamicInScope();
}

var a = 89;
callPrintA();