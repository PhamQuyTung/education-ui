import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Card, CardItem } from '~/components/Card';
import { MarketingIcon, UiUxIcon, SSIcon } from '~/components/Icons';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CategoryList() {
    return (
        <Card>
            <Row>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // Chỉ giữ các module cần thiết
                    effect="slide" // Sử dụng hiệu ứng trượt
                    autoplay={{
                        delay: 5000, // Thời gian chuyển đổi (5 giây)
                        disableOnInteraction: false, // Không dừng autoplay khi tương tác
                    }}
                    spaceBetween={25} // Khoảng cách giữa các slide
                    slidesPerView={4} // Hiển thị 1 slide
                    // navigation={true} // Hiển thị nút "Next" và "Previous".
                    // pagination={{ clickable: true }} // Hiển thị phân trang
                    speed={1000} // Tốc độ chuyển đổi (1 giây)
                    loop={true} // Lặp lại slider
                    allowTouchMove={true} // Allow touchmove to move the slider
                    breakpoints={{
                        300: { slidesPerView: 1, spaceBetween: 30 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 25 },
                    }}
                    className={cx('custom-slider')}
                >
                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<MarketingIcon className={cx('icon')} />}
                                title="Marketing"
                                sub="51+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<UiUxIcon className={cx('icon')} />}
                                title="Thiết kế UX/UI"
                                sub="31+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<SSIcon className={cx('icon')} />}
                                title="Thiết kế đồ họa"
                                sub="24+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<MarketingIcon className={cx('icon')} />}
                                title="Phát triển web"
                                sub="56+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<MarketingIcon className={cx('icon')} />}
                                title="Doanh nghiệp"
                                sub="21+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<UiUxIcon className={cx('icon')} />}
                                title="Nhiếp ảnh"
                                sub="112+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<MarketingIcon className={cx('icon')} />}
                                title="Marketing"
                                sub="51+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<UiUxIcon className={cx('icon')} />}
                                title="Thiết kế UX/UI"
                                sub="31+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<SSIcon className={cx('icon')} />}
                                title="Thiết kế đồ họa"
                                sub="24+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<MarketingIcon className={cx('icon')} />}
                                title="Phát triển web"
                                sub="56+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<MarketingIcon className={cx('icon')} />}
                                title="Doanh nghiệp"
                                sub="21+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Col lg={4} md={12} xs={12}>
                            <CardItem
                                icon={<UiUxIcon className={cx('icon')} />}
                                title="Nhiếp ảnh"
                                sub="10+ Khóa học"
                                buttonDescription="XEM THÊM"
                            />
                        </Col>
                    </SwiperSlide>
                </Swiper>
            </Row>
        </Card>
    );
}

export default CategoryList;
