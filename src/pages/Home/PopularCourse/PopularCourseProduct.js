import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './PopularCourse.module.scss';
import { Card, CardItem } from '~/components/Card';
import { productSliderConfig } from '~/libs/swiperConfigs';
import productCourses from '~/data/productCourses';

const cx = classNames.bind(styles);

// Import tất cả ảnh từ thư mục
const images = {
    'course_1.png': require('~/assets/images/Home/ProductContent/course_1.png'),
    'course_2.png': require('~/assets/images/Home/ProductContent/course_2.png'),
    'course_3.png': require('~/assets/images/Home/ProductContent/course_3.png'),
    'course_4.png': require('~/assets/images/Home/ProductContent/course_4.png'),
    'course_5.png': require('~/assets/images/Home/ProductContent/course_5.png'),
    'course_6.png': require('~/assets/images/Home/ProductContent/course_6.png'),
    'course_7.png': require('~/assets/images/Home/ProductContent/course_7.png'),
    'course_8.png': require('~/assets/images/Home/ProductContent/course_8.png'),
};

function PopularCourseProduct() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });

    return (
        <Card>
            <Row ref={ref}>
                <Swiper {...productSliderConfig} className={cx('custom-slider')}>
                    {productCourses.map((productCourse, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                transition={{ duration: 1 }}
                            >
                                <Col lg={4} md={12} xs={12}>
                                    <CardItem
                                        courseHours={productCourse.courseHours}
                                        courseMinutes={productCourse.courseMinutes}
                                        classNameCard={cx('custom-card')}
                                        img={images[productCourse.image]}
                                        clsContent={cx('custom-cardContent')}
                                        title={productCourse.title}
                                        quantityUnit={productCourse.quantityUnit}
                                        quantityStudent={productCourse.quantityStudent}
                                        level={productCourse.level}
                                        toUser={productCourse.toUser}
                                        ratingNum={productCourse.ratingNum}
                                        userShortNamePosted={productCourse.userShortNamePosted}
                                        userNamePosted={productCourse.userNamePosted}
                                        cost={productCourse.cost}
                                        costSale={productCourse.costSale}
                                        toCourse={productCourse.toCourse}
                                    />
                                </Col>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Row>
        </Card>
    );
}

export default PopularCourseProduct;
