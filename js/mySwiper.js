$(document).ready(function(){
    const swiper1 = new Swiper('.jew_box_container', {
        loop: false,
//        autoHeight: true,
        slidesPerView: 'auto',
        pauseOnFocus: false,
        breakpoints: {
            760:{
                allowTouchMove: false,
            }
        }
    });
    
    const swiper2 = new Swiper('.watch_box_container', {
        loop: false,
//        autoHeight: true,
        slidesPerView: 'auto',
        pauseOnFocus: false,
        breakpoints: {
            760:{
                allowTouchMove: false,
            }
        }
    });
});