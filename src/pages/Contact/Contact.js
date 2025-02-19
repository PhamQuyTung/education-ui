import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Contact.module.scss';
import { LocationIcon, ClockIcon, PhoneIcon } from '~/components/Icons';
import FormContact from '~/components/FormContact';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact')}>
            <div className={cx('wrapper')}>
                <div className={cx('contact-map')}>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe
                        className={cx('map')}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.447483418937!2d106.6836326!3d20.854006299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a8c8b1d039f%3A0x96f27bbf70091a41!2zYWtpLWtvIEJha2VyeSAxMTIgQ-G6p3UgxJDhuqV0!5e0!3m2!1svi!2s!4v1739898025688!5m2!1svi!2s"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className={cx('content')}>
                    <Row>
                        <Col lg={5} md={12} xs={12}>
                            <div className={cx('contact-address')}>
                                <div className={cx('heading')}>
                                    <h4 className={cx('title')}>Bạn có câu hỏi?</h4>
                                </div>

                                <p className={cx('sub')}>
                                    Chúng tôi đặt sự quan tâm đến học viên lên hàng đầu và luôn sẵn sàng hỗ trợ bạn
                                    trong suốt quá trình học tập.
                                </p>

                                <div className={cx('info')}>
                                    <div className={cx('info-street')}>
                                        <div className={cx('icon-wrap')}>
                                            <LocationIcon className={cx('icon-location')} />
                                        </div>
                                        <div className={cx('street')}>
                                            <p className={cx('street-title')}>Địa chỉ</p>
                                            <Link
                                                to="https://www.google.com/maps/place/aki-ko+Bakery+112+C%E1%BA%A7u+%C4%90%E1%BA%A5t/@20.8540113,106.6810577,17z/data=!3m1!4b1!4m6!3m5!1s0x314a7a8c8b1d039f:0x96f27bbf70091a41!8m2!3d20.8540063!4d106.6836326!16s%2Fg%2F1tk6sd14?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                                                className={cx('link')}
                                            >
                                                112 Cầu Đất, P.Ngô Quyền, TP.HP
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={cx('info-phone')}>
                                        <div className={cx('icon-wrap')}>
                                            <PhoneIcon className={cx('icon-phone')} />
                                        </div>
                                        <div className={cx('phone')}>
                                            <p className={cx('phone-title')}>Số điện thoại</p>
                                            <div className={cx('phone-number')}>
                                                <Link to="tel:+84385607680" className={cx('link')}>
                                                    (+84) 385607680
                                                </Link>
                                                <Link to="tel:+84988842770" className={cx('link')}>
                                                    (+84) 988842770
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('info-active')}>
                                        <div className={cx('icon-wrap')}>
                                            <ClockIcon className={cx('icon-clock')} />
                                        </div>
                                        <div className={cx('active')}>
                                            <p className={cx('active-title')}>Hoạt động</p>
                                            <div className={cx('active-date')}>
                                                <span>Thứ 2 - Thứ 6: 09:00 - 18:00</span>
                                                <span>Thứ 7 & Chủ nhật: OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} md={12} xs={12}>
                            <div className={cx('contact-form')}>
                                <div className={cx('contact-bg')}>
                                    <div className="header">
                                        <div className={cx('top')}>Liên hệ với chúng tôi</div>
                                        <div className={cx('heading')}>
                                            <h4 className={cx('title')}>Liên hệ ngay</h4>
                                        </div>
                                        <p className={cx('sub')}>
                                            Chúng tôi sẽ phản hồi bạn một cách nhanh chóng và chuyên nghiệp để đảm bảo
                                            bạn có trải nghiệm học tập tốt nhất và được hỗ trợ một cách toàn diện.
                                        </p>
                                    </div>

                                    {/* Contact Form */}
                                    <FormContact />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Contact;
