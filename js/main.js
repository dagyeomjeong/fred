AOS.init({
       duration: 1000,
});


//banner
const banner_list = new Swiper(".banner_list", {
       loop: true, // 슬라이드 반복
       pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
       }
});

//menu
const menu_list = new Swiper(".menu_list", {
       slidesPerView: 1.5, //짝수로 하게 되면 절반 절반 짤려 보임
       breakpoints: {
              750: {
                     slidesPerView: 2.5,
              },
              1200: {
                     slidesPerView: 4,
              },
       },
       centeredSlides: true, //기본값 false
       loop: true, //슬라이드 반복
       autoplay: { //자동슬라이드
              delay: 3000, //2.5초 대기시간 밀리세컨 사용.. 5초=5000
              disableOnInteraction: false,//스와이프 후 자동 재생시간이 비활성화 되지 않음
       },
});


