function incorrectFnCounter(i){
    console.log('Executing times = ',i);
    this.count++;
}
incorrectFnCounter.count = 0;
for(var i=0;i<5;i++){
    incorrectFnCounter(i);
}
// Expected to hold the value 5 in incorrectFnCounter.count
console.log('Totally called function Counter = ', incorrectFnCounter.count);


function sideSteppingProblemWithDifferentVariable(j){
	console.log('Now the function is getting executed times = ', j);
	data.count ++;
}
var data = {
	count: 0
};
for (var i = 0; i <= 5; i++) {
	sideSteppingProblemWithDifferentVariable(i);
}
console.log('Totally called the function times = ', data.count);

function actualSolution(k){
	console.log('The fn gets  called times = ', k);
	this.count++;
}
actualSolution.count = 0;
for (var i = 0; i < 5; i++) {
	actualSolution.call(actualSolution, i);
}
console.log('Totally called the function times = ', actualSolution.count);