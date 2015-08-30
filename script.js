$(function(){
    var box    = $("#menu-wrap");
    var boxTop = box.offset().top;
    var boxBottom = boxTop + box.height();    
    var topBtn = $('#page-top');    
    var topBtnTop = topBtn.offset().top;
    topBtn.hide();
    var topBtnShowScroll = boxBottom - topBtnTop;
    $(window).scroll(function () {
//        if($(window).scrollTop() >= topBtnTop - boxBottom) {
        if($(window).scrollTop() >= topBtnShowScroll) {
//        if($(window).scrollTop() >= 100) {
            topBtn.fadeIn();
            if($(window).scrollTop() >= boxTop) {
                box.addClass("fixed");
    			$("body").css("margin-top","40px");
            } else {
                box.removeClass("fixed");
    			$("body").css("margin-top","0px");
            }
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップに移動
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



/*
$(function(){
    var box    = $("#menu-wrap");
    var boxTop = box.offset().top;
    $(window).scroll(function () {
        if($(window).scrollTop() >= boxTop) {
            box.addClass("fixed");
			$("body").css("margin-top","40px");
        } else {
            box.removeClass("fixed");
			$("body").css("margin-top","0px");
        }
    });
});

$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが指定値に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
*/