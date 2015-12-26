"use strict";

require.config({
	"baseUrl": ".",
	"paths": {
		'jquery': 'thirdparty/jquery',
		'bootstrap': 'thirdparty/bootstrap/dist/js/bootstrap.min',
		'bootstrap-combobox': 'thirdparty/bootstrap-combobox/js/bootstrap-combobox',
		'yaap': 'thirdparty/yaap/yaap/yaap',
		'Sacred': 'js/sacred-geometry/main',
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
		},
		'underscore': {
			exports: '_'
		}
	}
});


require(['jquery', 'Sacred', 'js/sacred-geometry/expr', 'bootstrap-combobox'],
function( $, Sacred, Expr ) {
	var SC = new Sacred();

	$( document ).ready( function() {
		$('.combobox').combobox();


		$('#dice_1').on('click', function(){
			var old=$('#input_seq').val();
			$('#input_seq').val(old+" 1");
		});
		$('#dice_2').on('click', function(){
			var old=$('#input_seq').val();
			$('#input_seq').val(old+" 2");
		});
		$('#dice_3').on('click', function(){
			var old=$('#input_seq').val();
			$('#input_seq').val(old+" 3");
		});
		$('#dice_4').on('click', function(){
			var old=$('#input_seq').val();
			$('#input_seq').val(old+" 4");
		});
		$('#dice_5').on('click', function(){
			var old=$('#input_seq').val();
			$('#input_seq').val(old+" 5");
		});
		$('#dice_6').on('click', function(){
			var old=$('#input_seq').val();
			$('#input_seq').val(old+" 6");
		});


		$('#go').on('click', function(){
			var dices=$('#input_seq').val().replace(/ +/g,' ').replace(/ +$/,'').replace(/^ */,'').split(' ');
			var spell_lvl=$('#spell_lvl').val();
			for(var x=0 ; x<dices.length ; ++x ){
				dices[x]=new Expr([ dices[x] ]);
			}
			var ret;
			if( spell_lvl==1 ){
				ret=SC.search_trees(dices, [3, 5, 7], dices.length);
			}else if( spell_lvl==2 ){
				ret=SC.search_trees(dices, [11, 13, 17], dices.length);
			}else if( spell_lvl==3 ){
				ret=SC.search_trees(dices, [19, 23, 29], dices.length);
			}else if( spell_lvl==4 ){
				ret=SC.search_trees(dices, [31, 37, 41], dices.length);
			}else if( spell_lvl==5 ){
				ret=SC.search_trees(dices, [43, 47, 53], dices.length);
			}else if( spell_lvl==6 ){
				ret=SC.search_trees(dices, [59, 61, 67], dices.length);
			}else if( spell_lvl==7 ){
				ret=SC.search_trees(dices, [71, 73, 79], dices.length);
			}else if( spell_lvl==8 ){
				ret=SC.search_trees(dices, [83, 89, 97], dices.length);
			}else if( spell_lvl==9 ){
				ret=SC.search_trees(dices, [101, 103, 107], dices.length);
			}
			if( ret ){
				$('#output').text(ret.to_str());
			}
		});

	});
});

