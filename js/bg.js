;(function(){
	//body背景
	var bg = {
		imgsrc : 'url(img/bg.jpg)',
		init : function(){
			document.body.style.backgroundImage = this.imgsrc;
			document.body.style.backgroundRepeat = 'no-repeat';
			document.body.style.backgroundSize = '100% 100%';
		},
		changeBg : function( newImgsrc ){
			this.imgsrc = newImgsrc;
			this.init();
		}
	}
	window.bg = bg;
})();
