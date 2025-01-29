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
                    title="Tin tức và blog của chúng tôi"
                    sub="Tin tức mới nhất"
                    clsBox={cx('custom-box')}
                    clsSub={cx('custom-sub')}
                    to='/news'
                    buttonDescription="Xem tất cả tin tức"
                />

                <div className={cx('newsItem')}>
                    <NewsHomeItem />
                </div>
            </div>
        </div>
    );
}

export default NewsHome;
