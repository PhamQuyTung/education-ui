import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import styles from './Wcu.module.scss';
import Title from '~/components/Title';
import Image from '~/components/Image';
import imageWcu1 from '~/assets/images/Home/WhyChooseUs/wcu_1_1.webp';
import imageWcu2 from '~/assets/images/Home/WhyChooseUs/student-group_1_1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function Wcu() {
    const [startCount, setStartCount] = useState(false);

    // Sử dụng useInView để theo dõi phần tử vào viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Kích hoạt một lần
        threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
    });

    return (
        <div className={cx('wcu')} style={{ paddingTop: 80 }}>
            <div className={cx('container')}>
                <Row ref={ref}>
                    <Col lg={6} md={12} xs={12} className={cx('custom-col100')}>
                        <motion.div
                            className={cx('contentFirst')}
                            initial={{ opacity: 0, x: -400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => setStartCount(true)} // Bắt đầu Counter sau animation
                        >
                            <div className={cx('wrap-img')}>
                                <Image src={imageWcu1} alt="why choose us 1?" className={cx('img')} />
                            </div>
                            <div className={cx('button-wrap')}>
                                <Button to={config.ROUTES_CONFIG.CONTACT} primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                    Bắt đầu
                                </Button>
                            </div>
                            <div className={cx('studentJump')}>
                                <h5>
                                    {/* Chỉ hiển thị Counter khi animation hoàn thành */}
                                    {startCount && (
                                        <span className={cx('highlight')}>
                                            <CountUp start={0} end={10} duration={3} />
                                            k+
                                        </span>
                                    )}
                                    Học viên tích cực
                                </h5>
                                <Image src={imageWcu2} alt="why choose us 2?" className={cx('img2')} />
                            </div>
                        </motion.div>
                    </Col>
                    
                    <Col lg={6} md={12} xs={12} className={cx('custom-col100')}>
                        <motion.div
                            className={cx('content')}
                            initial={{ opacity: 0, x: 400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <Title
                                title="Lý do chọn chúng tôi"
                                sub="Hàng trăm chuyên gia trên khắp thế giới sẵn sàng trợ giúp"
                                description1="Chúng tôi tự hào có một đội ngũ hàng trăm chuyên gia đáng tin cậy và giàu kinh nghiệm từ khắp nơi trên thế giới. Đây là một trong những lý do tại sao bạn nên lựa chọn chúng tôi để hỗ trợ và truyền cảm hứng cho hành trình học tập của bạn."
                                clsSub={cx('custom-sub')}
                            >
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className={cx('box')}>
                                            <div className={cx('wrap-icon')}>
                                                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                                            </div>

                                            <div className={cx('title')}>
                                                <h3>Giảng viên chuyên nghiệp</h3>
                                                <p>
                                                    Với đội ngũ giảng viên chuyên nghiệp và giàu kinh nghiệm, chúng tôi
                                                    đảm bảo bạn nhận được sự hướng dẫn tận tâm và kiến thức chất lượng
                                                    cao
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} xs={12}>
                                        <div className={cx('box')}>
                                            <div className={cx('wrap-icon')}>
                                                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                                            </div>

                                            <div className={cx('title')}>
                                                <h3>Dễ dàng học tập</h3>
                                                <p>
                                                    Với phương pháp giảng dạy hiện đại và linh hoạt, bạn sẽ dễ dàng tiếp
                                                    cận kiến thức một cách hiệu quả nhất.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} xs={12}>
                                        <div className={cx('box')}>
                                            <div className={cx('wrap-icon')}>
                                                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                                            </div>

                                            <div className={cx('title')}>
                                                <h3>Thời gian linh hoạt</h3>
                                                <p>
                                                    Học tập mọi lúc, mọi nơi với lịch trình được thiết kế linh hoạt, phù
                                                    hợp với nhu cầu của bạn.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} xs={12}>
                                        <div className={cx('box')}>
                                            <div className={cx('wrap-icon')}>
                                                <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                                            </div>

                                            <div className={cx('title')}>
                                                <h3>Giá cả hợp lý</h3>
                                                <p>
                                                    Đảm bảo chất lượng giảng dạy tốt nhất với mức chi phí phù hợp, giúp
                                                    bạn dễ dàng đầu tư cho tương lai.
                                                </p>
                                            </div>
                                        </div>
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

export default Wcu;
