import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './HeaderTop.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const CONTACT_INFO = [
    { icon: faPhone, text: '0385607680', link: 'tel:0385607680' },
    { icon: faEnvelope, text: 'pqthp18903@gmail.com', link: 'mailto:pqthp18903@gmail.com' },
    { icon: faClock, text: 'Thứ 2 - Thứ 6: 9:00 - 18:00' },
];

const SOCIAL_MEDIA = [
    { icon: faFacebookF, link: '/' },
    { icon: faTiktok, link: '/' },
    { icon: faYoutube, link: '/' },
    { icon: faTwitter, link: '/' },
];

function HeaderTop({ currentUser }) {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsHidden(window.scrollY >= 1000);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

const renderContactInfo = () =>
    CONTACT_INFO.map(({ icon, text, link }, index) => (
        <li key={index} className={cx('item-box1')}>
            <FontAwesomeIcon className={cx('icon')} icon={icon} />

            {link ? (
                link.startsWith('tel:') || link.startsWith('mailto:') ? (
                    <a href={link} className={cx('link')}>
                        {text}
                    </a>
                ) : (
                    <Link to={link} className={cx('link')}>
                        {text}
                    </Link>
                )
            ) : (
                <span>{text}</span> // Nếu không có link thì hiển thị span
            )}
        </li>
    ));


    const renderSocialMedia = () =>
        SOCIAL_MEDIA.map(({ icon, link }, index) => (
            <Link key={index} to={link} className={cx('link-brand')}>
                <FontAwesomeIcon className={cx('icon')} icon={icon} />
            </Link>
        ));

    return (
        <header className={cx('header-top', { 'dp-none': isHidden })}>
            <div className={cx('wrapper')}>
                <ul className={cx('list-box1')}>{renderContactInfo()}</ul>
                <ul className={cx('list-box2')}>
                    <li className={cx('item-box2')}>
                        Theo dõi:
                        <span className={cx('icon-brands')}>{renderSocialMedia()}</span>
                    </li>

                    <li className={cx('item-box2')}>
                        {currentUser ? (
                            <Link to="/profile" className={cx('link')}>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH61-RtuTNedGNWMriGAojvkz8748TqbQr2Q&s"
                                    alt="user1"
                                />
                            </Link>
                        ) : (
                            <Link to={config.ROUTES_CONFIG.AUTH}>
                                <Button Small primary3>
                                    Login
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
}

HeaderTop.propTypes = {
    currentUser: PropTypes.bool,
};

export default HeaderTop;
