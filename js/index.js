import $ from "./jquery-3.3.1.min.js"
import {post} from "./public.js"

			$(function(){
				post('index/index',null,'GET',function(data){	
					$("#ktxye").html(data.data.user.credit1)
					$("#zsy").html(data.data.user.credit2)
					$("#today").html(data.data.user.today_income)
					var msgboxhtml="";
					
					$(data.data.announcement).each(function(index,data){
						msgboxhtml+='<p class="noticeDataTrem publicEllipsis" onclick="window.location.href=\'noticedetail.html?id='+data.id+'\'"><span>'+data.title+'</span><img class="publicRightImg" src="img/rightIcon.png"/></p>'
					})
					$("#gmsgbox").html(msgboxhtml)
				})
				
				/*退出 按钮*/
				$("#signOutBut").click(function(){
					post('login/outlogin',null,'GET',function(data){
						if(data.code==1){
							window.location.href="./signin.html"
						}else{
							ShowErrorBox(data.msg);
						}
					})
				})
			})
			/*自动播放公告-计数*/
			var count = 0;
			/*加载HTML完 => js*/	
			$(document).ready(function(){
				/*自动播放公告*/
				setInterval(function(){
					count++;
					if(count == $('.noticeDataTrem').length){
						count = 0;
					}
					$('.noticeDataTrem').hide();
					$('.noticeDataTrem').eq(count).fadeIn('show');
				}, 4000);
				/*滚动条=> 改变头部的背景颜色'去掉背景色'*/
				$(window).on("scroll", function(event){
					if($(window).scrollTop() <= 0 ){
						$('.headWrap').eq(0).removeClass('headWrapColorOrange');
					}else {
						$('.headWrap').eq(0).addClass('headWrapColorOrange');
					}
				})
				
				
			})
