var MyLibrary = (function MyModules(){
	var modules = {};
	function define(name, dependencies, implementation){
		for (var i = 0; i < dependencies.length; i++) {
			dependencies[i] = modules[dependencies[i]];
		};
		modules[name] = implementation.apply(implementation, dependencies);
	}

	function get(name){
		return modules[name];
	}
	return {
		get: get,
		define: define
	}
})();

MyLibrary.define("aadhi", [], function(){
	function ezhuthukkalinThodakkam(startsWith){
		console.log('Letters begin with ', startsWith);
	}
	return {
		ezhuthukkalinThodakkam: ezhuthukkalinThodakkam
	};
});

MyLibrary.define("bhagavan", ["aadhi"], function(){
	function muzhuMuthal(god){
		aadhi.ezhuthukkalinThodakkam("a");
		console.log('But world has its beginning from ', god);	
	}
	return{
		muzhuMuthal: muzhuMuthal
	};
});

var ezhuthukkal = MyLibrary.get("aadhi");
ezhuthukkal.ezhuthukkalinThodakkam("a");
var aadhiAntham = MyLibrary.get("bhagavan");
aadhiAntham.muzhuMuthal("kadavul");