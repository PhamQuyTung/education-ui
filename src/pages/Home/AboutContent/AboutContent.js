import styles from './AboutContent.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import classNames from 'classnames/bind';
import Title from '~/components/Title';
import Image from '~/components/Image';
import image1 from '~/assets/images/Home/AboutContent/about1.webp'
import image2 from '~/assets/images/Home/AboutContent/about_1_2.webp'
import image3 from '~/assets/images/Home/AboutContent/about_1_3.webp'
import image4 from '~/assets/images/Home/AboutContent/about_1_4.webp'
import shape1 from '~/assets/images/Home/AboutContent/BookShape.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AboutContent() {
    return (
        <div className={cx('about-content')}>
            <Container className={cx('wrapper')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('content-img')}>
                            <div className={cx('img1-wrap')}>
                                <Image src={image1} alt="image1" />
                            </div>

                            {/* <div className={cx('img2-wrap')}>
                                <Image src={image2} alt="image2" />
                            </div>

                            <div className={cx('img3-wrap')}>
                                <Image src={image3} alt="image3" />
                            </div>

                            <div className={cx('img4-wrap')}>
                                <Image src={shape1} alt="shape1" />
                            </div> */}
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('content-title')}>
                            <Title
                                title="Giới thiệu"
                                sub="Chào mừng đến Mona Media"
                                description1="Bạn muốn nâng cao kiến thức và kỹ năng của mình? Bạn muốn học những khóa học chất lượng từ những chuyên gia hàng đầu trong ngành? Hãy ghé thăm Website Bán Khóa học của chúng tôi!"
                                description2="Chúng tôi là một nền tảng học trực tuyến cung cấp một loạt các khóa học đa dạng và chất lượng, từ marketing, kinh doanh, phát triển cá nhân, thiết kế đến kỹ năng sống và nhiều lĩnh vực khác. Với đội ngũ giảng viên giàu kinh nghiệm và kiến thức chuyên môn sâu rộng, chúng tôi cam kết mang đến cho bạn những khóa học chất lượng cao và mang tính thực tiễn."
                                buttonDescription="Tìm hiểu thêm"
                                clsSub={cx('custom-sub')}
                                to="/introduce"
                            >
                                <Row className={cx('check')}>
                                    <Col lg={4} md={5} xs={12} className={cx('check-img')}>
                                        <Image src={image4} alt="image4" className={cx('custom-img')} />
                                    </Col>
                                    
                                    <Col lg={7} md={5} xs={12} className={cx('check-content')}>
                                        <ul className={cx('check-list')}>
                                            <li className={cx('check-item')}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                    Được tiếp cận hơn 1000 khóa học hàng đầu
                                                </span>
                                            </li>

                                            <li className={cx('check-item')}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                    Các chủ đề phổ biến để tìm hiểu ngay bây giờ
                                                </span>
                                            </li>

                                            <li className={cx('check-item')}>
                                                <span>
                                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                                                    Tìm người hướng dẫn phù hợp cho bạn
                                                </span>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Title>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutContent;
