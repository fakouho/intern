function loadHTML(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(err => console.error('Failed to load', err));
}

// 각 섹션을 로드하여 index.html에 삽입
loadHTML('header', 'heder.html'); // 헤더 로드
loadHTML('banner', 'banner.html'); // 배너 로드
loadHTML('movie', 'movie.html'); // 무비 섹션 로드

var swiper = new Swiper('.swiper-container',
{
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
});

//영화차트 이미지 슬라이드
var swiper = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
});

//영화 차트 탭메뉴
var movBtn = $(".movie_title > ul > li");    
var movCont = $(".movie_chart > div");  

movCont.hide().eq(0).show();

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);         
    var index = target.index();  
    movBtn.removeClass("active");   
    target.addClass("active");    
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});