import React from 'react';
import styles from './HeaderTop.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const currentUser = true;

function HeaderTop() {
    return (
        <header className={cx('header-top')}>
            <div className={cx('wrapper')}>
                <ul className={cx('list-box1')}>
                    <li className={cx('item-box1')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                        <Link to="/" className={cx('phone-link')}>
                            0385607680
                        </Link>
                    </li>
                    <li className={cx('item-box1')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                        <Link to="/" className={cx('mail-link')}>
                            info@themona.global
                        </Link>
                    </li>
                    <li className={cx('item-box1')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                        <span className={cx('time')}>Thứ 2 - Thứ 6: 9:00 - 18:00</span>
                    </li>
                </ul>

                <ul className={cx('list-box2')}>
                    <li className={cx('item-box2')}>
                        Theo dõi:
                        <span className={cx('icon-brands')}>
                            <Link to="/" className={cx('link-brand')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />
                            </Link>
                            <Link to="/" className={cx('link-brand')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                            </Link>
                            <Link to="/" className={cx('link-brand')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                            </Link>
                            <Link to="/" className={cx('link-brand')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                            </Link>
                        </span>
                    </li>

                    <li className={cx('item-box2')}>
                        {currentUser ? (
                            <Link to="/profile" className={cx('link')}>
                                Thông tin cá nhân
                            </Link>
                        ) : (
                            <>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                <span className={cx('user')}>Đăng nhập / Đăng ký</span>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderTop;
