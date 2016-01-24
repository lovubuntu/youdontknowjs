setTimeout(function hello(){console.log('inside hello');},1000);
setTimeout(function hello(){console.log('rendu');});
console.log('outside');
for (var i = 0; i < 100000; i++) {
	console.log('i');
};


[1,2,3,4].forEach(function(k){
	console.log(k);
})

function asyncForEach(array, cb){
	array.forEach(function(j){
		i = j;
		console.log(j);
		setTimeout(cb,0);
	})
}
asyncForEach([1,2,43,4], function(i){
	console.log(i);
})

function hello(){
	console.log('inside hello');
}
function beforeHello(){
	console.log('am before beforeHello');
}
setTimeout(hello, 2000);
setTimeout(beforeHello, 1000);