import $ from "./jquery-3.3.1.min.js"
import {post} from "./public.js"
import "./rem.js"
import "./popupJs.js"
import "./bottomNavJs.js"
import "./alertWrap.css"
import "./public.css"
import "./bottomNav.css"
	$(function(){
				var islock=true
				post("index/reverse?type=0",null,"GET",function(data){
					if(data.code==1){
						$('#thisQuota').html(data.data.credit1);
					}else{
						ShowErrorBox(data.msg);
					}
				})
				/*输入对转账号=>ajax*/
				$('#turnAccount').blur(function() {  
					post("index/reverse?type=1&account="+$('#turnAccount').val(),null,"GET",function(data){
						if(data.code==1){
							var username=data['data']['nickname']==null?'':data['data']['nickname'];
							$('#reverseUser').html('对转人姓名:'+username);	
						}else{
							$('#reverseUser').html('对转人姓名:');	
							ShowErrorBox(data.msg);
						}
						
					})
				})
				//
				$("#putForward").click(function(){
					if(!islock){
						ShowErrorBox("请勿频繁提交！");
						return false
					}
					if(Regex.isnull(turnAccount.value)){
						ShowErrorBox("填写对转账号！");
						return false
					}
					if(!Regex.ismoney(amountOfMoney.value)){
						ShowErrorBox("输入金额格式不对！");
						return false
					}
					islock=false
					var formData =new FormData();
					formData.append("account",turnAccount.value);
					formData.append("credit1",amountOfMoney.value);
					post("index/reverse",formData,"POST",function(data){
						if(data.code==1){
							ShowErrorBox(data.msg,1000);
							setTimeout(function(){
								window.location.href="./index.html"
							},1000)
						}else{
							ShowErrorBox(data.msg);
							setTimeout(function(){
								islock=true
							},1000)
						}
						
					},function(){
						ShowErrorBox(data.msg);
						setTimeout(function(){
							islock=true
						},1000)
					})

				})
			})