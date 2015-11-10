"use strict";

require.config({
	"baseUrl": ".",
	"paths": {
		'jquery': 'thirdparty/jquery',
		'Handlebars': 'thirdparty/handlebars',
		'bootstrap': 'thirdparty/bootstrap/dist/js/bootstrap.min',
		'bootstrap-combobox': 'thirdparty/bootstrap-combobox/js/bootstrap-combobox',
		'yaap': 'thirdparty/yaap/yaap/yaap',
		'Backbone': 'thirdparty/backbone',
		'underscore': 'thirdparty/underscore',
		'FileSaver': 'thirdparty/FileSaver',
		'Templates': 'js/epic-rpg-editor/templates',
		'DeT3EA': 'js/DeT3EA/DeT3EA'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'FileSaver': {
			exports: 'saveAs'
		},
		'Handlebars': {
			exports: 'Handlebars'
		},
		'Backbone': {
			exports: 'Backbone',
			deps: ['jquery','underscore']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'bootstrap-combobox': {
			deps: ['jquery','bootstrap']
		},
		'underscore': {
			exports: '_'
		}
	}
});


require(['jquery', 'bootstrap-combobox'],
function( $ ) {
//	var player = new DeT3EA();
//	Permutations:
//	http://jsfiddle.net/jinwolf/Ek4N5/29/

	$( document ).ready( function() {
		$('.combobox').combobox();
	});
});

