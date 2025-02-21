import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './News.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import NewsListHome from '~/data/NewsListHome';


const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx('Categories')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h3>Chuyên mục</h3>
                </div>

                <div className={cx('content')}>
                    <ul className={cx('list')}>
                        {NewsListHome.map((category) => (
                            <li className={cx('item')} key={category.id}>
                                <Link to="#" className={cx('item-link')}>
                                    <FontAwesomeIcon icon={faBookBookmark} className={cx('icon-book')} />
                                    <span>{category.category}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categories;
