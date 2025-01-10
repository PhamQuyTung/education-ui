import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images/Slider/images';
import SliderContainer from '~/Layout/HeaderOnly/Slider/Container';

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
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]} // Chỉ giữ các module cần thiết
                        effect="slide" // Sử dụng hiệu ứng trượt
                        autoplay={{
                            delay: 5000, // Thời gian chuyển đổi (5 giây)
                            disableOnInteraction: false, // Không dừng autoplay khi tương tác
                        }}
                        spaceBetween={50} // Khoảng cách giữa các slide
                        slidesPerView={1} // Hiển thị 1 slide
                        pagination={{ clickable: true }} // Hiển thị phân trang
                        speed={1000} // Tốc độ chuyển đổi (1 giây)
                        loop={true} // Lặp lại slider
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <SliderContainer
                                sale={35}
                                contentTitle1="Giáo dục là tạo ra"
                                contentTitle2="Tương lai"
                                contentTitle3="Tốt đẹp hơn"
                                subTitle="Giáo dục có thể được coi là sự truyền tải các giá trị và kiến ​​thức tích lũy của xã hội."
                                imgFooter={content1}
                                to='/contact'
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
                                to='/contact'
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
                                to='/contact'
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
                                to='/contact'
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
