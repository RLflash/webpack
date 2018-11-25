/*搴曢儴nav鍒囨崲(鏈�-鐐瑰嚮)*/
import $ from "./jquery-3.3.1.min.js"
var bottomTabArrOne = [
	"img/bottomNav/2018111911.png",
	"img/bottomNav/2018111921.png",
	"img/bottomNav/2018111931.png",
];
/*搴曢儴nav鍒囨崲(宸�-鐐瑰嚮)*/
var bottomTabArrTwo = [
	"img/bottomNav/2018111912.png",
	"img/bottomNav/2018111922.png",
	"img/bottomNav/2018111932.png",
];

$(document).ready(function() {
	/*搴曢儴瀵艰埅鏍�=> 鍒囨崲*/
	/*style鍒濆鍖�*/
	for(var i = 0; i < $('.bottomNavWrap .bottomNavTerm').length; i++) {
		/*icon*/
		$('.bottomNavWrap .bottomNavTerm').eq(i).find('.bottomNavIcon').attr('src', bottomTabArrOne[i]);
		/*text*/
		$('.bottomNavWrap .bottomNavTerm').eq(i).find('.bottomNavTitle').addClass('bNavNoFontColor').removeClass('bNavYseFontColor');
	}
	var thisInd = Number($.trim($('.pageTopTitle').attr('page-id')));
	/*褰撳墠=> 鏇挎崲*/
	$('.bottomNavWrap .bottomNavTerm').eq(thisInd).find('.bottomNavIcon').attr('src', bottomTabArrTwo[thisInd]);
	$('.bottomNavWrap .bottomNavTerm').eq(thisInd).find('.bottomNavTitle').addClass('bNavYseFontColor').removeClass('bNavNoFontColor');

	/*鑾峰彇鐒︾偣*/
	$('input').focus(function(){
		/*搴曢儴瀵艰埅鏍�*/
		$('.bottomNavWrap').hide();
	})
	/*澶卞幓鐒︾偣*/
	$('input').blur(function(){
		/*搴曢儴瀵艰埅鏍�*/
		$('.bottomNavWrap').show();
	})
})