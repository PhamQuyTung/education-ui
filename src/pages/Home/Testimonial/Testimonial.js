import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Testimonial.module.scss';
import Title from '~/components/Title';
import Image from '~/components/Image';
import FullRating from '~/components/Rating';
import dataTestimonial from '~/data/Testimonial';
import { testimonialSliderConfig } from '~/libs/swiperConfigs';
import { ShapeIcon } from '~/components/Icons';
import shapeImage1 from '~/assets/images/Home/Testimonial/testi-bg-shape_1_1.webp';
import shapeImage2 from '~/assets/images/Home/Testimonial/testi-bg-shape_1_2.webp';

const cx = classNames.bind(styles);

const imagesTestimonial = {
    imgTestimonial1: require('~/assets/images/Home/Testimonial/testi_1_1.webp'),
    imgTestimonial2: require('~/assets/images/Home/Testimonial/testi_1_2.webp'),
    imgTestimonial3: require('~/assets/images/Home/Testimonial/ttm3.jpg'),
    imgTestimonial4: require('~/assets/images/Home/Testimonial/ttm4.jpg'),
    imgTestimonial5: require('~/assets/images/Home/Testimonial/ttm5.jpg'),
    imgTestimonial6: require('~/assets/images/Home/Testimonial/ttm6.jpg'),
    imgTestimonial7: require('~/assets/images/Home/Testimonial/ttm7.png'),
    imgTestimonial8: require('~/assets/images/Home/Testimonial/ttm8.webp'),
    imgTestimonial9: require('~/assets/images/Home/Testimonial/ttm9.jpg'),
    imgTestimonial10: require('~/assets/images/Home/Testimonial/ttm10.jpg'),
};

function Testimonial() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });

    return (
        <div className={cx('testimonial')}>
            <div className={cx('bg')}>
                <div className={cx('wrapper')}>
                    <Title title="Học viên nói gì về chúng tôi?" sub="Đánh giá từ học viên" clsBox={cx('custom-box')} />

                    <Row ref={ref}>
                        <Swiper {...testimonialSliderConfig}>
                            {dataTestimonial.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <Col lg={12} md={12} xs={12}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                            transition={{ duration: 1 }}
                                            className={cx('box')}
                                        >
                                            {/* Nội dung đánh giá */}
                                            <div className={cx('content')}>
                                                <Image
                                                    src={imagesTestimonial[testimonial.img]}
                                                    alt={`img${testimonial.id}`}
                                                    className={cx('img')}
                                                />
                                                <p>"{testimonial.content}"</p>
                                            </div>

                                            {/* Thông tin người dùng */}
                                            <div className={cx('footer')}>
                                                <div className={cx('name')}>
                                                    <h3>{testimonial.name}</h3>
                                                    <p>{testimonial.position}</p>
                                                </div>
                                                <FullRating
                                                    ratingNum={testimonial.rating}
                                                    className={cx('wrap-ratingNum')}
                                                    dpNone={false}
                                                />
                                            </div>

                                            {/* Shape */}
                                            <div className={cx('shape')}>
                                                <ShapeIcon className={cx('custom-icon')} />
                                            </div>
                                        </motion.div>
                                    </Col>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Row>
                </div>
                
                <div className={cx('shape-wrap1')}>
                    <Image src={shapeImage1} alt="shapeImage1" />
                </div>

                <div className={cx('shape-wrap2')}>
                    <Image src={shapeImage2} alt="shapeImage2" />
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
