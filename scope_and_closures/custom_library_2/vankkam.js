var myModules = function (){
	var modules = {};
	function define(name, dependencies, impl){
		for (var i = 0; i < dependencies.length; i++) {
			dependencies[i] = modules[dependencies[i]];
		};
		modules[name] = impl.apply(impl, dependencies);
	}
	function get(name){
		return modules[name];
	}
	return {
		define: define,
		get: get
	};
}();


myModules.define("base", [], function(){
	function vanakkam(thangalPeyar){
		return "vanakkam " + thangalPeyar;
	}
	return {
		vanakkam: vanakkam
	};
});

myModules.define("upper", ["base"], function(){
	function periyaVanakkam(){
		console.log(base.vanakkam("naattamai").toUpperCase());
	}
	return {
		periyaVanakkam: periyaVanakkam
	};
});

upper = myModules.get('upper');
base = myModules.get('base');

console.log(base.vanakkam('panchayat periyavarhalae'));
upper.periyaVanakkam();