import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Card, CardItem } from '~/components/Card';
import { MarketingIcon, UiUxIcon, SSIcon } from '~/components/Icons';
import styles from './Card.module.scss';
import { productSliderConfig } from '~/libs/swiperConfigs';

const cx = classNames.bind(styles);

// Dữ liệu danh sách
const categories = [
    {
        icon: <MarketingIcon className={cx('icon')} />,
        title: 'Marketing',
        sub: '51+ Khóa học',
        buttonDescription: 'XEM THÊM',
    },
    {
        icon: <UiUxIcon className={cx('icon')} />,
        title: 'Thiết kế UX/UI',
        sub: '31+ Khóa học',
        buttonDescription: 'XEM THÊM',
    },
    {
        icon: <SSIcon className={cx('icon')} />,
        title: 'Thiết kế đồ họa',
        sub: '24+ Khóa học',
        buttonDescription: 'XEM THÊM',
    },
    {
        icon: <MarketingIcon className={cx('icon')} />,
        title: 'Phát triển web',
        sub: '56+ Khóa học',
        buttonDescription: 'XEM THÊM',
    },
    {
        icon: <MarketingIcon className={cx('icon')} />,
        title: 'Doanh nghiệp',
        sub: '21+ Khóa học',
        buttonDescription: 'XEM THÊM',
    },
    {
        icon: <UiUxIcon className={cx('icon')} />,
        title: 'Nhiếp ảnh',
        sub: '112+ Khóa học',
        buttonDescription: 'XEM THÊM',
    },
];

function CategoryList() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Chỉ kích hoạt animation một lần khi nội dung vào viewport
        threshold: 0.2, // Tỷ lệ phần tử cần hiển thị để trigger animation (0.2 tức 20%)
    });

    return (
        <Card>
            <Row ref={ref}>
                <Swiper {...productSliderConfig} className={cx('custom-slider')}>
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <Col lg={4} md={12} xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CardItem
                                        icon={category.icon}
                                        title={category.title}
                                        sub={category.sub}
                                        buttonDescription={category.buttonDescription}
                                        to="/"
                                    />
                                </motion.div>
                            </Col>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Row>
        </Card>
    );
}

export default CategoryList;
