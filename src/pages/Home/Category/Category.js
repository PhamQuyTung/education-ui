// import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './Category.module.scss';
import Title from '~/components/Title';
import CategoryList from '~/components/Card/CategoryList';
import config from '~/config';

const cx = classNames.bind(styles);

function Category() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });

    return (
        <div className={cx('category')}>
            <Container className={cx('wrapper')}>
                <Row ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <Col lg={4} md={0} xs={0} className={cx('custom-col')}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                        >
                            <Title
                                title="Danh mục khóa học"
                                sub="Khám phá các danh mục hàng đầu"
                                buttonDescription="Xem tất cả danh mục"
                                to={config.ROUTES_CONFIG.COURSE}
                                clsBox={cx('custom-box')}
                                clsTitle={cx('custom-title')}
                                clsSub={cx('custom-sub')}
                                clsButton={cx('custom-btn')}
                            ></Title>
                        </motion.div>
                    </Col>

                    <Col lg={8} md={12} xs={12} className={cx('custom-col2')}>
                        <CategoryList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Category;
