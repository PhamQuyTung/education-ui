import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

import styles from './IntroduceTeacherContentHome.module.scss';
import Title from '~/components/Title';
import Image from '~/components/Image';
import shape1 from '~/assets/images/Home/SaleContent/cta_2_shape1.webp';
import shape2 from '~/assets/images/Home/SaleContent/cta_2_shape2.webp';
import shape3 from '~/assets/images/Home/SaleContent/cta_2_shape3.webp';

const cx = classNames.bind(styles);

function IntroduceTeacherContentHome() {
    return (
        <div className={cx('teacher')}>
            <div className={cx('wrapper')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <Title
                            title="Giảng viên của chúng tôi"
                            sub="Gặp gỡ giảng viên chuyên nghiệp của chúng tôi"
                            description1="Giảng viên của chúng tôi là những chuyên gia tận tâm và giàu kinh nghiệm trong lĩnh vực của mình. Chúng tôi tự hào có đội ngũ giảng viên chuyên nghiệp, được tuyển chọn kỹ lưỡng và có trình độ học vấn cao."
                            description2="Họ không chỉ có kiến thức sắc bén, mà còn có khả năng truyền đạt và tạo động lực cho học viên."
                            buttonDescription="Liên hệ ngay"
                            to="/contact"
                        />
                    </Col>

                    <Col lg={6} md={12} xs={12}></Col>
                </Row>
            </div>
        </div>
    );
}

export default IntroduceTeacherContentHome;
