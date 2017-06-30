;(function(){
	//定义'总导演'的属性
	var game = {
		frameIndex:0,
		acts:[],  //所有演员,即页面中的元素
		amount:1, //气球的数量
		//加上爆炸气球对应的分数
		addScore:function(addScore){
			score.add(addScore);
		},
		start:function(){  //开始值
			bg.init();
			score.init();
			gun.init();
			animateScore.init();
			var that = this;
			var currentAmount = 0;//当前气球数量
			document.body.addEventListener('click',function(e){
				var a = new Audio('img/gun.mp3');
				a.play();
				var currentScore = 0;//当前点击获得的分数
				//找到所有气球,并计算与当前点的距离
				for( var i =0; i < that.acts.length; i++){
					var t = that.acts[i];
					//判断t的自有属性是否有mark
					if( t.hasOwnProperty('mark')){
						var cX = t.ele.offsetLeft + 96/2;
						var cY = t.ele.offsetTop + 96/2;
						//根据勾股定理判断是否被打中
						if( Math.pow(e.pageX - cX,2) + Math.pow(e.pageY - cY,2) < Math.pow(96/2,2)){
							game.addScore(t.mark);
							currentScore += t.mark;
							t.ele.className = 'balloon blow';
						}
					}
				}
				currentScore && animateScore.start(currentScore);
			});
			document.body.addEventListener('mousemove',function(e){
				gun.moveTo(e.pageX,e.pageY);
			})
			//游戏开始
			//创建3朵云
			for( var i = 0; i < 3; i++){
				that.acts.push( new Clound() );
			}
			setInterval( function(){
				that.frameIndex ++;
				//判断如果演员的length<7 (表示舞台最多显示几个演员) 并且  正好过了1秒(因为是每50毫秒加一个气球,所以20次正好是1秒)之后,就创建一个新气球
				if( currentAmount < 7 && that.frameIndex % 20 ==0){
					currentAmount++;
					that.acts.push( new Balloon() );
				}
				for( var i = 0; i < that.acts.length; i++){
					that.acts[i].move()
				}					
			},50)
		}
	}
	window.game = game;
})();
