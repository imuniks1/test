import Swiper, { Autoplay} from "swiper";

window.onload = () => {
    Swiper.use([Autoplay]);
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

//    burger
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.header_r');

    burger.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            nav.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        else {
            this.classList.remove('active');
            nav.classList.remove('show');
            document.body.style.overflow = 'visible';
        }
    });
};