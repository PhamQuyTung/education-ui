import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

import styles from './SaleContent.module.scss';
import Title from '~/components/Title';
import Button from '~/components/Button';
import Image from '~/components/Image';
import shape1 from '~/assets/images/Home/SaleContent/cta_2_shape1.webp';
import shape2 from '~/assets/images/Home/SaleContent/cta_2_shape2.webp';
import shape3 from '~/assets/images/Home/SaleContent/cta_2_shape3.webp';

const cx = classNames.bind(styles);

function SaleContent() {
    const [startCount, setStartCount] = useState(false);

    // Sử dụng useInView để theo dõi phần tử vào viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Kích hoạt một lần
        threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
    });

    return (
        <div className={cx('saleContent')}>
            <div className={cx('bg')}>
                <div className={cx('wrapper')}>
                    <Row ref={ref}>
                        <Col lg={12} md={12} xs={12}>
                            <motion.div
                                className={cx('heading')}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                                transition={{ duration: 1 }}
                                onAnimationComplete={() => setStartCount(true)} // Bắt đầu Counter sau animation
                            >
                                <Title title="Bạn đã sẵn sàng cho ưu đãi này chưa" />

                                <h2 className={cx('sub')}>
                                    Ưu đãi
                                    {startCount && (
                                        <CountUp start={0} end={40} duration={3} className={cx('custom-nb2')} />
                                    )}
                                    %
                                    <span className={cx('fwBold-Hl')}>
                                        Cho
                                        {startCount && (
                                            <CountUp start={0} end={100} duration={3} className={cx('custom-nb1')} />
                                        )}
                                        học viên đầu tiên
                                    </span>
                                    <br />
                                    <span>đăng ký tài khoản</span>
                                    <br />
                                    <span className={cx('fw-normal')}>Chủ đề theo danh mục giáo dục</span>
                                </h2>

                                <p className={cx('description')}>
                                    Nhận quyền truy cập không giới hạn vào hơn 6.000 khóa học hàng đầu của Udemy cho
                                    nhóm của bạn. Tìm hiểu và nâng cao các kỹ năng về kinh doanh, công nghệ, thiết kế,
                                    v.v.
                                </p>
                            </motion.div>

                            <motion.div
                                className={cx('btn-wrap')}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                                transition={{ duration: 1 }}
                                onAnimationComplete={() => setStartCount(true)} // Bắt đầu Counter sau animation
                            >
                                <Button to='/contact' primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />} className={cx('custom-btn')}>
                                    Tham gia
                                </Button>
                                <Button to='/' outline ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                    Trở thành giảng viên
                                </Button>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
                <div className={cx('shape1')}>
                    <Image src={shape1} alt="shape1" />
                </div>
                <div className={cx('shape2')}>
                    <Image src={shape2} alt="shape2" />
                </div>
                <div className={cx('shape3')}>
                    <Image src={shape3} alt="shape3" />
                </div>
            </div>
        </div>
    );
}

export default SaleContent;
