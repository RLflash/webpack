//重新封装过的AJAX
import $ from "./jquery-3.3.1.min.js"
var host="https://kiss.qblove520.com/index.php/"
export var post = function (ApiNme, Data, request, Success, _error) {
    $.ajax({
        url: host+ApiNme,
        data: Data,
        cache: false,
        contentType: false,
        processData: false,
        type: request,
    　	dataType:'json',  
        success: function(data){
        	islogin(data.code);
        	Success(data);
        },
        error: _error || function(){}
    });
}
var islogin=function islogin(codeid){
	if(codeid==1001){
		window.location.href="http://kiss.qblove520.com/m/signin.html";
		return false;
	}
}
//正则判断
var Regex = {
    isPhone: function (s) {
        return /^1\d{10}$/.test(s);
    },
    isnull:function(s){
    	return /^\s*$/.test(s);
    },
    isEmail: function (s) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(s);
    },
    ismoney:function(s){
    	return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(s);
    }
}
//提示
function ShowErrorBox(text,time) {
  if(time==undefined||time==null||time==""){
  	time=500
  }
  $('body').append('<div class="popbox">'+text+'</div>');
	setTimeout(function(){
		$('.popbox').fadeOut('fast',function () {
	        $('.popbox').remove();  
	    })
	},time)
    $('#ErrorBox').fadeIn(100);
}
//时间
//时间戳转换 date:时间戳,format:时间格式(列：Y年M-D h:s:m',Y年M-D h秒);
//Y:年,M:月,D:天,h:时,s:分,m:秒
var formDate=function(date,format){
	var time=new Date(date),
		changetime="";
	var timeobj = {
		'Y':time.getFullYear(),
	    'M':(time.getMonth() + 1)<10?'0'+(time.getMonth() + 1):time.getMonth() + 1,
	    'D':time.getDate()<10?'0'+time.getDate():time.getDate(),
	    'h':time.getHours()<10?'0'+time.getHours():time.getHours(),
	    'm':time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes(),
	    's':time.getSeconds()<10?'0'+time.getSeconds():time.getSeconds()
  };	
  	var formatobj={
  	'Y':function(){
  			return timeobj.Y
  		}(),
  	'M':function(){
  			return timeobj.M
  		}(),
  	'D':function(){
  			return timeobj.D
  		}(),
  	'h':function(){
  			return timeobj.h
  		}(),
  	'm':function(){
  			return timeobj.m
  		}(),
  	's':function(){
  			return timeobj.s
  		}()
  	}
  	format.replace(/[a-zA-Z]/g,function(tchar,tcharind){ 
		var suffix=format.substr(tcharind+1,1)	
			changetime+=formatobj[tchar]+suffix
   })
	return changetime
}