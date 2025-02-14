import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Swiper 9.x+

export const productSliderConfig = {
    modules: [Navigation, Pagination, Autoplay],
    effect: 'slide',
    autoplay: { delay: 5000, disableOnInteraction: false },
    spaceBetween: 25,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
        300: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 25 },
        1280: { slidesPerView: 4, spaceBetween: 25 },
    },
    speed: 1000,
};