import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderTop.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const SOCIAL_MEDIA = [
    { icon: faFacebookF, link: '/' },
    { icon: faTiktok, link: '/' },
    { icon: faYoutube, link: '/' },
    { icon: faTwitter, link: '/' },
];

const CONTACT_INFO = [
    { icon: faPhone, text: '0385607680', link: '/' },
    { icon: faEnvelope, text: 'info@themona.global', link: '/' },
    { icon: faClock, text: 'Thứ 2 - Thứ 6: 9:00 - 18:00' },
];

function HeaderTop({ currentUser }) {
    const [isHidden, setIsHidden] = useState(false);
    // const currentUser = false;

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
                    <Link to={link} className={cx('link')}>
                        {text}
                    </Link>
                ) : (
                    <span>{text}</span>
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
                            <Link to="/">
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
