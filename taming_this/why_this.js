function capitalize(){
	console.log('The value is ',this.name.toUpperCase());
}
var me = { name: "Miruthan"};
var you = { name: "Zombie"};

capitalize.call(me);
capitalize.call(you);
