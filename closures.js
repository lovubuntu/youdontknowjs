for(var k = 0; k < 5; k++){
	setTimeout(function withoutClosure(){
		console.log("I'm not inside closure. So my I value will always be Five - ", k);
	}, k*1000);
}

for (var j = 0; j <= 5; j++) {
	(function closure(){
		setTimeout(function withClosure(){
			console.log('state is still not maintained in closure ',j);
		}, j*1000);
	})()
};

for (var m = 0; m < 5; m++) {
	(function closureWithState(){
		var n = m;
		setTimeout(function statefulClosure(){
			console.log('Successful state with each block own copy of variable', n);
		}, n*1000);
	})();
};

for (var p = 0; p < 5; p++) {
	(function slightlyVariedClosureArgumentPassing(q){
		setTimeout(function closureWithArgument(){
			console.log('using the passed variable ', q);
		}, q*1000);
	})(p);
};

for (var a = 0; a < 5; a++) {
	let u = a;
	setTimeout(function whyDoYouNeedIIFEWhenYouHaveLetForScoping(){
		console.log('block scope is maintained in let - ',u);
	}, u*1000);
};

for (let b = 0; b < 5; b++) {
	setTimeout(function directLetInsteadOfVar(){
		console.log('you can print values without IIFE if you have let', b);
	}, b*1000);
};