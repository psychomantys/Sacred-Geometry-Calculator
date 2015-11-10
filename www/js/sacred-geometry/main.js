
function indexOfExt(list, item) {
	var keys = Object.keys(list);
	for (var i = 0; i < keys.length ; i++){
		if( list[keys[i]]===item ){
			return keys[i];
		}
	}
	return -1;
}

define( function() {
	return function Yuri() {
	
		this.code_string=function( temp ){
			var saida=[];
			temp=temp.split("");
			temp.reverse();
			for(i=0; i<temp.length ; ++i){
				saida[i]=this.d2h(this.tabela[temp[i]]-i+temp.length);
			}
			return saida;
		};

		this.decode_string=function( temp ){
			var saida=[];
			var inp=temp.split(" ");
			for(i=0; i<inp.length ; ++i){
				var num=parseInt(inp[i],16)+i-inp.length;
				if( num<0 ){
					num=256+num;
				}
				saida[i]=indexOfExt( this.tabela, num );
			}
			saida.reverse();
			return saida;
		};

		this.d2h=function(d){
			if( d>=256 ){
				d=d-256;
			}
			if( 16>d ){
				return "0"+d.toString(16);
			}
			return d.toString(16);
		};
		this.h2d=function(h){
			return parseInt(h,16);
		};

		this.tabela={};

		var i=0;
		// de ' ate /
		for( i=0 ; i<10 ; ++i){
			this.tabela[String.fromCharCode('\''.charCodeAt()+i)]=this.h2d("A7")+i;
		}

		// de 0 ate 9
		for( i=0 ; i<10 ; ++i){
			this.tabela[String.fromCharCode('0'.charCodeAt()+i)]=this.h2d("B0")+i;
		}

		// de a ate z
		for( i=0 ; i<26 ; ++i){
			this.tabela[String.fromCharCode('a'.charCodeAt()+i)]=this.h2d("e1")+i;
		}

		// de A ate Z e depois de [ a `
		for( i=0 ; i<32 ; ++i){
			this.tabela[String.fromCharCode('A'.charCodeAt()+i)]=this.h2d("C1")+i;
		}

		// Codigo para ' '
		for( i=0 ; i<15 ; ++i){
			this.tabela[String.fromCharCode(' '.charCodeAt()+i)]=this.h2d("A0")+i;
		}
	};
});

