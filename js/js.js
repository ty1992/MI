$(function() {
	// 购物车
	$('.head-in .center,.head-in .center img').mouseover(function(event) {
		$(this).children('a').css({background:'#fff',color:'#FF6700'});
		$('.head-in .tupian').css({display:'blcok'}).stop().hide().slideDown(200);				
	});
	$('.head-in .center').mouseout(function(){
		$(this).children('a').css({background:'#424242',color:'#B0B0B0'});
		$('.head-in .tupian').css({display:'none'}).stop().hide().slideUp(200);
	});

	
	// 搜索栏
	$('.sousuo input').focus(function(){
		$(this).siblings('ul').stop().fadeOut(30);
	}).blur(function(){
		$(this).siblings('ul').stop().fadeIn(30);
	})
	// 导航的下拉列表
	// $('.nav-r li').mouseover(function(){
	// 	var index=$(this).index();
	// 	// console.log('ok');
	// 	$('.nav .nav-down li').eq(index).css({display:'block',}).stop().hide().slideDown(300).siblings('li').css({display:'none'});
	// }).mouseout(function(){
	// 	$('.nav .nav-down li').slideUp(300);
	// })
	$('.nav-r li').mouseover(function(){
		var index=$(this).index();
		if(index<6){
			$('.nav-down').css({display:'block'}).hide().stop().slideDown(200);
		}
		
	});
	$('.nav-r li').mouseout(function(){
		$('.nav-down').stop().slideUp(200)
	})
	// 更多
	$('.yingjian .r').mouseover(function(){
		$(this).addClass('current');
	}).mouseout(function(){
		$(this).removeClass('current');
	})
	// 鼠标经过左边导航栏
	$('.daohang  .dao-left').mouseover(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
	}).mouseout(function(){
		$(this).removeClass('current')
	})
	// 鼠标经过banner下的i标签
	$('.banner i').hover(function(){
		$(this).addClass('current');
	},function(){
		$(this).removeClass('current');
	})

	// banner
	$('.banner ol li').click(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
		var index=$(this).index();
		num=index;
		$('.banner .banner').stop().animate({left:-index*1226},1000);
	})

	function autoplay(){
		num++;
		if(num>4){
			num=0;
		}
		$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');
		$('.banner .banner').stop().animate({left:-num*1226},1000);
		}
	function pverplay(){
	num--;
	if(num<0){
		num=4;
	}
	$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');
	$('.banner .banner').stop().animate({left:-num*1226},1000);
	}
	function fn(){
		num1++;
		if(num1>1){
			num1=0;
		}
		$('.box ul').stop().animate({left:-num1*1240},1000);
		$('.box i').eq(num).addClass('current').siblings('i').removeClass('current');
	}
	// var timer=null;
	var timer=null;
	var num=0;
	// 自动播放
	timer=setInterval(autoplay,5000);	
	var timer1=null;
	var num1=0;
	timer1=setInterval(fn,3000);
	// 鼠标移上事件
	$('.banner').hover(function(){
		clearTimeout(timer);
	},function(){
		clearTimeout(timer);
		timer=setInterval(autoplay,5000);
	})
	$('.banner .right').click(function(){
		autoplay();
	})
	$('.banner .left').click(function(){
		pverplay();
	})
	// 明星产品
	$('.box .left').click(function(){
			$(this).addClass('current').siblings('i').removeClass('current');
			$('.box ul').stop().animate({left:0},500);
	})
	$('.box .right').click(function(){
		$('.box ul').stop().animate({left:-1240},500);
		$(this).addClass('current').siblings('i').removeClass('current');
	})
	// 当鼠标经过硬件下的li时，.fd显示
	$('.yingjian .right li').hover(function() {
		$(this).children('.fd').css({bottom:0}).hide().slideDown(100);
	}, function() {
		$(this).children('.fd').slideUp(100);
	});

	



	// 24小时在线客服
	$('.bangzhu-r span').mouseover(function(){
		$(this).css({background:'#FF6700',color:'#fff'})
	}).mouseout(function(){
		$(this).css({background:'#fff',color:'#FF6700'})
	})


	// 为你推荐自动播放
	tuijiantimer=null;
	tuijiannum=0;
	tuijiantimer=setInterval(function(){
		tuijiannum++;
		if(tuijiannum>1){
			tuijiannum=0;
		}
		$('.shikou ul').stop().animate({left:-tuijiannum*1226});
	},5000)
	// 鼠标获取input标签
	$('.sousuo .text').focus(function(){
		$(this).css({borderColor:'orange'});
		$('.sousuo .botton').css({display:'block'});
	})
	$('.sousuo .text').blur(function(){
		$(this).css({borderColor:'#e0e0e0'});
		$('.sousuo .botton').css({display:'none'});
	})
});