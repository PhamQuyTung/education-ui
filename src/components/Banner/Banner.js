import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import styles from './Banner.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import ModalVideo from '~/components/Modal';
import imagesBanner1 from '~/assets/images/Home/Banner/cta-icon1.webp';
import config from '~/config';

const cx = classNames.bind(styles);

function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={cx('banner-container')}>
            <div className={cx('wrapper')}>
                <div className={cx('bg')}>
                    <div className={cx('container')}>
                        <Row className={cx('wrapper-content')}>
                            <Col lg={8} md={12} xs={12} className={cx('content')}>
                                <Image src={imagesBanner1} alt="imagesBanner1" className={cx('img-mail')} />
                                <div className={cx('heading')}>
                                    <h1 className={cx('title')}>Nhận khóa học trực tuyến</h1>
                                    <p className={cx('description')}>
                                        Bạn muốn tiếp cận với kiến thức mới mỗi ngày và phát triển bản thân? Bạn muốn
                                        học tập linh hoạt và tiện lợi ngay tại nhà? Hãy đăng ký nhận khóa học trực tuyến
                                        ngay hôm nay!
                                    </p>
                                </div>
                                <Link to={config.ROUTES_CONFIG.INTRODUCE} className={cx('btn-primary')}>
                                    <Button primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                        Tham gia
                                    </Button>
                                </Link>
                            </Col>
                            <Col lg={4} md={0} xs={0} className={cx('watch')}>
                                <button onClick={toggleModal} className={cx('play-link')}>
                                    <FontAwesomeIcon icon={faCirclePlay} className={cx('icon')} />
                                </button>

                                <ModalVideo isOpen={isModalOpen} onClose={toggleModal}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=BGkc6dKUZ84"
                                        playing={false} // Phát tự động
                                        controls={true} // Hiển thị điều khiển
                                        volume={0.8} // Âm lượng 80%
                                        width="900px"
                                        height="506px"
                                    />
                                </ModalVideo>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
