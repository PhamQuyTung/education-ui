import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './AboutIntroduce.module.scss';
import Title from '~/components/Title';
import { Card } from '~/components/Card';
import Image from '~/components/Image';
import imageAbout1 from '~/assets/images/Introduce/About/service-icon-3-1.svg';
import imageAbout2 from '~/assets/images/Introduce/About/service-icon-3-2.svg';
import imageAbout3 from '~/assets/images/Introduce/About/service-icon-3-3.svg';

const cx = classNames.bind(styles);

function Introduce() {
    // Sử dụng useInView để theo dõi phần tử vào viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Kích hoạt một lần
        threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
    });

    return (
        <div className={cx('about')}>
            <div className={cx('wrapper')}>
                <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}} // Kích hoạt khi inView = true
                    transition={{ duration: 1 }}
                >
                    <Title
                        title="Chúng tôi làm gì"
                        sub="Khóa Học trực tuyến phù hợp với bạn"
                        clsBox={cx('custom-box')}
                        clsSub={cx('custom-sub')}
                    />
                </motion.div>

                <Row ref={ref}>
                    <Col lg={4} md={12} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                        >
                            <div className={cx('card')}>
                                <div className={cx('image-wrap')}>
                                    <Image src={imageAbout1} alt="imageAbout1" className={cx('about_image')} />
                                </div>
                                <h3>Học ở mọi nơi</h3>
                                <p>
                                    "Bất kỳ nơi nào bạn ở, hỗ trợ sẽ đồng hành cùng bạn, giúp bạn vượt qua mọi khó khăn
                                    trong quá trình học tập."
                                </p>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={4} md={12} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                        >
                            <div className={cx('card')}>
                                <div className={cx('image-wrap')}>
                                    <Image src={imageAbout2} alt="imageAbout2" className={cx('about_image')} />
                                </div>
                                <h3>Giảng viên chuyên nghiệp</h3>
                                <p>
                                    "Đội ngũ giảng viên chuyên nghiệp của chúng tôi sẽ truyền đạt kiến thức và hỗ trợ
                                    bạn một cách tận tâm, giúp bạn tiến bộ và phát triển."
                                </p>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={4} md={12} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                        >
                            <div className={cx('card')}>
                                <div className={cx('image-wrap')}>
                                    <Image src={imageAbout3} alt="imageAbout3" className={cx('about_image')} />
                                </div>
                                <h3>Hỗ trợ 24/7</h3>
                                <p>
                                    "Với hỗ trợ 24/7, chúng tôi sẵn sàng đáp ứng mọi thắc mắc, đảm bảo rằng bạn không bị
                                    bỏ lại một mình trong quá trình học tập."
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Introduce;
