import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styles from './Banner2.module.scss';
import Title from '../Title';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Banner2() {
    return (
        <div className={cx('banner2')}>
            <div className={cx('wrapper')}>
                <Row>
                    <Col lg={6} md={12} xs={12} className={cx('custom-colMtT10')}>
                        <div className={cx('Box')}>
                            <div className={cx('Box-bg1')}>
                                <div className={cx('Box-content')}>
                                    <Title
                                        title="Khóa học phổ biến"
                                        sub="Nhận các khóa học tốt nhất"
                                        sub2="Nâng cấp kĩ năng của bạn"
                                        clsBox={cx('custom-box')}
                                        clsTitle={cx('custom-title')}
                                        clsSub={cx('custom-sub')}
                                    />

                                    <Link to="/contact">
                                        <Button ExtraLarge primary3 rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                            Liên hệ
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12} className={cx('custom-colMtT10')}>
                        <div className={cx('Box')}>
                            <div className={cx('Box-bg2')}>
                                <div className={cx('Box-content')}>
                                    <Title
                                        title="Khóa học phổ biến"
                                        sub="Các khóa học hấp dẫn"
                                        sub2="Để khám phá trí tuệ"
                                        clsBox={cx('custom-box')}
                                        clsTitle={cx('custom-title')}
                                        clsSub={cx('custom-sub')}
                                    />

                                    <Link to="/course">
                                        <Button ExtraLarge primary3 rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                            Khám phá khóa học
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Banner2;
