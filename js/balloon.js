;(function(){
	//用来创建气球的构造器
	var position = ['0 0','-96px 0','-192px 0','-288px 0','0 -120px','-96px -120px','-192px -120px','-288px -120px']
	//创建气球的构造器
	function Balloon(){
		var that = this;
		//气球的属性
		//ele:显示气球的dom元素,创建元素
		this.ele = document.createElement('div');
		this.reBirth();
		document.body.appendChild(this.ele);
		//添加动画
		this.ele.addEventListener('animationend',function(){
			that.reBirth();
		})
	}
	//重生
	Balloon.prototype.reBirth  = function(){
		//气球的属性
		//分值。[1 , 8]。
		this.mark = getR(1,8);
		this.ele.className = 'balloon';
		this.ele.style.backgroundPosition = position[this.mark - 1];
		//x坐标。在游戏场景中水平方向的位置是随机的。
		this.x = getR(0,document.body.offsetWidth-96);
		//y坐标。从下面向上升。所以初始的y值是很大的一个值：让气球出现在屏幕的外面。
		this.y = getR(document.body.offsetHeight/2,document.body.offsetHeight/2+120);
		this.ele.style.left = this.x +'px';
		this.ele.style.top = this.y +'px';
	}
	Balloon.prototype.move = function(){
		//每一次调用move都改变一次气球的top值
		this.y -= this.mark;//每次调用,top值都减少对应的mark,用来实现分值越大,速度越快
		//判断如果气球飞出了屏幕(top(this.y)值为-120px),ze重生
//		if( this.y < -120 ){
//			this.reBirth();
//		}else{  //否则则设置其top值
//			this.ele.style.top = this.y + 'px';
//		}
		this.y < -120 ? this.reBirth() : this.ele.style.top = this.y + 'px';
	}
	window.Balloon = Balloon;
})()
