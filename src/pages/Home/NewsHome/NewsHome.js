import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewsHome.module.scss';
import Title from '~/components/Title';
import NewsHomeItem from './NewsHomeItem';

const cx = classNames.bind(styles);

function NewsHome() {
    return (
        <div className={cx('newsHome')}>
            <div className={cx('wrapper')}>
                <Title
                    title="Các sự kiện nổi bật"
                    sub="Sự kiện sắp tới của chúng tôi"
                    clsBox={cx('custom-box')}
                    clsSub={cx('custom-sub')}
                />

                <div className="newsItem">
                    <NewsHomeItem />
                </div>
            </div>
        </div>
    );
}

export default NewsHome;
