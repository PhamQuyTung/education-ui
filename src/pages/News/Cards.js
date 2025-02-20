import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './News.module.scss';
import Image from '~/components/Image';
import NewsListHome from '~/data/NewsListHome';

const cx = classNames.bind(styles);

function Cards() {
    return (
        <div className={cx('Cards')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>Thẻ</h3>
                </div>

                <div className={cx('content')}>
                    <ul className={cx('list')}>
                        {[...new Set(NewsListHome.map((news) => news.card))].map((card, index) => (
                            <li className={cx('itemC')} key={index}>
                                <Link to="/" className={cx('itemC-link')}>
                                    {card}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
