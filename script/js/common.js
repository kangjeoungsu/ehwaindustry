// 스크롤 헤더
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollPosition > 50) { // 스크롤 위치에 따라 클래스 추가
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
    