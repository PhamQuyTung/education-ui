import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
// import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import styles from './Banner.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import imagesBanner1 from '~/assets/images/cta-icon1.webp';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner-container')}>
            <div className={cx('wrapper')}>
                <div className={cx('bg')}>
                    <div className={cx('container')}>
                        <Row>
                            <Col lg={12} md={12} xs={12} className={cx('heading')}>
                                <div className={cx('wrapper-content')}>
                                    <div className={cx('wrapper-img')}>
                                        <Image src={imagesBanner1} alt="imagesBanner1" />
                                    </div>
                                    <div className={cx('content')}>
                                        <h1 className={cx('title')}>Nhận khóa học trực tuyến</h1>
                                        <p className={cx('description')}>
                                            Bạn muốn tiếp cận với kiến thức mới mỗi ngày và phát triển bản thân? Bạn
                                            muốn học tập linh hoạt và tiện lợi ngay tại nhà? Hãy đăng ký nhận khóa học
                                            trực tuyến ngay hôm nay!
                                        </p>
                                    </div>{' '}
                                    <div className={cx('join-button')}>
                                        <Link to="/" className={cx('btn-primary')}>
                                            <Button
                                                primary
                                                ExtraLarge
                                                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                                            >
                                                Tham gia
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className={cx('watch')}>
                                        <Link to="https://www.youtube.com/watch?v=BGkc6dKUZ84" className={cx('play-link')}>
                                            <FontAwesomeIcon icon={faCirclePlay} className={cx('icon')} />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
