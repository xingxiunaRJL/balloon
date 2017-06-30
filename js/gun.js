;(function(){
	//枪
	var gun = {
		ele : document.createElement('div'),
		moveTo : function( x, y){
			this.ele.style.left = x - 96/2 +'px';
			this.ele.style.top = y - 96/2 +'px';
		},
		init : function(){
			var that = this;
			this.ele.className = 'gun';
			document.body.appendChild(this.ele);
		}
	}
	window.gun = gun;
})();
