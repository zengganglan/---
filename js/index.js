// function ScreenWidth() {      //获取屏幕尺寸，判断PC端或移动端
// 	if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
// 		//如果是移动端，则跳转到移动端对应的页面；否则，跳转到PC端对应的页面
// 		window.location.href = './phone.html';
// 		console.log(1)
// 	} else {
// 		// 如果是pc不用跳转 不然重复执行这个js代码  window.location.href = './index.html';
// 		console.log(2)
// 	}
// }
// window.onload = function () {
// 	ScreenWidth()
// }
$(function () {
	var myFullpage = new fullpage('#fullpage', {
		anchors: ['', 'page1', 'page2', 'page3','page4','page5','page6',''],
		menu: '#menu',
		// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		// navigation:true,
		slidesNavigation: true,
		css3: true,
		loopHorizontal: true,
	});
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环模式选项
		width: window.innerWidth,
		height: window.innerHeight,
		autoHeight: true, //高度随内容变化
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
		// autoplay: true,//
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// 如果需要滚动条
		// scrollbar: {
		//   el: '.swiper-scrollbar',
		// },
	})

	var mySwiper1 = new Swiper('.swiper-container1', {
		virtual: {
			slides: (function () {
				var slides = [];
				for (var i = 0; i < 600; i += 1) {
					slides.push('Slide ' + (i + 1));
				}
				return slides;
			}()),
		},
		slidesPerView: 3,
		spaceBetween: 30,
		effect: 'coverflow',
		pagination: {
			el: '.swiper-pagination1',
		},
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		//或者virtual: true,
	});

	var $part1NavList = $(".part1-nav-box").find(".box-list");
	var $part1NavListLi = $part1NavList.find("li");
	$part1NavList.each(function() {

		$(this).find("li").eq(0).addClass("on").stop(true, true).animate({
			width: 368
		}, 1000,"swing")
		$(this).find("li").eq(0).find(".part1-nav-list-tit-wrapper").stop(true, true).animate({
			width: 188
		}, 1000,"swing");
	});
	$part1NavListLi.hover(function() {
		// 原来csssli140 让兄弟元素恢复140 去掉on类名 把当前wrapper宽度设置 其他的为0 当前的li跨度加宽不是140
		$(this).addClass("on").siblings("li").removeClass("on").stop(true, true).animate({
			width: 140
		}, 1000,"swing");
		$(this).find(".part1-nav-list-tit-wrapper").stop(true, true).animate({
			width: 188
		}, 1000,"swing");
		$(this).addClass("on").siblings("li").find(".part1-nav-list-tit-wrapper").stop(true, true).animate({
			width: 0
		}, 1000,"swing");
		$(this).stop(true, true).animate({
			width: 368
		}, 1000,"swing")
	}, function() {
		// $(this).removeClass("on");
		// $(this).stop(true,true).animate({width:140},100)
	})
	// 适配
	 var width = $(window).width()
	if (width<700) {
		$('.nav').css({'display':'none'})
		$(".zhedie").click(function(){
			$('.nav').toggle()
			$(this).animate({right:80 },500,'swing')
		})
		$('.nav li').click(function(){
			$('.nav').toggle()
			$('.zhedie').animate({right:0 },500,'swing')
		})
		
	}
 
//  播放
// $('.btn').click(function(){
// 	console.log(1)
// 	$('.ifra').removeClass('hidden')
// 	$('.pause').css({'visibility':'hidden'})
// 	$('.btn').css({'display':'none'})
// 	// 不能操作不同域名的对象
// 	// $('.ifra').contents().find('.bilibili-player-video-state').click()
	
	
	
// })

$(document).bind("click",function(e){
	//id为menu的是菜单，id为open的是打开菜单的按钮            
	// if($(e.target).closest("#menu").length == 0 && $(e.target).closest("#open").length == 0){
	// //点击id为menu之外且id不是不是open，则触发
	// 	close();
	// }
})


 // 确认框：自定义内容格式，阻止onConfrim的执行
 $('.part3 .case img').click(function() {
	$.sendConfirm({
	  title: '详情介绍',
	  content: ' <img src="./img/asdasdasdasdas_0000_组-7-拷贝-5.png" alt="" style="height: 328px;width: 185px">',
	  button: {
		confirm: '确认',
		cancel: '取消'
	  },
	  width: 260,
	  onBeforeConfirm: function() {
		// onBeforeConfirm返回false，将阻止onConfirm的执行
		return false;
	  },
	  onConfirm: function() {
		console.log('点击确认！');
	  },
	  onCancel: function() {
		console.log('点击取消！');
	  },
	  onClose: function() {
		console.log('点击关闭！');
	  }
	});
  });


});




