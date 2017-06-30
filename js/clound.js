;(function(){
	//创建云朵的构造器
	function Clound(){
		//云朵的属性
		
		//ele:显示云朵的dom元素,创建元素
		this.ele = document.createElement('div');
		this.ele.className = 'clound';
		//速度
		this.speed = getR(1,3);
		
		//x坐标。在游戏场景中水平方向的位置是随机的。
		this.x = getR(0,document.body.offsetWidth);
		//y坐标。从下面向上升。所以初始的y值是很大的一个值：让气球出现在屏幕的外面。
		this.y = getR(10,50);
		this.ele.style.left = this.x +'px';
		this.ele.style.top = this.y +'px';
		document.body.appendChild(this.ele);
	}
	Clound.prototype.move = function(){
		//每一次调用move都改变一次气球的left值
		this.x -= this.speed;
//		if( this.x < -100 ){
//			this.x  = getR(document.body.offsetWidth,document.body.offsetWidth+100)
//		}
		this.x < -100 && getR(document.body.offsetWidth,document.body.offsetWidth+100);
		this.ele.style.left = this.x +'px';
	}
	window.Clound = Clound;
})();
