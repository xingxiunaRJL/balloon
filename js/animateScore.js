;(function(){
	//气球爆炸后的分数
	var animateScore = {
		ele : document.createElement('div'),
		init : function(){
			this.ele.innerHTML = '+0';
			this.ele.className = 'addscore';
			this.ele.addEventListener('animationend',function(){
				this.className = 'addscore';
			});
			document.body.appendChild(this.ele);
		},
		start : function(yourscore){
			this.ele.innerHTML = '+' +yourscore;
			this.ele.className = 'addscore move1';
		}
	}
	window.animateScore = animateScore;
})();
