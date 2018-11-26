/**
 * 介绍:动态创建(错误)对话框。
 * 
 * 第一参数:最外的边框=>$('');
 * 第二参数:icon路径=> img/icon.png
 * 第三参数:title标题
 * 第四参数:提示文本。
 * **/
function sAFail(_wrapper,_iconUrl,_title,_text){
	var strF ='';
	strF += '<div class="maskWrap">';						
		strF += '<div class="rightAndWrongWrap">';
			strF +='<div class="rightAndWrongBox">';
				strF +='<p class="rAndWBoxTop">';
					strF +='<img class="rAndWBoxTopIcon" src="'+ _iconUrl +'" />';
				strF +='</p>';
				strF +='<p class="rAndWBoxTitle">'+ _title +'</p>';
				strF +='<p class="rAndWBoxText">'+ _text +'</p>';
			strF +='</div>';
			strF += '<p class="rightAndWrongWrap-buttonWrap" onclick="thisButFail(true)">确定</p>';
		strF += '</div>';
	strF += '</div>';
		
	/*放在最外边框的第一位*/
	_wrapper.prepend(strF);
	/*获取(手机)遮罩层的height*/
	$('.maskWrap').css({
		'height': $(window).height(),
	});
	
	return false;
}
/**
 * 介绍:动态创建(成功)对话框。
 * 
 * 第一参数:最外的边框=>$('');
 * 第二参数:icon路径=> img/icon.png
 * 第三参数:title标题
 * 第四参数:提示文本。
 * 第五参数:返回上一页。默认false，返回true;
 * **/
function sASuccess(_wrapper, _iconUrl, _title, _text, _return){
	var strS ='';
	strS += '<div class="maskWrap">';						
		strS += '<div class="rightAndWrongWrap">';
			strS +='<div class="rightAndWrongBox">';
				strS +='<p class="rAndWBoxTop">';
					strS +='<img class="rAndWBoxTopIcon" src="'+ _iconUrl +'" />';
				strS +='</p>';
				strS +='<p class="rAndWBoxTitle">'+ _title +'</p>';
				strS +='<p class="rAndWBoxText" id="rAndWBText">'+ _text +'</p>';
			strS +='</div>';
			strS += '<p class="rightAndWrongWrap-buttonWrap" onclick="thisButSuccess(true,'+ _return +')">确定</p>';
		strS += '</div>';
	strS += '</div>';
	
	/*放在最外边框的第一位*/
	_wrapper.prepend(strS);
	/*获取(手机)遮罩层的height*/
	$('.maskWrap').css({
		'height': $(window).height(),
	});
	
	return false;
}

/**
 * 介绍:动态创建(警告)对话框。
 * 
 * 第一参数:最外的边框=>$('');
 * 第二参数:icon路径=> img/icon.png
 * 第三参数:title标题
 * 第四参数:提示文本。
 * **/
function warningAlert(_wrapper,_iconUrl,_title,_text,_returnW){
	/*开始赚钱调用*/
	/*删除=>(手机)遮罩层*/
	$('.maskWrap').remove();
	var strWarning = '';
	strWarning += '<div class="maskWrap">';			
		strWarning += '<div class="rightAndWrongWrap">';
			strWarning += '<div class="rightAndWrongBox">';
				strWarning += '<p class="rAndWBoxTop">';
					strWarning += '<img class="rAndWBoxTopIcon" src="'+ _iconUrl +'" />';
				strWarning += '</p>';
				strWarning += '<p class="rAndWBoxTitle">'+ _title +'</p>';
				strWarning += '<p class="rAndWBoxText">'+ _text +'</p>';
			strWarning += '</div>';
			strWarning += '<div class="rightAndWrongWrap-buttonWrap">';
				strWarning += '<p class="rightAndWrongWrap-buttonFalse" onclick="thisButton(false)">取消</p>';
				strWarning += '<p class="rightAndWrongWrap-buttonTrue" onclick="thisButton(true,'+ _returnW +')">确定</p>';
			strWarning += '</div>';
		strWarning += '</div>';
	strWarning += '</div>';
	
	/*放在最外边框的第一位*/
	_wrapper.prepend(strWarning);
	/*获取(手机)遮罩层的height*/
	$('.maskWrap').css({
		'height': $(window).height(),
	});
	
	return false;
}

/**
 * (错误)弹框=>确认按钮
 * **/
var errorData = null;
function thisButFail(_judge){
	errorData = _judge;
	/*删除 => 弹框*/
	$('.maskWrap').remove();
	console.log(_judge);
	return false;
}
/**
 * (成功)弹框=>确认按钮
 * _judge
 * **/
var successData = null;
function thisButSuccess(_judge,_return){
	var returnVal = _return || false;
	successData = _judge;
	/*删除 => 弹框*/
	$('.maskWrap').remove();
	/*调用弹窗函数，传的参=>返回上一个页面*/
	if(returnVal){
		window.history.back(-1);
	}
	console.log(_judge,'返回',returnVal);
	
	return false;
}
///**
//(警告)弹框=>确认按钮
// * **/
//var warningData = null;
//function thisButton(_judge,_returnW){
//	var returnWar = _returnW || false;
//	warningData = _judge;
//	/*删除 => 弹框*/
//	$('.maskWrap').remove();
//	/*跳转*/
//	if(returnWar){
//		window.history.back(-1);
//	}
//	console.log(_judge,'返回',returnWar);
//	return false;
//}
