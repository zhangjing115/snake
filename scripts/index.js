window.onload=function(){
	var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}],
	 RIGHT=39,LEFT=37,UP=38,DOWN=40,
	 dd=RIGHT,
			MAXSNAKE=100,
			ROW=10,
	 //MAXSNAKE=255,
	 //ROW=15;
	 SNAKECOLOR='#7adc55';
	 FOODCOLOR='#f8e982';
// -----------------------判断所投食物在不在蛇身上---------------
	var isInSnake=function(x,y){
		for(var i=0;i<snake.length;i++){
			if(snake[i].x==x&&snake[i].y==y){
				return true;
			}
		}
		return false;
	};
	random=function(){
		return Math.floor(Math.random()*ROW);
	};
	var dropFood=function(){
		var x=random();
		var y=random();
		//Warning:当蛇的数据占满整个页面的时候会陷入死循环
		if(snake.length==MAXSNAKE){
			alert('你超厉害的.....');
			return;
		}
		while(isInSnake(x,y)){
		 x=random();
		 y=random();
		}
		document.getElementById(x+'_'+y).style.backgroundColor=FOODCOLOR;
		return {foodx:x,foody:y};

	};
	var food=dropFood();

	// -----------------------------------------------------------------------------------------------------
	var drawSnake=function(){
		for(var i=0;i<snake.length;i++){
			document.getElementById(snake[i].x+'_'+snake[i].y).style.backgroundColor=SNAKECOLOR;
		}
	};
	drawSnake();
	 zou=function(dir){
	 	dd=dir;
	 	var last=snake.length-1;
	 	var newHead;
	 	if(dir==LEFT){
	 	 	newHead={x:snake[last].x,y:snake[last].y-1};	
	 	}
	 	if(dir==RIGHT){
	 		newHead={x:snake[last].x,y:snake[last].y+1};
	 	}
	 	if(dir==DOWN){
	 		newHead={x:snake[last].x+1,y:snake[last].y};
	 	}
	 	if(dir==UP){
	 		newHead={x:snake[last].x-1,y:snake[last].y};
	 	}
	 	if(newHead.x>9||newHead.x<0||newHead.y>9||newHead.y<0){
	 		alert('game over!');
	 		return;
	 	}
	 	if(isInSnake(newHead.x,newHead.y)){
	 		alert('咬自己干啥？');
	 		return;
	 	}
	 	if(newHead.x==food.foodx&&newHead.y==food.foody){
	 		snake.push(newHead);
	 		var tmp=document.getElementById(food.foodx+'_'+food.foody);
	 		tmp.style.background=SNAKECOLOR;
	 		food=dropFood();
	 		return;
	 	}
	 	var weiba=snake.shift();
	 	snake.push(newHead) ;
	 	
	 	var t=document.getElementById(weiba.x+'_'+weiba.y);
	 	t.style.backgroundColor='#A2895B';
	 	var h=document.getElementById(newHead.x+'_'+newHead.y);
	 	h.style.background=SNAKECOLOR;	 	
	 };
	 document.onkeydown=function(e){
	 	var d=e.keyCode;
	 	if(d==37||d==38||d==39||d==40){
	 		if(Math.abs(d-dd)!=2){
	 			zou(d); 
	 		}		
	 	} 	
	 };




// ---------------------------老师---------------------------
// var
//   snake = [ {x:0,y:0}, {x:0,y:1}, {x:0,y:2} ],
//   MAXSNAKE = 255,RIGHT = 39,LEFT = 37,UP = 38, DOWN = 40,
//   SNAKECOLOR='#7adc55',FOODCOLOR='#f8e982',DEFAULTCOLOR = '#A2895B',
//   ROW = 15,
//   defaultDirection = RIGHT,

