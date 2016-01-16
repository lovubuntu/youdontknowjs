var a = 12;

foo();

function foo(){
	a = 432;

	console.log(a);

	var a;
}

console.log('Value outside');
console.log(a);


function scopeTest(){
	var a = 123;
	if(a > 120){
		var b = 10;
		while(b > 5){
			b--;
			var c = a * b;
			console.log(c);
		}
		console.log('all done');
		console.log(c);
	}
	console.log('Now its the turn of b');
	console.log(b);
}
scopeTest();


function scopeTest(){
	var a = 123;
	if(a > 120){
		let b = 10;
		while(b > 5){
			b--;
			let c = a * b;
			console.log(c);
		}
		console.log('all done');
		console.log(c);
	}
	console.log('Now its the turn of b');
	console.log(b);
}
scopeTest();


function User(){
var username,password;
	function login(user, key){
		username = user;
		password = key;
		console.log('User is trying to log in with username ' + username);
		console.log('And the password is *********');
	}
	function nextMethod(){
		console.log('I still hold '+ username);
	}
	var returnObject = {
		doLogin: login,
		nextStep: nextMethod
	};
	return returnObject;
}

var x = User();
x.doLogin('good','bad');
x.nextStep();


(function(){
"use strict"
function foo(){
	console.log(this.bar);
}

var bar = "hello global";
var obj1 = {
	bar: "obj1",
	foo: foo
}

var obj2 = {
	bar: "bar2"
}
foo();
obj1.foo();
foo.call(obj2);
new foo();})();