import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Brands.module.scss';
import Counter from 'react-countup';
import Title from '~/components/Title';
import imgBrand1 from '~/assets/images/Home/Brands/cilent_1_1.webp';
import imgBrand2 from '~/assets/images/Home/Brands/cilent_1_2.webp';
import imgBrand3 from '~/assets/images/Home/Brands/cilent_1_3.webp';
import imgBrand4 from '~/assets/images/Home/Brands/cilent_1_4.webp';
import imgBrand5 from '~/assets/images/Home/Brands/cilent_1_5.webp';
import imgBrand6 from '~/assets/images/Home/Brands/cilent_1_6.webp';
import imgBrand7 from '~/assets/images/Home/Brands/cilent_1_7.webp';
import imgBrand8 from '~/assets/images/Home/Brands/cilent_1_8.webp';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Brands() {
    const [startCount, setStartCount] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });
    
    return (
        <div className={cx('brands')}>
            <div className={cx('wrapper')}>
                <Row ref={ref}>
                    <Col lg={6} md={12} xs={12} className={cx('heading')}>
                        <motion.div
                            initial={{ opacity: 0, x: -400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => setStartCount(true)} // Bắt đầu Counter sau animation
                        >
                            <Title title="Đối tác đáng tin cậy của chúng tôi" clsBox={cx('custom-box')} />
                            <h3 className={cx('title')}>
                                Chúng tôi có hơn
                                {startCount && (
                                    <span className={cx('custom-counter')}>
                                        <Counter start={0} end={4263} duration={3} />+
                                    </span>
                                )}
                                Đối tác toàn cầu
                            </h3>
                        </motion.div>
                    </Col>

                    <Col lg={6} md={12} xs={12} className={cx('main-brands')}>
                        <Row>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand1')}>
                                        <Image src={imgBrand1} alt="imgBrand1" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand2')}>
                                        <Image src={imgBrand2} alt="imgBrand2" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand3')}>
                                        <Image src={imgBrand3} alt="imgBrand3" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand4')}>
                                        <Image src={imgBrand4} alt="imgBrand4" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand5')}>
                                        <Image src={imgBrand5} alt="imgBrand5" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand6')}>
                                        <Image src={imgBrand6} alt="imgBrand6" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand7')}>
                                        <Image src={imgBrand7} alt="imgBrand7" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} xs={3}>
                                <motion.div
                                    initial={{ opacity: 0, x: 400 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className={cx('brand8')}>
                                        <Image src={imgBrand8} alt="imgBrand8" />
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Brands;
