/* jshint evil: true */

"use strict";

require.config({
	"baseUrl": "www",
	"paths": {
		'jquery': 'thirdparty/jquery',
		'bootstrap': 'thirdparty/bootstrap/dist/js/bootstrap.min',
		'bootstrap-combobox': 'thirdparty/bootstrap-combobox/js/bootstrap-combobox',
		'yaap': 'thirdparty/yaap/yaap/yaap',
		'Sacred': 'js/sacred-geometry/main'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'bootstrap-combobox': {
			deps: ['jquery','bootstrap']
		}
	}
});

define(['jquery', 'Sacred', 'js/sacred-geometry/expr', 'bootstrap-combobox'],
function( $, Sacred, Expr ) {

describe("Testando o construtor",function(){
	it("Inicializar e destruir", function(){
		var SC = new Sacred();

		expect(SC).toBeDefined();

	});
});

describe("Testando os metodos",function(){
	var SC = new Sacred();
	it("Metodo que testa a quantidade de termos na equacao", function(){
		expect(SC.string_checker).toBeDefined();
	});
	it("Metodo para encontrar a solucao", function(){
		expect(SC.search_trees).toBeDefined();
	});
});

describe("Algumas entradas que devem ter solucao",function(){
	var SC = new Sacred();
	it("2 termos", function(){
		var current=[];
		current.push( new Expr([1]) );
		current.push( new Expr([1]) );
		var ret=SC.search_trees(current, [1], 2);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(2);

	});
	it("3 termos", function(){
		var current=[];
		current.push( new Expr([1]) );
		current.push( new Expr([1]) );
		current.push( new Expr([1]) );
		var ret=SC.search_trees(current, [3], 3);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(3);
	});
	it("Spell level: 4, Knowledge dice:[6, 6, 6, 6]:", function(){
		var current=[];
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		var ret=SC.search_trees(current.slice(), [37], current.length);
//		console.log(ret.to_str());
		expect(eval(ret.to_str())).toBe(37);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(current.length);
	});
	it("Spell level: 4, Knowledge dice:[6, 6, 3, 4, 1]:", function(){
		var current=[];
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([4]) );
		current.push( new Expr([3]) );
		current.push( new Expr([1]) );
		var ret=SC.search_trees(current, [37], 5);
//		console.log(ret.to_str());
		expect(eval(ret.to_str())).toBe(37);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(5);
	});
	it("Spell level: 9, Knowledge dice:[1 1 3 4 5 5 3 2 6 6]:", function(){
		var current=[];
		current.push( new Expr([1]) );
		current.push( new Expr([1]) );
		current.push( new Expr([5]) );
		current.push( new Expr([4]) );
		current.push( new Expr([6]) );
		current.push( new Expr([5]) );
		current.push( new Expr([3]) );
		current.push( new Expr([2]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		var ret=SC.search_trees(current.slice(), [101], current.length);
//		console.log(ret.to_str());
		expect(eval(ret.to_str())).toBe(101);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(current.length);
	});
	it("Spell level: 9, Knowledge dice:[2 1 1 1 3 3 4 1 6 4 5 2 2 6 6 5 4 2 3 4]:", function(){
		var current=[];
		current.push( new Expr([2]) );
		current.push( new Expr([1]) );
		current.push( new Expr([1]) );
		current.push( new Expr([1]) );
		current.push( new Expr([3]) );
		current.push( new Expr([3]) );
		current.push( new Expr([4]) );
		current.push( new Expr([1]) );
		current.push( new Expr([6]) );
		current.push( new Expr([4]) );
		current.push( new Expr([5]) );
		current.push( new Expr([2]) );
		current.push( new Expr([2]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([5]) );
		current.push( new Expr([4]) );
		current.push( new Expr([2]) );
		current.push( new Expr([3]) );
		current.push( new Expr([4]) );
		var ret=SC.search_trees(current.slice(), [101], current.length);
//		console.log(ret.to_str());
		expect(eval(ret.to_str())).toBe(101);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(current.length);
	});
	it("Spell level: 9, Knowledge dice:[6 6 6 6 6 6 6 6 6] (Hard and slow test):", function(){
		var current=[];
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		current.push( new Expr([6]) );
		var ret=SC.search_trees(current.slice(), [101], current.length);
//		console.log(ret.to_str());
		expect(eval(ret.to_str())).toBe(101);
		expect(ret).toBeDefined();
		expect(SC.string_checker(ret.to_str())).toBe(current.length);
	});
});

});

