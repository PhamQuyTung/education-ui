import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faClock, faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import styles from './News.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import Search from './Search';
import Categories from './Categories';
import LatesPosts from './LatesPosts';
import Cards from './Cards';
import Ads from './Ads';
import NewsListHome from '~/data/NewsListHome';
import NewsPagination from '../Course/CoursePagination';

const imageContent = {
    imageContent1: require('~/assets/images/NewsContent/blog-s-1-1.webp'),
    imageContent2: require('~/assets/images/NewsContent/blog-s-1-2.webp'),
    imageContent3: require('~/assets/images/NewsContent/blog-s-1-4-2.png'),
    imageContent4: require('~/assets/images/NewsContent/biz-admin-large-832x450.jpg'),
};

const cx = classNames.bind(styles);

function News() {
    const [sortedProducts, setSortedProducts] = useState(NewsListHome);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Giới hạn sản phẩm mỗi trang

    // Tính tổng số trang
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    // Lọc danh sách khóa học cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    return (
        <div className={cx('news')}>
            <div className={cx('wrapper')}>
                <Row>
                    <Col lg={8} md={12} xs={12} className={cx('custom-colPd15')}>
                        {currentProducts.map((news) => (
                            <div className={cx('main')} key={news.id}>
                                <div className={cx('img_wrap')}>
                                    <Image src={imageContent[news.img]} alt={news.title} className={cx('imgContent')} />
                                </div>
                                <div className={cx('wrap-content')}>
                                    <div className={cx('news-box')}>
                                        <span className={cx('author')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                            {news.author}
                                        </span>

                                        <span className={cx('date')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                                            {news.date}
                                        </span>

                                        <span className={cx('category')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                            {news.category}
                                        </span>

                                        <span className={cx('card')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
                                            {news.card}
                                        </span>
                                    </div>

                                    <div className={cx('news-title')}>
                                        <h3>{news.title}</h3>
                                    </div>

                                    <p>{news.description}</p>

                                    <Link to="#">
                                        <Button primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                            Đọc thêm
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Col>

                    <Col lg={4} md={12} xs={12} className={cx('custom-colPd15')}>
                        {/* Search */}
                        <Search />

                        {/* Categories */}
                        <Categories />

                        {/* Latest Posts */}
                        <LatesPosts />

                        {/* Card */}
                        <Cards />

                        {/* Ads */}
                        <Ads />
                    </Col>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <NewsPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    )}
                </Row>
            </div>
        </div>
    );
}

export default News;