//   isInSnake = function(x,y){
//     for ( var i = 0;  i < snake.length;  i++){
//       if(  snake[i].x == x && snake[i].y == y){return true;}
//     }
//     return false;
//   },
//   random = function(){
//     return Math.floor( Math.random()*ROW );
//   },
//   $ = function(id){
//     return document.getElementById(id);
//   },
//   join =function(f,s){
//     return f + '_' + s;
//   },
//   dropFood  = function(){
//     var
//     x = random(), y = random();
//     if( snake.length == MAXSNAKE ){return null;}
//     while( isInSnake(x,y) ){
//       x = random();
//       y = random();
//     }
//     $( join(x,y) ).style.background = FOODCOLOR;
//     return {x:x,y:y};
//   },
//   food = dropFood(),
//   zou = function(dir){
//     var last  = snake.length -1,newHead,weiba;
//     defaultDirection = dir;
//     if( dir== RIGHT ){newHead = {x:snake[last].x, y:snake[last].y+1};}
//     if( dir== LEFT  ){newHead = {x:snake[last].x, y:snake[last].y-1};}
//     if( dir== DOWN  ){newHead = {x:snake[last].x+1, y:snake[last].y};}
//     if( dir== UP    ){newHead = {x:snake[last].x-1, y:snake[last].y};}
//     if( newHead.x >14 || newHead.x <0 || newHead.y>14 || newHead.y <0){
//       alert('game over!'); return null;
//     }
//     if( isInSnake(newHead.x,newHead.y) ){
//       alert('game over!'); return null;
//     }
//     snake.push(newHead);
//     if(newHead.x == food.x && newHead.y == food.y){
//       $( join( food.x,food.y) ).style.background = SNAKECOLOR;
//       food = dropFood(); return null;
//     }

//     weiba = snake.shift();
//     $( join( weiba.x , weiba.y) ) .style.background  = DEFAULTCOLOR;
//     $( join( newHead.x , newHead.y) ).style.background = SNAKECOLOR;
//     return null;
//   };

//   //-----------------------------------------------------------------
//   (function(){
//     for ( var i = 0;  i < snake.length;  i++){
//       var div = $(join(snake[i].x ,snake[i].y));
//       div.style.background = SNAKECOLOR;
//     }
//   })();
//   document.onkeydown = function(e){
//     var direction = e.keyCode;
//     if( ( direction==LEFT ||
//           direction==UP   ||
//           direction==RIGHT||
//           direction==DOWN
//         ) &&
//         Math.abs( direction - defaultDirection) !== 2 ){
//         zou(direction);
//     }
//   };


	















// ============================================
	//点名册(空座位永远点不到)
	// while循环的一种用法
	var x=Math.floor(Math.random()*5);
	var y=Math.floor(Math.random()*10);
	var panduan=function(){
		if(x!=2&&y!=0){
			return true;}	
	};
	var dianming=function(){
		 panduan(x,y);
		 return {x:x,y:y};
	};
	console.log(dianming(x,y));

// -------------------------------------------------
	// var isKongZuoWei=function(){
		// 	if(x==2&&y==0){
		// 		return true;
		// 	}else{return false;}
	// };
	// var dianming=function(){
	// 	var x=Math.floor(Math.random()*5);
	// 	var y=Math.floor(Math.random()*10);
	// 	while( isKongZuoWei() ){
	// 		x=Math.floor(Math.random()*5);
	// 		y=Math.floor(Math.random()*10);
	// 	}
	// 	return {x:x,y:y};
	// };
	
	// console.log(dianming(x,y));

// ===============================================
	// 如果数组中有a:3,b:5 对象返回true没有返回false
	// var aaa=function(x,y){
	// 	var da=[{a:1,b:2},{a:3,b:5},{a:12,b:16}];
	// 	for(var i=0;i<da.length;i++){
	// 		if(da[i].a==x&&da[i].b==y){
	// 			return true;
	// 		}	
	// 	}
	// 	return false;
	// };
	// console.log( aaa(3,6) );
// ==================================================
// 去掉开头对象，再加一个对象
	// var arr=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	// fn=function(){
	// 	var c={};
	// 	arr.shift();
	// 	c.x=arr[arr.length-1].x;
	// 	c.y=arr[arr.length-1].y+1;
	// 	arr.push(c);
	// 	return arr;
	// };
	// fn();
	


	























};