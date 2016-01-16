function collision(){
	function bar(){
		i=3;
		console.log(i);
	}
	for (var i = 0; i <= 100; i++) {
		console.log(i);
		bar();
	};
}

function collisionAvoidedUsingVarDeclaration(){
	function bar(){
// 		Note the var declaration instead of just using it as in the previous case
		var i=3;
		console.log(i);
	}
	for (var i=0; i<10; i++){
		bar();
		console.log(i);
	}
}

var AwesomeLibraryAvoidingGlobalScope = {
	hello: "Thank you for using my library",
	print: function(){
		console.log(this.hello);
	}
}

collision();
collisionAvoidedUsingVarDeclaration();