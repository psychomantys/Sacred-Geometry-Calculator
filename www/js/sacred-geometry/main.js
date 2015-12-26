// aqui...
function removeItem(array, item){
	for(var i in array){
		if( array[i].value == item.value ){
			if( array[i].to_str()==item.to_str() ){
				array.splice(i,1);
				return 0;
			}
		}
	}
/*
	var index=array.indexOf(item);
	if( index!==-1 ){
		console.log("Removed..."+indexOfExt(array, item) );
		return array.splice(index,1);
	}
	console.log("Not Removed...");
	return array;
*/
}


function indexOfExt(list, item) {
	var keys = Object.keys(list);
	for (var i = 0; i < keys.length ; i++){
		if( list[keys[i]]===item ){
			return keys[i];
		}
	}
	return -1;
}


function combinations_of2(vec){
	var ret=[];
	for (var x=0 ; x<vec.length ; ++x){
		for (var i = 1+x; i < vec.length ; i++){
			if( vec[x].value !== undefined && vec[i].value !== undefined ){
				ret.push( [vec[x], vec[i]] );
			}
		}
	}
	
	return ret;
}

var OPS=['+','-','*','/'];

define(['js/sacred-geometry/expr'],
function( Expr ) {
	return function Sacred() {
		this.string_checker=function(string){
			return string.split(/[-+*/]+/).length;
		};
		this.search_trees=function(current, targets, numbers_size ){
			// current is the current set of expressions.
			// targets is the target numbers.
			// numbers_size is the number of dice used
			var comb=combinations_of2(current);
			for(var c=0 ; c<comb.length ; ++c ){
				var a=comb[c][1];
				var b=comb[c][0];

				removeItem(current,a);
				removeItem(current,b);

				for(var o=0 ; o<OPS.length ; ++o ){
					// Check if is commutative
					var conmut;
					if( OPS[o] == '-' || OPS[o] == '/' ){
						conmut = [ [a,b], [b,a] ];
					}else{
						conmut = [ [a,b] ];
					}
					for(var aabb=0 ; aabb<conmut.length ; ++aabb ){
						var aa=conmut[aabb][0];
						var bb=conmut[aabb][1];
						// Exclude non integer division and by zero
						if( OPS[o] == '/' && (bb.value === 0 || aa.value % bb.value !== 0) ){
							continue;
						}
						var e = new Expr([aa, OPS[o], bb] );
						// Founded the solution
						for(var target=0 ; target<targets.length ; ++target ){
							if( e.value == targets[target] && this.string_checker(e.to_str()) === numbers_size){
								return e;
							}
						}
						current.push(e);
						var ret=this.search_trees(current, targets, numbers_size);
						if( ret ){
							return ret;
						}
						// Do not forget to leave the set as it were before
						removeItem(current, e);
					}
				}
				current.push(b);
				current.push(a);
			}
			return undefined;
		};

	};
});

