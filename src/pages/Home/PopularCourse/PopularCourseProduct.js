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
import imagesCourse1 from '~/assets/images/Home/ProductContent/course_1.png';
import imagesCourse2 from '~/assets/images/Home/ProductContent/course_2.png';
import imagesCourse3 from '~/assets/images/Home/ProductContent/course_3.png';
import imagesCourse4 from '~/assets/images/Home/ProductContent/course_4.png';
import imagesCourse5 from '~/assets/images/Home/ProductContent/course_5.png';
import imagesCourse6 from '~/assets/images/Home/ProductContent/course_6.png';
import imagesCourse7 from '~/assets/images/Home/ProductContent/course_7.png';
import imagesCourse8 from '~/assets/images/Home/ProductContent/course_8.png';

const cx = classNames.bind(styles);

// Dữ liệu danh sách các khóa học ph�� biến
const productCourses = [
    {
        courseHours: 20,
        courseMinutes: 45,
        image: imagesCourse1,
        title: 'Phần mềm giáo dục và tập lệnh hệ thống PHP và JS',
        quantityUnit: 2,
        quantityStudent: 35,
        level: 'Cao cấp',
        userShortNamePosted: 'A',
        userNamePosted: 'nguyenvana',
        cost: '1,500,000',
        costSale: '1,000,000',
        ratingNum: 4.7,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 15,
        courseMinutes: 20,
        image: imagesCourse2,
        title: 'CNTT Thống kê Khoa học dữ liệu và Phân tích kinh doanh',
        quantityUnit: 1,
        quantityStudent: 50,
        level: 'Cơ bản',
        userShortNamePosted: 'B',
        userNamePosted: 'nguyenb',
        cost: '900,000',
        costSale: '600,000',
        ratingNum: 4.2,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 25,
        courseMinutes: 10,
        image: imagesCourse3,
        title: 'Thiết kế đồ họa tuyệt vời bắt mắt',
        quantityUnit: 3,
        quantityStudent: 20,
        level: 'Nâng cao',
        userShortNamePosted: 'C',
        userNamePosted: 'leec',
        cost: '2,000,000',
        costSale: '1,500,000',
        ratingNum: 5,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 12,
        courseMinutes: 50,
        image: imagesCourse4,
        title: 'Tìm hiểu Figma – Đào tạo cơ bản về thiết kế UI/UX',
        quantityUnit: 2,
        quantityStudent: 25,
        level: 'Cơ bản',
        userShortNamePosted: 'D',
        userNamePosted: 'trand',
        cost: '800,000',
        costSale: '500,000',
        ratingNum: 4.8,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 30,
        courseMinutes: 15,
        image: imagesCourse5,
        title: 'Khóa học phát triển Android 12 & Kotlin nâng cao',
        quantityUnit: 1,
        quantityStudent: 60,
        level: 'Cao cấp',
        userShortNamePosted: 'E',
        userNamePosted: 'phame',
        cost: '3,000,000',
        costSale: '2,500,000',
        ratingNum: 4.5,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 18,
        courseMinutes: 30,
        image: imagesCourse6,
        title: 'Khóa học lập kế hoạch kinh doanh hoàn chỉnh bao gồm hơn 20 mẫu',
        quantityUnit: 1,
        quantityStudent: 40,
        level: 'Trung cấp',
        userShortNamePosted: 'T',
        userNamePosted: 'phamquytung',
        cost: '1,200,000',
        costSale: '800,000',
        ratingNum: 4,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 19,
        courseMinutes: 30,
        image: imagesCourse7,
        title: 'Phiên bản Bootcamp HTML & CSS 2023 hoàn chỉnh',
        quantityUnit: 1,
        quantityStudent: 40,
        level: 'Trung cấp',
        userShortNamePosted: 'T',
        userNamePosted: 'phamquytung',
        cost: '1,200,000',
        costSale: '800,000',
        ratingNum: 4.5,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 18,
        courseMinutes: 12,
        image: imagesCourse8,
        title: 'Khóa Học Chụp Ảnh Thời Trang Từ Cơ Bản Đến Chuyên Nghiệp',
        quantityUnit: 10,
        quantityStudent: 30,
        level: 'Tất cả trình độ',
        userShortNamePosted: 'T',
        userNamePosted: 'phamquytung',
        cost: '1,200,000',
        costSale: '800,000',
        ratingNum: 3.5,
        toCourse: '/',
        toUser: '/',
    },

    {
        courseHours: 20,
        courseMinutes: 45,
        image: imagesCourse1,
        title: 'Phần mềm giáo dục và tập lệnh hệ thống PHP và JS',
        quantityUnit: 2,
        quantityStudent: 35,
        level: 'Cao cấp',
        userShortNamePosted: 'A',
        userNamePosted: 'nguyenvana',
        cost: '1,500,000',
        costSale: '1,000,000',
        ratingNum: 4.7,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 15,
        courseMinutes: 20,
        image: imagesCourse2,
        title: 'CNTT Thống kê Khoa học dữ liệu và Phân tích kinh doanh',
        quantityUnit: 1,
        quantityStudent: 50,
        level: 'Cơ bản',
        userShortNamePosted: 'B',
        userNamePosted: 'nguyenb',
        cost: '900,000',
        costSale: '600,000',
        ratingNum: 4.2,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 25,
        courseMinutes: 10,
        image: imagesCourse3,
        title: 'Thiết kế đồ họa tuyệt vời bắt mắt',
        quantityUnit: 3,
        quantityStudent: 20,
        level: 'Nâng cao',
        userShortNamePosted: 'C',
        userNamePosted: 'leec',
        cost: '2,000,000',
        costSale: '1,500,000',
        ratingNum: 5,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 12,
        courseMinutes: 50,
        image: imagesCourse4,
        title: 'Tìm hiểu Figma – Đào tạo cơ bản về thiết kế UI/UX',
        quantityUnit: 2,
        quantityStudent: 25,
        level: 'Cơ bản',
        userShortNamePosted: 'D',
        userNamePosted: 'trand',
        cost: '800,000',
        costSale: '500,000',
        ratingNum: 4.8,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 30,
        courseMinutes: 15,
        image: imagesCourse5,
        title: 'Khóa học phát triển Android 12 & Kotlin nâng cao',
        quantityUnit: 1,
        quantityStudent: 60,
        level: 'Cao cấp',
        userShortNamePosted: 'E',
        userNamePosted: 'phame',
        cost: '3,000,000',
        costSale: '2,500,000',
        ratingNum: 4.5,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 18,
        courseMinutes: 30,
        image: imagesCourse6,
        title: 'Khóa học lập kế hoạch kinh doanh hoàn chỉnh bao gồm hơn 20 mẫu',
        quantityUnit: 1,
        quantityStudent: 40,
        level: 'Trung cấp',
        userShortNamePosted: 'T',
        userNamePosted: 'phamquytung',
        cost: '1,200,000',
        costSale: '800,000',
        ratingNum: 4,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 19,
        courseMinutes: 30,
        image: imagesCourse7,
        title: 'Phiên bản Bootcamp HTML & CSS 2023 hoàn chỉnh',
        quantityUnit: 1,
        quantityStudent: 40,
        level: 'Trung cấp',
        userShortNamePosted: 'T',
        userNamePosted: 'phamquytung',
        cost: '1,200,000',
        costSale: '800,000',
        ratingNum: 4.5,
        toCourse: '/',
        toUser: '/',
    },
    {
        courseHours: 18,
        courseMinutes: 12,
        image: imagesCourse8,
        title: 'Khóa Học Chụp Ảnh Thời Trang Từ Cơ Bản Đến Chuyên Nghiệp',
        quantityUnit: 10,
        quantityStudent: 30,
        level: 'Tất cả trình độ',
        userShortNamePosted: 'T',
        userNamePosted: 'phamquytung',
        cost: '1,200,000',
        costSale: '800,000',
        ratingNum: 3.5,
        toCourse: '/',
        toUser: '/',
    },
];

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
                            <Col lg={4} md={12} xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                    transition={{ duration: 1 }}
                                >
                                    <CardItem
                                        courseHours={productCourse.courseHours}
                                        courseMinutes={productCourse.courseMinutes}
                                        classNameCard={cx('custom-card')}
                                        img={productCourse.image}
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
                                </motion.div>
                            </Col>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Row>
        </Card>
    );
}

export default PopularCourseProduct;
