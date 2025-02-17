import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMinus, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Teacher.module.scss';
import Image from '~/components/Image';
import TeacherTeam from '~/data/TeacherTeam';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Title from '~/components/Title';
import imgContentTeacher from '~/assets/images/TeacherTeam/TeacherTeam1.png';
import imgShapeTeacher from '~/assets/images/TeacherTeam/blog-3-bg-shape.webp';

const cx = classNames.bind(styles);

const TeacherImages = {
    'team_1_1.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_1.webp'),
    'team_1_2.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_2.webp'),
    'team_1_3.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_3.webp'),
    'team_1_4.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_4.webp'),
    'team_1_5.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_5-Copy.webp'),
    'team_1_6.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_6-Copy.webp'),
    'team_1_7.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_7-Copy.webp'),
    'team_1_8.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_8-Copy.webp'),
};

function Teacher() {
    const [hoveredId, setHoveredId] = useState(null); // State để lưu ID phần tử đang được hover

    // Sử dụng useInView để theo dõi phần tử vào viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Kích hoạt một lần
        threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
    });

    return (
        <div className={cx('teacherTeam')}>
            <motion.div
                ref={ref}
                className={cx('teacher-wrap')}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}} // Kích hoạt khi inView = true
                transition={{ duration: 1 }}
            >
                <Row>
                    {TeacherTeam.map((teacher) => (
                        <Col xl={3} lg={4} md={6} xs={12} className={cx('custom-col_product')} key={teacher.id}>
                            <div className={cx('teacher-item')}>
                                <div className={cx('img-wrap')}>
                                    <Image src={TeacherImages[teacher.img]} alt={teacher.name} />
                                    {/* Hiển thị teacher-social nếu visibleId trùng với teacher.id */}
                                    <div className={cx('teacher-social')}>
                                        <Tippy
                                            interactive
                                            // visible
                                            placement="bottom-end"
                                            delay={[300, 0]}
                                            render={(attrs) => (
                                                <ul className={cx('social-list')} tabIndex="-1" {...attrs}>
                                                    <li className={cx('social-item')}>
                                                        <Link to="/" className={cx('social-link')}>
                                                            <FontAwesomeIcon
                                                                icon={faFacebook}
                                                                className={cx('social-icon')}
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li className={cx('social-item')}>
                                                        <Link to="/" className={cx('social-link')}>
                                                            <FontAwesomeIcon
                                                                icon={faTwitter}
                                                                className={cx('social-icon')}
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li className={cx('social-item')}>
                                                        <Link to="/" className={cx('social-link')}>
                                                            <FontAwesomeIcon
                                                                icon={faInstagram}
                                                                className={cx('social-icon')}
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li className={cx('social-item')}>
                                                        <Link to="/" className={cx('social-link')}>
                                                            <FontAwesomeIcon
                                                                icon={faTiktok}
                                                                className={cx('social-icon')}
                                                            />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}
                                        >
                                            <div
                                                className={cx('plus-btn')}
                                                onMouseEnter={() => setHoveredId(teacher.id)} // Hover vào phần tử hiện tại
                                                onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi, reset về null
                                            >
                                                <FontAwesomeIcon
                                                    icon={hoveredId === teacher.id ? faMinus : faPlus} // So sánh ID và thay đổi icon theo trạng thái
                                                    className={cx('icon-plus')}
                                                />
                                            </div>
                                        </Tippy>
                                    </div>
                                </div>

                                <div className={cx('info')}>
                                    <div className={cx('teacher-info')}>
                                        <Link to="/">{teacher.name}</Link>
                                        <p>{teacher.position}</p>
                                    </div>

                                    <div className={cx('team-info')}>
                                        <p className={cx('team-info1')}>
                                            <FontAwesomeIcon icon={faFile} className={cx('icon')} />{' '}
                                            {teacher.QuantityCourse} Khóa học
                                        </p>
                                        <p className={cx('team-info2')}>
                                            <FontAwesomeIcon icon={faUsers} className={cx('icon')} />{' '}
                                            {teacher.QuantityStudent}+ Học viên
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </motion.div>

            <div className={cx('teacher-content')}>
                <div className={cx('teacher-content_wrapper')}>
                    <Row className={cx('custom-row')}>
                        <Col lg={6} md={12} xs={12} className={cx('custom-bigCol')}>
                            <Title
                                title="Giảng viên"
                                sub="Trở thành giảng viên trên nền tảng trực tuyến của chúng tôi"
                                buttonDescription="Đăng ký"
                                to="/"
                                clsSub={cx('custom-sub')}
                            >
                                <div className={cx('content-info')}>
                                    <Row>
                                        <Col lg={6} md={6} xs={12} className={cx('custom-colPd')}>
                                            <div className={cx('info-card')}>
                                                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                                                <h4>Dạy theo cách hiện đại</h4>
                                            </div>
                                        </Col>

                                        <Col lg={6} md={6} xs={12} className={cx('custom-colPd')}>
                                            <div className={cx('info-card')}>
                                                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                                                <h4>Lập kế hoạch chương trình dạy</h4>
                                            </div>
                                        </Col>

                                        <Col lg={6} md={6} xs={12} className={cx('custom-colPd')}>
                                            <div className={cx('info-card')}>
                                                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                                                <h4>Ghi lại video</h4>
                                            </div>
                                        </Col>

                                        <Col lg={6} md={6} xs={12} className={cx('custom-colPd')}>
                                            <div className={cx('info-card')}>
                                                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                                                <h4>Khởi động khóa học</h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Title>
                        </Col>

                        <Col lg={6} md={12} xs={12} className={cx('custom-bigColCt')}>
                            <div className={cx('img-content')}>
                                <Image src={imgContentTeacher} alt="imgContentTeacher" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Teacher;
