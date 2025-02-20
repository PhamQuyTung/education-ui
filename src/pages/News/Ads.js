import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import imgLogoNews from '~/assets/images/NewsContent/Ads/1-e1709028955636.png';

import styles from './News.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Ads() {
    return (
        <div className={cx('Ads')}>
            <div className={cx('bg')}>
                <div className={cx('Ads-content')}>
                    <h4 className={cx('title')}>Cần giúp đỡ? Chúng tôi ở đây để giúp bạn</h4>
                    <div className={cx('logo')}>
                        <Image src={imgLogoNews} alt="imgLogoNews" className={cx('imgLogo')} />
                    </div>
                    <div className={cx('help')}>
                        <span className={cx('get-course')}>Nhận khóa học trực tuyến</span>
                        <span className={cx('get-phone')}>0385607680</span>
                    </div>
                    <Link to="/Contact" className={cx('link')}>
                        <Button
                            primary
                            ExtraLarge
                            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                            className={cx('custom-btn')}
                        >
                            Liên hệ
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Ads;
