;(function(){
	//分数
	var score = {
		mark : 0,
		ele : document.createElement('div'),
		init : function(){
			this.ele.className = 'score';
			document.body.appendChild(this.ele);
			this.ele.innerHTML = this.mark;
		},
		add : function( yourScore ){
			this.mark += yourScore;
			this.ele.innerHTML = this.mark;
		}
	}
	window.score = score;
})();
