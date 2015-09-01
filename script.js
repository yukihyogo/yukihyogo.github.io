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
		if(windowWidth >= 768) {
		    position = target.offset().top - box.height();              // メニューバーの幅を考慮
		} else {
		    position = target.offset().top;
		}
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});    
    
    //スクロールしてトップに移動
    topBtn.click(function () {
        $('body,html').animate({scrollTop: 0}, speed);
        return false;
    });
});

