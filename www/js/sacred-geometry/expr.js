
define( function() {
	return function Expr(Args) {
		if( Args.length === 1 ){
//			console.log("Create expr! value:"+Args)
			this.value=Number(Args);
//			this.value=Args;
		}else{
//			console.log("I Create expr! left:"+Args[0].value+" op:"+Args[1]+"   rigth:"+Args[2].value+"    this.value:"+this.value+"   this.op:"+this.op)
			this.left=Args[0];
			this.right=Args[2];
//			this.left=Object.create(Args[0]);
//			this.right=Object.create(Args[2]);
			this.op=Args[1];
			if( Args[1]==='+' ){
				//this.value=Number(this.left.value) + Number(this.right.value);
				this.value=this.left.value + this.right.value;
			}
			if( Args[1]==='-' ){
				//this.value=Number(this.left.value) - Number(this.right.value);
				this.value=this.left.value - this.right.value;
			}
			if( Args[1]==='*' ){
//				this.value=Number(this.left.value) * Number(this.right.value);
				this.value=this.left.value * this.right.value;
			}
			if( Args[1]==='/' ){
//				this.value=Number(this.left.value) / Number(this.right.value);
				this.value=this.left.value / this.right.value;
			}
//			console.log("F Create expr! left:"+Args[0].value+" op:"+Args[1]+"   rigth:"+Args[2].value+"    this.value:"+this.value+"   this.op:"+this.op)
		}
		this.to_str=function(){
			if( this.op ){
				return "("+this.left.to_str()+this.op+this.right.to_str()+")";
			}
			return ""+this.value;
		};

	};
});

