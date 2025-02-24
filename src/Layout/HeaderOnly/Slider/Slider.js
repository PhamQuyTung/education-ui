import React from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import styles from './Slider.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images/Slider/images';
import SliderContainer from '~/Layout/HeaderOnly/Slider/Container';
import { mainSliderConfig } from '~/libs/swiperConfigs';
import config from '~/config';

const cx = classNames.bind(styles);

// Sử dụng hình ảnh
const { content1, content2, content3, content6, shape1, shape2, shape4, shape5 } = images;

// Component HeroShape
const HeroShape = () => (
    <div className={cx('hero-shape')}>
        <div className={cx('shape-1')}>
            <Image src={shape1} alt="shape1" />
        </div>
        <div className={cx('shape-2')}>
            <Image src={shape2} alt="shape2" />
        </div>
        <div className={cx('shape-3')}></div>
        <div className={cx('shape-4')}>
            <Image src={shape4} alt="shape3" />
        </div>
        <div className={cx('shape-5')}>
            <Image src={shape5} alt="shape4" />
        </div>
    </div>
);

function Slider() {
    return (
        <div className={cx('slider')}>
            <div className={cx('wrapper')}>
                <div className={cx('background')}>
                    <Swiper {...mainSliderConfig}>
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Giáo dục là tạo ra"
                                contentTitle2="Tương lai"
                                contentTitle3="Tốt đẹp hơn"
                                subTitle="Giáo dục có thể được coi là sự truyền tải các giá trị và kiến ​​thức tích lũy của xã hội."
                                imgFooter={content1}
                                to={config.ROUTES_CONFIG.CONTACT}
                            />
                            <HeroShape />
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Nơi cung cấp"
                                contentTitle2="Khóa học tốt nhất"
                                contentTitle3="Tại Việt Nam"
                                subTitle="Nơi cung cấp những khóa học trực tuyến hàng đầu, giúp bạn nâng tầm kiến thức và kỹ năng."
                                imgFooter={content2}
                                to={config.ROUTES_CONFIG.CONTACT}
                            />
                            <HeroShape />
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Giảng viên tận tâm"
                                contentTitle2="dẫn lối bạn"
                                contentTitle3="đến thành công"
                                subTitle="Đội ngũ giảng viên giàu kinh nghiệm, tận tâm và chuyên nghiệp trong từng bài giảng."
                                imgFooter={content6}
                                to={config.ROUTES_CONFIG.CONTACT}
                                className={cx('custom-img')}
                            />
                            <HeroShape />
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Đăng ký ngay"
                                contentTitle2="Nhận các Ưu đãi"
                                contentTitle3="Và khóa học miễn phí"
                                subTitle="Khám phá những khóa học chất lượng với ưu đãi độc quyền dành riêng cho bạn."
                                imgFooter={content3}
                                to={config.ROUTES_CONFIG.CONTACT}
                            />
                            <HeroShape />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider;
