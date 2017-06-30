;(function(){
	//设置随机取分值
	function getR(m,n){
		var r = Math.random(m,n);
		return Math.round( r*(n - m) + m);
	}
	window.getR = getR;
})();
