import React, { useState } from 'react';
import styles from './BigCounter.module.scss';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const cx = classNames.bind(styles);

const ArrCounters = [
    {
        id: 1,
        quantity: 3.9,
        des1: 'Thành công',
        des2: 'đào tạo',
    },
    {
        id: 2,
        quantity: 15.8,
        des1: 'Khóa học',
        des2: 'hoàn thành',
    },
    {
        id: 3,
        quantity: 97.5,
        des1: 'Đánh giá',
        des2: 'hài lòng',
    },
    {
        id: 4,
        quantity: 100.2,
        des1: 'Cộng đồng',
        des2: 'học viên',
    },
];

function BigCounter() {
    const [startCount, setStartCount] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });

    return (
        <div className={cx('bigCounter')}>
            <Container className={cx('wrapper')}>
                <Row ref={ref}>
                    {ArrCounters.map((counter) => {
                        return (
                            <Col key={counter.id} lg={3} md={6} xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                                    transition={{ duration: 1 }}
                                    onAnimationComplete={() => setStartCount(true)} // Bắt đầu Counter sau animation
                                >
                                    <div className={cx('box')}>
                                        <h2 className={cx('number')}>
                                            {startCount && (
                                                <CountUp
                                                    start={0}
                                                    end={counter.quantity}
                                                    duration={3}
                                                    className={cx('quantity')}
                                                ></CountUp>
                                            )}
                                            k<span className={cx('fwNormal')}>+</span>
                                        </h2>
                                        <p className={cx('des')}>
                                            <strong>{counter.des1}</strong> {counter.des2}
                                        </p>
                                    </div>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default BigCounter;
