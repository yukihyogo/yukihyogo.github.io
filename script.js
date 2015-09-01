$(function(){
    var box = $("#menu-wrap");
    var boxTop = box.offset().top;
    var boxBottom = boxTop + box.height();    
    var topBtn = $('#page-top');    
    var topBtnTop = topBtn.offset().top;
    topBtn.hide();
    var topBtnShowScroll = boxBottom - topBtnTop;
    
    var windowWidth = $(window).width();
    
    $(window).scroll(function () {
        if($(window).scrollTop() >= topBtnShowScroll) {
            topBtn.fadeIn();
            if(windowWidth >= 768) {
                if($(window).scrollTop() >= boxTop) {
                    box.addClass("fixed");
        			$("body").css("margin-top","40px");
                } else {
                    box.removeClass("fixed");
        			$("body").css("margin-top","0px");
                }
            }
        } else {
            topBtn.fadeOut();
        }
    });
    
	var speed = 300;    //スクロールの速さ
	
    //ページ内リンクにスクロールで移動
	$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position;
//        var position = target.offset().top;
		if(windowWidth >= 768) {
//		    position = position - box.height();  // メニューバーの幅を考慮
		    position = target.offset().top - box.height();  // メニューバーの幅を考慮
		} else {
		    position = target.offset().top;
		}
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});    
    
    //contact submitボタン
    var subBtn = $("#submit-inputInquiry");
    subBtn.click(function(){
        window.alert('送信機能は未実装です。');
        return false;
    });
    
    //スクロールしてトップに移動
    topBtn.click(function () {
        $('body,html').animate({scrollTop: 0}, speed);
        return false;
    });
});

