
//meun
$('.header .meun,.clode_burger').click(function () {
    $('#content').toggleClass('on');
    $('.burger').slideToggle()
    $('#content').css({ 'height': $(window).height() })
})
//search
$('.header .seach_btn,.search_wrap .back,.search_wrap .close_search').click(function () {
    $('.search_wrap').slideToggle()
})

//index.htmll slid
if ($('#hd_wrap').size()==1) {
    $('.hd_wrap').show();
    var swiper = new Swiper('#hd_wrap', {
        slidesPerView: 3,
        spaceBetween: 6,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

//Up
$(window).scroll(function () {
    var scroll_len = $(window).scrollTop();
    if (scroll_len > 300) {
        $('#Top').fadeIn();
    } else {
        $('#Top').fadeOut();
    };
})
$('#Top').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
})

//分页
$(".page>span").click(function () {
    $(this).children("div").show();
})
$(document).click(function () {
    $(".page>span .cbtn").css("display", "none");
})
$(".page>span .cbtn,.page>span").click(function (event) {
    event.stopPropagation();
});
//nav 
$(function(){
    if($('.nav').size()>=1){ 
        var onleft_ = $('.nav .on').offset().left 
        var w_ =$(window).width()/2;  
        if(w_<=onleft_){ 
            $(".nav").scrollLeft((onleft_- w_)); 
        } 
    }
})

//文字提示弹窗 自动关闭
window.tipsmsg = function (txt) {
    if($('.tips_wind').size()<=0){
        $('body').append('<div class="tips_wind"><span>'+txt+'</span></div>')
        $('.tips_wind').fadeIn()
        setTimeout(function () {
            $('.tips_wind').fadeOut(function () {
                $('.tips_wind').remove()
            });
        },1000)
    }
}
