import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './News.module.scss';
import Image from '~/components/Image';
import NewsListHome from '~/data/NewsListHome';

const cx = classNames.bind(styles);

const imageContent = {
    imageContent1: require('~/assets/images/NewsContent/blog-s-1-1.webp'),
    imageContent2: require('~/assets/images/NewsContent/blog-s-1-2.webp'),
    imageContent3: require('~/assets/images/NewsContent/blog-s-1-4-2.png'),
    imageContent4: require('~/assets/images/NewsContent/biz-admin-large-832x450.jpg'),
};

function LatesPosts() {
    return (
        <div className={cx('LatesPosts')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>Bài viết gần đây</h3>
                </div>

                <div className={cx('content')}>
                    <ul className={cx('list')}>
                        {NewsListHome.slice(0, 3).map((news) => (
                            <li className={cx('itemLP')} key={news.id}>
                                <Link to="#" className={cx('itemLP-link')}>
                                    <Image src={imageContent[news.img]} alt={news.title} className={cx('img')} />
                                    <h4>{news.title}</h4>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LatesPosts;
