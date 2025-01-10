import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Container.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import AnimationContent from '~/components/Animation';

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
    return (
        <div className={cx('slider-container')}>
            <Container className={cx('container')}>
                <Row>
                    {/* Content Section */}
                    <Col lg={6} md={12} xs={12} className={cx('content')}>
                        <AnimationContent>
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
                        </AnimationContent>
                    </Col>

                    {/* Image Section */}
                    <Col lg={6} md={12} xs={12} className={cx('image')}>
                        <Image src={imgFooter} alt="Slider content" className={cx(className)} />
                    </Col>
                </Row>
            </Container>
        </div>
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
};

export default SliderContainer;
