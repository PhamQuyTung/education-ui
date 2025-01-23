import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import styles from './NewsHome.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import imgNewsContent1 from '~/assets/images/Home/NewsHome/event_img-1.webp';
import imgNewsContent2 from '~/assets/images/Home/NewsHome/event_img-2.webp';
import imgNewsContent3 from '~/assets/images/Home/NewsHome/event_img-3.webp';
import imgNewsAuthor1 from '~/assets/images/Home/NewsHome/event-author1.webp';
import { ClockIcon, LocationIcon } from '~/components/Icons';
import { newsSliderConfig } from '~/libs/swiperConfigs';

const cx = classNames.bind(styles);

function NewsHomeItem() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });
    return (
        <Row ref={ref}>
            <Swiper {...newsSliderConfig}>
                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent1} alt="imgNewsContent1" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        08:00 sáng - 10:00 sáng
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Kỹ năng Quản lý Dự án Hiệu quả</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent2} alt="imgNewsContent2" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        15:00 chiều - 17:00 chiều
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Công nghệ Blockchain và Ứng dụng</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent3} alt="imgNewsContent1" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        19:00 tối - 21:00 tối
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Nghệ thuật Giao tiếp và Thuyết trình</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent3} alt="imgNewsContent1" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        14:00 chiều - 16:00 chiều
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Công nghệ Trí tuệ nhân tạo và Tương lai của Công việc</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent1} alt="imgNewsContent1" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        08:00 sáng - 10:00 sáng
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Kỹ năng Quản lý Dự án Hiệu quả</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent2} alt="imgNewsContent2" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        15:00 chiều - 17:00 chiều
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Công nghệ Blockchain và Ứng dụng</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent3} alt="imgNewsContent1" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        19:00 tối - 21:00 tối
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Nghệ thuật Giao tiếp và Thuyết trình</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>

                <SwiperSlide>
                    <Col lg={4} md={6} xs={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className={cx('news')}
                        >
                            <div className={cx('img_wrap')}>
                                <Image src={imgNewsContent3} alt="imgNewsContent1" className={cx('imgContent')} />
                            </div>
                            <div className={cx('wrap-content')}>
                                <div className={cx('event-author')}>
                                    <div className={cx('author-images')}>
                                        <Image
                                            src={imgNewsAuthor1}
                                            alt="imgNewsAuthor1"
                                            className={cx('author-img1')}
                                        />
                                    </div>

                                    <div className={cx('author-info')}>
                                        <span className={cx('author-name')}>Văn Long</span>
                                        <p className={cx('author-position')}>Giảng viên</p>
                                    </div>
                                </div>

                                <div className={cx('event-date')}>
                                    <p className={cx('event-address')}>
                                        <LocationIcon className={cx('icon-location')} />
                                        Mona Software - Công ty TNHH Phần Mềm Mona
                                    </p>

                                    <p className={cx('event-time')}>
                                        <ClockIcon className={cx('icon-clock')} />
                                        14:00 chiều - 16:00 chiều
                                    </p>
                                </div>

                                <h3 className={cx('event-title')}>
                                    <Link to="/">Công nghệ Trí tuệ nhân tạo và Tương lai của Công việc</Link>
                                </h3>

                                <Link to="/" className={cx('btn-link')}>
                                    <Button
                                        primary
                                        Medium
                                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                        className={cx('btn-primary')}
                                    >
                                        Xem thêm
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </SwiperSlide>
            </Swiper>
        </Row>
    );
}

export default NewsHomeItem;
