import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';
import LogoFooter from '~/assets/images/Footer/logoFooter.png';
import { faFacebook, faLinkedin, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('bg-main')}>
                <div className={cx('footer-container')}>
                    <div className={cx('footer-top')}>
                        <Row>
                            <Col lg={4} md={12} xs={12}>
                                <div className={cx('box')}>
                                    <div className={cx('wrap-icon')}>
                                        <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                                    </div>
                                    <div className={cx('content')}>
                                        <p>Gọi cho chúng tôi mọi lúc:</p>
                                        <Link to="/">0385 607 680</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} xs={12}>
                                <div className={cx('box', 'box-bdRl')}>
                                    <div className={cx('wrap-icon')}>
                                        <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                    </div>
                                    <div className={cx('content')}>
                                        <p>Gửi Email cho chúng tôi 24/7:</p>
                                        <Link to="/">info@themona.global</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} xs={12}>
                                <div className={cx('box')}>
                                    <div className={cx('wrap-icon')}>
                                        <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                                    </div>
                                    <div className={cx('content')}>
                                        <p>Địa chỉ:</p>
                                        <Link to="/">1073/23 Cách Mạng Tháng 8</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={cx('footer-body')}>
                        <Row>
                            <Col lg={4} md={0} xs={0}>
                                <div className={cx('box2')}>
                                    <Image src={LogoFooter} alt="logoFooter" className={cx('img')} />
                                    <p className={cx('description')}>
                                        Chúng tôi là một nền tảng học trực tuyến cung cấp một loạt các khóa học đa dạng
                                        và chất lượng, từ marketing, kinh doanh, phát triển cá nhân, thiết kế đến kỹ
                                        năng sống và nhiều lĩnh vực khác.
                                    </p>
                                    <div className={cx('social')}>
                                        <h6>THEO DÕI CHÚNG TÔI:</h6>
                                        <div className={cx('wrap-iconSocial')}>
                                            <Link to='/'>
                                                <FontAwesomeIcon icon={faFacebook} className={cx('icon-social')} />
                                            </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon icon={faTwitter} className={cx('icon-social')} />
                                            </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon icon={faLinkedin} className={cx('icon-social')} />
                                            </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon icon={faYoutube} className={cx('icon-social')} />
                                            </Link>
                                            <Link to='/'>
                                                <FontAwesomeIcon icon={faSkype} className={cx('icon-social')} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={cx('footer-footer')}></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
