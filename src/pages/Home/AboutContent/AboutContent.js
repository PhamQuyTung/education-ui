import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AboutContent.module.scss';
import Title from '~/components/Title';
import Image from '~/components/Image';
import image1 from '~/assets/images/Home/AboutContent/about1.webp';
import image2 from '~/assets/images/Home/AboutContent/about_1_2.webp';
import image4 from '~/assets/images/Home/AboutContent/about_1_4.webp';
import shape1 from '~/assets/images/Home/AboutContent/BookShape.webp';

const cx = classNames.bind(styles);

function AboutContent() {
    const [startCount, setStartCount] = useState(false);

    // Sử dụng useInView để theo dõi phần tử vào viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Kích hoạt một lần
        threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
    });

    return (
        <div className={cx('about-content')}>
            <div className={cx('wrapper')}>
                <Row ref={ref}>
                    <Col lg={6} md={12} xs={12}>
                        <motion.div
                            className={cx('content-img')}
                            initial={{ opacity: 0, x: -400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => setStartCount(true)} // Bắt đầu Counter sau animation
                        >
                            <div className={cx('img1-wrap')}>
                                <Image src={image1} alt="image1" className={cx('img1')} />
                            </div>

                            <div className={cx('img2-wrap')}>
                                <Image src={image2} alt="image2" className={cx('img2')} />
                            </div>

                            <div className={cx('img3-wrap')}>
                                <div className={cx('bg')}>
                                    <div className={cx('content')}>
                                        {/* Chỉ hiển thị Counter khi animation hoàn thành */}
                                        {startCount && (
                                            <h3>
                                                <CountUp start={0} end={100} duration={3} />k
                                                <span className={cx('theme')}>+</span>
                                            </h3>
                                        )}
                                        <p>Học Viên Tích Cực Trong Các Khóa Học Của Chúng Tôi</p>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('shape1-wrap')}>
                                <Image src={shape1} alt="shape1" className={cx('shape1')} />
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <motion.div
                            className={cx('content-title')}
                            initial={{ opacity: 0, x: 400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <Title
                                title="Giới thiệu"
                                sub="Chào mừng đến Mona Media"
                                description1="Bạn muốn nâng cao kiến thức và kỹ năng của mình? Bạn muốn học những khóa học chất lượng từ những chuyên gia hàng đầu trong ngành? Hãy ghé thăm Website Bán Khóa học của chúng tôi!"
                                description2="Chúng tôi là một nền tảng học trực tuyến cung cấp một loạt các khóa học đa dạng và chất lượng, từ marketing, kinh doanh, phát triển cá nhân, thiết kế đến kỹ năng sống và nhiều lĩnh vực khác. Với đội ngũ giảng viên giàu kinh nghiệm và kiến thức chuyên môn sâu rộng, chúng tôi cam kết mang đến cho bạn những khóa học chất lượng cao và mang tính thực tiễn."
                                buttonDescription="Tìm hiểu thêm"
                                clsSub={cx('custom-sub')}
                                to="/introduce"
                            >
                                <Row className={cx('check')}>
                                    <Col lg={4} md={5} xs={12} className={cx('check-img')}>
                                        <Image src={image4} alt="image4" className={cx('custom-img')} />
                                    </Col>

                                    <Col lg={7} md={5} xs={12} className={cx('check-content')}>
                                        <ul className={cx('check-list')}>
                                            <li className={cx('check-item')}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                    Được tiếp cận hơn 1000 khóa học hàng đầu
                                                </span>
                                            </li>

                                            <li className={cx('check-item')}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                    Các chủ đề phổ biến để tìm hiểu ngay bây giờ
                                                </span>
                                            </li>

                                            <li className={cx('check-item')}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                    Tìm người hướng dẫn phù hợp cho bạn
                                                </span>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Title>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutContent;
