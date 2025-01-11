import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Container.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function SliderContainer({
    sale = 35,
    contentTitle1 = '',
    contentTitle2 = '',
    contentTitle3 = '',
    subTitle = '',
    imgFooter,
    to,
    className,
}) {
    const [ref, inView] = useInView({
        triggerOnce: false, // Kích hoạt mỗi khi phần tử xuất hiện
        threshold: 0.2, // Tỷ lệ 20% phần tử hiển thị để kích hoạt
    });

    // Variants cho animation
    const variants = {
        hidden: { opacity: 0, x: -100 }, // Trạng thái ẩn ban đầu
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Trạng thái hiện
    };

    return (
        <motion.div
            className={cx('slider-container')}
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <Container className={cx('container')}>
                <Row>
                    {/* Content Section */}
                    <Col lg={6} md={12} xs={12} className={cx('content')}>
                        <motion.div variants={variants}>
                            <div className={cx('content-heading')}>
                                <p>
                                    Học từ hôm nay <span>Giảm giá {sale}%</span>
                                </p>
                            </div>
                            <div className={cx('content-body')}>
                                <h1 className={cx('title')}>
                                    {contentTitle1}
                                    <br />
                                    <span className={cx('highlight')}>{contentTitle2}</span>
                                    <br />
                                    <span>{contentTitle3}</span>
                                </h1>
                            </div>
                            <div className={cx('content-description')}>
                                <p>{subTitle}</p>
                            </div>
                            <Link to={to} className={cx('content-start')}>
                                <Button
                                    primary
                                    ExtraLarge
                                    rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                    className={cx('custom-btn')}
                                >
                                    Bắt đầu
                                </Button>
                            </Link>
                        </motion.div>
                    </Col>

                    {/* Image Section */}
                    <Col lg={6} md={12} xs={12} className={cx('image')}>
                        <motion.div
                            variants={{
                                ...variants,
                                visible: { ...variants.visible, transition: { duration: 1, delay: 0.2 } },
                            }}
                        >
                            <Image src={imgFooter} alt="Slider content" className={cx(className)} />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

SliderContainer.propTypes = {
    sale: PropTypes.number,
    contentTitle1: PropTypes.string,
    contentTitle2: PropTypes.string,
    contentTitle3: PropTypes.string,
    subTitle: PropTypes.string,
    imgFooter: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string,
};

export default SliderContainer;
