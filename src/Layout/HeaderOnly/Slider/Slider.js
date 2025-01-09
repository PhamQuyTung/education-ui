import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay, EffectCube, EffectCoverflow, EffectFlip } from 'swiper/modules'; // Import module Autoplay
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import Image from '~/components/Image';
import imagesContent1 from '~/assets/images/Slider/hero_thumb_1_1.png';
import imagesContent2 from '~/assets/images/Slider/hero_thumb_1_2.webp';
import imagesContent3 from '~/assets/images/Slider/hero_thumb_1_3.png';
import imagesContent6 from '~/assets/images/Slider/teacherandstudents.png';
import imagesShape1 from '~/assets/images/Slider/shape_1_1.png';
import imagesShape2 from '~/assets/images/Slider/shape_1_2.png';
import imagesShape4 from '~/assets/images/Slider/shape_1_3.png';
import imagesShape5 from '~/assets/images/Slider/shape_1_4.png';
import SliderContainer from '~/Layout/HeaderOnly/Slider/Container';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('slider')}>
            <div className={cx('wrapper')}>
                <div className={cx('background')}>
                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            EffectFade,
                            Autoplay,
                            EffectCube,
                            EffectCoverflow,
                            EffectFlip,
                        ]} // Đăng ký các module
                        // effect="fade" // Hiệu ứng mờ dần
                        // effect="cube" // Hiệu ứng cube
                        // effect="coverflow" // Hiệu ứng coverflow
                        // effect="flip" // Hiệu ứng flip

                        autoplay={{
                            delay: 5000, // Thời gian chuyển đổi (5 giây)
                            disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
                        }}
                        spaceBetween={50} // Khoảng cách giữa các slide
                        slidesPerView={1} // Số slide hiển thị cùng lúc
                        // navigation={false} // Hiển thị nút điều hướng
                        pagination={{ clickable: true }} // Bật nút phân trang
                        // scrollbar={{ draggable: true }} // Bật thanh cuộn kéo
                        speed={1000} // 1 giây
                        loop={true} // Lặp lại slider
                    >
                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Giáo dục là tạo ra"
                                contentTitle2="Tương lai"
                                contentTitle3="Tốt đẹp hơn"
                                subTitle="Giáo dục có thể được coi là sự truyền tải các giá trị và kiến ​​thức tích lũy của xã hội. "
                                imgFooter={imagesContent1}
                            />

                            {/* hero shape */}
                            <div className={cx('hero-shape')}>
                                <div className={cx('shape-1')}>
                                    <Image src={imagesShape1} alt="shape1" />
                                </div>
                                <div className={cx('shape-2')}>
                                    <Image src={imagesShape2} alt="shape2" />
                                </div>
                                <div className={cx('shape-3')}></div>
                                <div className={cx('shape-4')}>
                                    <Image src={imagesShape4} alt="shape3" />
                                </div>
                                <div className={cx('shape-5')}>
                                    <Image src={imagesShape5} alt="shape4" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Nơi cung cấp"
                                contentTitle2="Khóa học tốt nhất"
                                contentTitle3="Tại Việt Nam"
                                subTitle="Nơi cung cấp những khóa học trực tuyến hàng đầu, giúp bạn nâng tầm kiến thức và kỹ năng."
                                imgFooter={imagesContent2}
                            />

                            {/* hero shape */}
                            <div className={cx('hero-shape')}>
                                <div className={cx('shape-1')}>
                                    <Image src={imagesShape1} alt="shape1" />
                                </div>
                                <div className={cx('shape-2')}>
                                    <Image src={imagesShape2} alt="shape2" />
                                </div>
                                <div className={cx('shape-3')}></div>
                                <div className={cx('shape-4')}>
                                    <Image src={imagesShape4} alt="shape3" />
                                </div>
                                <div className={cx('shape-5')}>
                                    <Image src={imagesShape5} alt="shape4" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Giảng viên tận tâm"
                                contentTitle2="dẫn lối bạn"
                                contentTitle3="đến thành công"
                                subTitle="Đội ngũ giảng viên giàu kinh nghiệm, tận tâm và chuyên nghiệp trong từng bài giảng."
                                imgFooter={imagesContent6}
                                className={cx('custom-img')}
                            />

                            {/* hero shape */}
                            <div className={cx('hero-shape')}>
                                <div className={cx('shape-1')}>
                                    <Image src={imagesShape1} alt="shape1" />
                                </div>
                                <div className={cx('shape-2')}>
                                    <Image src={imagesShape2} alt="shape2" />
                                </div>
                                <div className={cx('shape-3')}></div>
                                <div className={cx('shape-4')}>
                                    <Image src={imagesShape4} alt="shape3" />
                                </div>
                                <div className={cx('shape-5')}>
                                    <Image src={imagesShape5} alt="shape4" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Đăng ký ngay"
                                contentTitle2="Nhận các Ưu đãi"
                                contentTitle3="Và khóa học miễn phí"
                                subTitle="Khám phá những khóa học chất lượng với ưu đãi độc quyền dành riêng cho bạn. "
                                imgFooter={imagesContent3}
                            />

                            {/* hero shape */}
                            <div className={cx('hero-shape')}>
                                <div className={cx('shape-1')}>
                                    <Image src={imagesShape1} alt="shape1" />
                                </div>
                                <div className={cx('shape-2')}>
                                    <Image src={imagesShape2} alt="shape2" />
                                </div>
                                <div className={cx('shape-3')}></div>
                                <div className={cx('shape-4')}>
                                    <Image src={imagesShape4} alt="shape3" />
                                </div>
                                <div className={cx('shape-5')}>
                                    <Image src={imagesShape5} alt="shape4" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider;
