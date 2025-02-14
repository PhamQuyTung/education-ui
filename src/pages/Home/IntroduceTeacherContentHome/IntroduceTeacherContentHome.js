import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMinus, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './IntroduceTeacherContentHome.module.scss';
import Title from '~/components/Title';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Teachers from '~/data/Teachers';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import shapeHomeTeacher1 from '~/assets/images/Home/TeacherIntroduce/team-shape_1_1.webp';
import shapeHomeTeacher2 from '~/assets/images/Home/TeacherIntroduce/team-shape_1_2.webp';
import shapeHomeTeacher3 from '~/assets/images/Home/TeacherIntroduce/team-shape_1_3.webp';
import shapeHomeTeacher4 from '~/assets/images/Home/TeacherIntroduce/team-shape_1_4.webp';
import shapeHomeTeacher5 from '~/assets/images/Home/TeacherIntroduce/team-shape_1_5.webp';

const cx = classNames.bind(styles);

const TeacherImages = {
    'team_1_1.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_1.webp'),
    'team_1_2.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_2.webp'),
    'team_1_3.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_3.webp'),
    'team_1_4.webp': require('~/assets/images/Home/TeacherIntroduce/team_1_4.webp'),
};

function IntroduceTeacherContentHome() {
    const [hoveredId, setHoveredId] = useState(null); // State để lưu ID phần tử đang được hover

    // Sử dụng useInView để theo dõi phần tử vào viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Kích hoạt một lần
        threshold: 0.2, // Kích hoạt khi 20% phần tử xuất hiện trong viewport
    });

    return (
        <div className={cx('teacher')}>
            <div className={cx('wrapper')}>
                <Row ref={ref}>
                    <Col lg={6} md={12} xs={12} className={cx('custom-colW100')}>
                        <motion.div
                            className={cx('title-heading')}
                            initial={{ opacity: 0, x: -400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}} // Kích hoạt khi inView = true
                            transition={{ duration: 1 }}
                        >
                            <Title
                                title="Giảng viên của chúng tôi"
                                sub="Gặp gỡ giảng viên chuyên nghiệp của chúng tôi"
                                description1="Giảng viên của chúng tôi là những chuyên gia tận tâm và giàu kinh nghiệm trong lĩnh vực của mình. Chúng tôi tự hào có đội ngũ giảng viên chuyên nghiệp, được tuyển chọn kỹ lưỡng và có trình độ học vấn cao."
                                description2="Họ không chỉ có kiến thức sắc bén, mà còn có khả năng truyền đạt và tạo động lực cho học viên."
                                clsSub={cx('custom-box')}
                            />

                            <div className={cx('wrap-btn')}>
                                <Link to="/course" className={cx('course-link')}>
                                    <Button primary ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                        Khám phá khóa học
                                    </Button>
                                </Link>
                                <Link to="/contact" className={cx('contact-link')}>
                                    <Button primary2 ExtraLarge rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                        Liên hệ
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={6} md={12} xs={12} className={cx('custom-col')}>
                        <motion.div
                            className={cx('teacher-wrap')}
                            initial={{ opacity: 0, x: 400 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <Row>
                                {Teachers.map((teacher) => (
                                    <Col lg={6} md={6} xs={12} className={cx('custom-col_product')} key={teacher.id}>
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
                    </Col>

                    <div className={cx('shape-wrap')}>
                        <div className={cx('shapeHomeTC1')}>
                            <Image src={shapeHomeTeacher1} alt="shapeHomeTeacher1" />
                        </div>
                        <div className={cx('shapeHomeTC2')}>
                            <Image src={shapeHomeTeacher2} alt="shapeHomeTeacher2" />
                        </div>
                        <div className={cx('shapeHomeTC3')}>
                            <Image src={shapeHomeTeacher3} alt="shapeHomeTeacher3" />
                        </div>
                        <div className={cx('shapeHomeTC4')}>
                            <Image src={shapeHomeTeacher4} alt="shapeHomeTeacher4" />
                        </div>
                        <div className={cx('shapeHomeTC5')}>
                            <Image src={shapeHomeTeacher5} alt="shapeHomeTeacher5" />
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
}

export default IntroduceTeacherContentHome;
