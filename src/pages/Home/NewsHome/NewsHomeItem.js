import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './NewsHome.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { newsContentSliderConfig } from '~/libs/swiperConfigs/newsContentSliderConfig';
import NewsHomeList from '~/data/NewsListHome';

const cx = classNames.bind(styles);

const imageContent = {
    imageContent1: require('~/assets/images/Home/NewsHome/blog-s-1-2-2-444x323.png'),
    imageContent2: require('~/assets/images/Home/NewsHome/blog-s-1-4-2-444x323.png'),
    imageContent3: require('~/assets/images/Home/NewsHome/blog-s-1-5-2-444x323.png'),
    imageContent4: require('~/assets/images/Home/NewsHome/gallery_1_9-2-444x323.png'),
};

function NewsHomeItem() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });

    return (
        <Row ref={ref}>
            <Swiper {...newsContentSliderConfig}>
                {NewsHomeList.map((news) => (
                    <SwiperSlide key={news.id}>
                        <Col lg={4} md={12} xs={12}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                transition={{ duration: 1 }}
                            >
                                <div className={cx('card')}>
                                    <div className={cx('img_wrap')}>
                                        <Image
                                            src={imageContent[news.img]}
                                            alt={news.title}
                                            className={cx('imgContent')}
                                        />
                                    </div>
                                    <div className={cx('wrap-content')}>
                                        <div className={cx('news-author')}>
                                            <span className={cx('author')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                                {news.author}
                                            </span>

                                            <span className={cx('date')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                                                {news.date}
                                            </span>
                                        </div>

                                        <div className={cx('news-title')}>
                                            <h3>{news.title}</h3>
                                        </div>

                                        <Link to="/">
                                            <Button primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                                Đọc thêm
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Row>
    );
}

export default NewsHomeItem;
