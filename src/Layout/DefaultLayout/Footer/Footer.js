import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faLinkedin, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import Image from '~/components/Image';
import LogoFooter from '~/assets/images/Footer/logoFooter.png';
import Button from '~/components/Button';
import { PhoneIcon, EnvelopeIcon, LocationIcon } from '~/components/Icons';

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
                                        <PhoneIcon className={cx('icon-phone')} />
                                    </div>
                                    <div className={cx('content')}>
                                        <p>Gọi cho chúng tôi mọi lúc:</p>
                                        <Link to="tel:0385607680">0385 607 680</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} xs={12}>
                                <div className={cx('box', 'box-bdRl')}>
                                    <div className={cx('wrap-icon')}>
                                        <EnvelopeIcon className={cx('icon-envelope')} />
                                    </div>
                                    <div className={cx('content')}>
                                        <p>Gửi Email cho chúng tôi 24/7:</p>
                                        <Link to="mailto:info@themona.global">info@themona.global</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} xs={12}>
                                <div className={cx('box')}>
                                    <div className={cx('wrap-icon')}>
                                        <LocationIcon className={cx('icon-location')} />
                                    </div>
                                    <div className={cx('content')}>
                                        <p>Địa chỉ:</p>
                                        <Link to="https://www.google.com/maps/place/Mona+Software+-+C%C3%B4ng+ty+TNHH+Ph%E1%BA%A7n+M%E1%BB%81m+Mona/@10.7909046,106.6535946,17z/data=!3m1!4b1!4m6!3m5!1s0x31752ff1a24e9c9b:0xa398430e999c86b8!8m2!3d10.7908993!4d106.6561695!16s%2Fg%2F11svwthb07?entry=ttu">
                                            1073/23 Cách Mạng Tháng 8
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={cx('footer-body')}>
                        <Row>
                            <Col lg={4} md={6} xs={12}>
                                <div className={cx('box2')}>
                                    <Link to="/">
                                        <Image src={LogoFooter} alt="logoFooter" className={cx('img')} />
                                    </Link>
                                    <p className={cx('description')}>
                                        Chúng tôi là một nền tảng học trực tuyến cung cấp một loạt các khóa học đa dạng
                                        và chất lượng, từ marketing, kinh doanh, phát triển cá nhân, thiết kế đến kỹ
                                        năng sống và nhiều lĩnh vực khác.
                                    </p>
                                    <div className={cx('social')}>
                                        <h6>THEO DÕI CHÚNG TÔI:</h6>
                                        <div className={cx('wrap-iconSocial')}>
                                            <Link to="/">
                                                <FontAwesomeIcon icon={faFacebook} className={cx('icon-social')} />
                                            </Link>
                                            <Link to="/">
                                                <FontAwesomeIcon icon={faTwitter} className={cx('icon-social')} />
                                            </Link>
                                            <Link to="/">
                                                <FontAwesomeIcon icon={faLinkedin} className={cx('icon-social')} />
                                            </Link>
                                            <Link to="/">
                                                <FontAwesomeIcon icon={faYoutube} className={cx('icon-social')} />
                                            </Link>
                                            <Link to="/">
                                                <FontAwesomeIcon icon={faSkype} className={cx('icon-social')} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={2} md={6} xs={12}>
                                <div className={cx('footerCategoryLink')}>
                                    <h3 className={cx('fCL-heading')}>Danh mục</h3>
                                    <ul className={cx('fCL-list')}>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Development
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Marketing
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Data Science
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Doanh nghiệp
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Design
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Nhiếp ảnh
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg={2} md={6} xs={12}>
                                <div className={cx('footerCategoryLink')}>
                                    <h3 className={cx('fCL-heading')}>Liên kết</h3>
                                    <ul className={cx('fCL-list')}>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Cộng đồng
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Hỗ trợ
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Hướng dẫn
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Tài liệu
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Chính sách khóa học
                                            </Link>
                                        </li>
                                        <li className={cx('fCL-item')}>
                                            <Link to="/" className={cx('fCL-link')}>
                                                <FontAwesomeIcon icon={faCircle} className={cx('icon-circle')} />
                                                Chính sách thanh toán
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg={4} md={6} xs={12}>
                                <div className={cx('footerCategoryLink')}>
                                    <h3 className={cx('fCL-heading')}>Liên hệ</h3>
                                    <p className={cx('fcL-Sub')}>
                                        Đăng ký bản tin của chúng tôi để được cập nhật tin tức mới nhất.
                                    </p>
                                    <form action="" className={cx('form-group')}>
                                        <div className={cx('input-wrap')}>
                                            <input
                                                type="email"
                                                placeholder="Nhập email..."
                                                required
                                                className={cx('input')}
                                            />
                                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon-email')} />
                                        </div>
                                        <Button primary ExtraLarge>
                                            Đăng ký
                                        </Button>
                                    </form>
                                </div>
                            </Col>
                        </Row>

                        <div className={cx('footer-body_footer')}>
                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <p className={cx('text')}>© Thiết kế và lập trình bởi Phạm Quý Tùng / Website</p>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                    <div className={cx('wrap-linkEnd')}>
                                        <Link to="/" className={cx('link-end')}>
                                            Chính sách bảo mật
                                        </Link>
                                        <Link to="/" className={cx('link-end')}>
                                            Điều khoản & Điều kiện
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
