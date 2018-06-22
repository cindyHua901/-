$(function(){
	//获取屏幕的宽度、高度
	var width = window.innerWidth;
	var height = window.innerHeight;
	//当前页数
	var nowpage = 0;
	//设置content的宽高
	$(".content").width(width);
	$(".content").height(height*4);
	//设置每一个页面的宽高
	$(".page").width(width);
	$(".page").height(height);
	//不是jqurey原生自带的，是引入的插件
	//手指触屏滑动时间
	$(".content").swipe({
		//分页功能
		swipe:function(event,direction,distance,duration,fingercount){
					if(direction=="up"&&nowpage!=3){
						nowpage++;
					}else if(direction=="down" &&nowpage!=0){
						nowpage--;
					}
//					console.log(direction);
					$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
						if(nowpage==1){
						$(".page2-farm").fadeIn(2000,function(){
							$(".page2-it").fadeIn(2000);
						});
						}
						if(nowpage==2){
							$(".page3-earlytitle").fadeIn(2000);
							$(".page3-bustitle").fadeIn(3000);
							$(".page3-bus").animate({left:"-100%"},{duration:2000});
							$(".page3-busAvatar").animate({right:"50%"},{duration:3000,complete:function(){
								$(".page3-bus").fadeOut();
								$(".page3-busAvatar").fadeOut("slow");
								$(".page3-busstation").fadeOut("slow");
								$(".page3-bustitle").fadeOut("slow");
								$(".page3-earlytitle").fadeOut("slow",function(){
									$(".page3-myteamwall").fadeIn("slow");
									$(".page3-myteamAvatar").fadeIn("slow",function(){
										$(".page3-myteamspace").animate({width:"30%"},{duration:400,complete:function(){
											$(".page3-myteamwhere").animate({width:"55%"},{duration:400})
										}})
									});
								});
							}});
						}
					}});
					
		}

	});
//	animate({要做的动画效果},{dura:动画时长,complete:动画执行完了要做的事})
	
});
$(".page1-Buiding").fadeIn(400,function(){
	$(".page1-Fligth").animate({width:70+"%"},{duration:2000});
});

$(".page4-ligthoff").click(function(){
	$(this).attr("src","img/lightOn.png");
	$(".page4-ligthoff").fadeOut("slow");
	$(".page4-clickGuide").fadeOut("slow");
	$(".page4-ligthoffbg").fadeOut("slow");
	$(".page4-lastbustitle").fadeOut("slow");
	$(".page4-ligthon").fadeIn("slow");
	$(".page4-ligthonbg").fadeIn("slow");
	
})
//等文件完成之后再执行js代码
//$(document).ready(function(){
//	
//})
//完成fadein后需要完成的事
	
