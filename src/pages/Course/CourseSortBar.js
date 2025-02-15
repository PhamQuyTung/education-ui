import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Row, Col } from 'react-bootstrap';

import styles from './Course.module.scss';
import SearchCourse from '~/components/SearchCourse';
import productCourses from '~/data/productCourses';
import { Card, CardItem } from '~/components/Card';

const cx = classNames.bind(styles);

const images = {
    'course_1.png': require('~/assets/images/Home/ProductContent/course_1.png'),
    'course_2.png': require('~/assets/images/Home/ProductContent/course_2.png'),
    'course_3.png': require('~/assets/images/Home/ProductContent/course_3.png'),
    'course_4.png': require('~/assets/images/Home/ProductContent/course_4.png'),
    'course_5.png': require('~/assets/images/Home/ProductContent/course_5.png'),
    'course_6.png': require('~/assets/images/Home/ProductContent/course_6.png'),
    'course_7.png': require('~/assets/images/Home/ProductContent/course_7.png'),
    'course_8.png': require('~/assets/images/Home/ProductContent/course_8.png'),
};

function SortBar() {
    // const [isSelected, setIsSelected] = useState('Sắp xếp theo chủ đề (A-Z)'); // Trạng thái khi người dùng đã bấm vào option chưa
    const [sortType, setSortType] = useState('Sắp xếp mặc định');
    const [sortedProducts, setSortedProducts] = useState(productCourses);

    // Xử lý khi người dùng chọn option
    // const handleSelect = (text) => {
    //     setIsSelected(text);
    // };

    // Hàm xử lý sắp xếp
    const handleSort = (type) => {
        let sorted = [...productCourses];

        switch (type) {
            case 'Sắp xếp theo chủ đề (A-Z)':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Sắp xếp theo chủ đề (Z-A)':
                sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'Sắp xếp theo giá tiền (cao nhất)':
                sorted.sort((a, b) => b.cost - a.cost);
                break;
            case 'Sắp xếp theo giá tiền (thấp nhất)':
                sorted.sort((a, b) => a.cost - b.cost);
                break;
            case 'Khóa học đang sale':
                sorted = sorted.filter((p) => p.cost < 1000000); // Giả sử giá < 1000000 là đang sale
                break;
            case 'Sắp xếp mặc định':
                sorted.sort((a, b) => a.id - b.id); // Sắp xếp theo id
                break;
            default:
                break;
        }

        setSortType(type);
        setSortedProducts(sorted);
    };

    return (
        <div className={cx('sb')}>
            <div className={cx('sb-quantity')}>
                <strong>11</strong> khóa học
            </div>
            {/* SearchCourse Component */}
            <SearchCourse />
            {/* SortBar */}
            <Tippy
                interactive // Cho phép tương tác với submenu
                trigger="click" // Chỉ xuất hiện khi bấm
                placement="bottom" // Vị trí hiển thị submenu
                // visible
                delay={[100, 0]}
                popperOptions={{
                    modifiers: [
                        { name: 'preventOverflow', options: { boundary: 'window' } }, // Ngăn menu bị đẩy ra ngoài
                        { name: 'flip', enabled: false }, // Tắt tự động đổi vị trí
                    ],
                }}
                render={(attrs) => (
                    <ul className={cx('sb-option_sub')} tabIndex="-1" {...attrs}>
                        <li className={cx('sb-option_item')} onClick={() => handleSort('Sắp xếp theo chủ đề (A-Z)')}>
                            <span>Sắp xếp theo chủ đề (A-Z)</span>
                        </li>

                        <li className={cx('sb-option_item')} onClick={() => handleSort('Sắp xếp theo chủ đề (Z-A)')}>
                            <span>Sắp xếp theo chủ đề (Z-A)</span>
                        </li>

                        <li
                            className={cx('sb-option_item')}
                            onClick={() => handleSort('Sắp xếp theo giá tiền (cao nhất)')}
                        >
                            <span>Sắp xếp theo giá tiền (cao nhất)</span>
                        </li>

                        <li
                            className={cx('sb-option_item')}
                            onClick={() => handleSort('Sắp xếp theo giá tiền (thấp nhất)')}
                        >
                            <span>Sắp xếp theo giá tiền (thấp nhất)</span>
                        </li>

                        <li className={cx('sb-option_item')} onClick={() => handleSort('Khóa học đang sale')}>
                            <span>Khóa học đang sale</span>
                        </li>

                        <li className={cx('sb-option_item')} onClick={() => handleSort('Sắp xếp mặc định')}>
                            <span>Sắp xếp mặc định</span>
                        </li>
                    </ul>
                )}
            >
                <div className={cx('sb-option')}>
                    <div className={cx('sb-option-button')}>
                        <button className={cx('sb-option-btn')}>
                            {sortType}
                            <FontAwesomeIcon icon={faAngleDown} className={cx('icon-AngleDown')} />
                        </button>
                    </div>
                </div>
            </Tippy>

            {/* Sản phẩm sau khi sắp xếp */}
            <Row>
                {sortedProducts.map((productCourse, index) => (
                    <Col lg={4} md={12} xs={12} key={index}>
                        <Card>
                            <CardItem
                                courseHours={productCourse.courseHours}
                                courseMinutes={productCourse.courseMinutes}
                                classNameCard={cx('custom-card')}
                                img={images[productCourse.image]}
                                clsContent={cx('custom-cardContent')}
                                title={productCourse.title}
                                quantityUnit={productCourse.quantityUnit}
                                quantityStudent={productCourse.quantityStudent}
                                level={productCourse.level}
                                toUser={productCourse.toUser}
                                ratingNum={productCourse.ratingNum}
                                userShortNamePosted={productCourse.userShortNamePosted}
                                userNamePosted={productCourse.userNamePosted}
                                cost={parseFloat(productCourse.cost)}
                                costSale={parseFloat(productCourse.costSale)}
                                toCourse={productCourse.toCourse}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default SortBar;
