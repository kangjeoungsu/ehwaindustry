document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        speed: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + ('0' + (index + 1)).slice(-2) + '</span>';
                }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        on: {
            slideChangeTransitionEnd: function() {
                swiper.autoplay.start(); // 슬라이드 변경 후 autoplay 재시작
            }
        }
    });
});