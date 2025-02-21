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
import CoursePagination from './CoursePagination';
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
    'course_9.png': require('~/assets/images/Home/ProductContent/course_9.png'),
    'course_10.png': require('~/assets/images/Home/ProductContent/course_10.png'),
    'course_11.png': require('~/assets/images/Home/ProductContent/course_11.png'),
    'course_12.png': require('~/assets/images/Home/ProductContent/course_12.png'),
    // 'course_13.png': require('~/assets/images/Home/ProductContent/course_13.png'),
    // 'course_14.png': require('~/assets/images/Home/ProductContent/course_14.png'),
    // 'course_15.png': require('~/assets/images/Home/ProductContent/course_15.png'),
    // 'course_16.png': require('~/assets/images/Home/ProductContent/course_16.png'),
    // 'course_17.png': require('~/assets/images/Home/ProductContent/course_17.png'),
    // 'course_18.png': require('~/assets/images/Home/ProductContent/course_18.png'),
    // 'course_19.png': require('~/assets/images/Home/ProductContent/course_19.png'),
    // 'course_20.png': require('~/assets/images/Home/ProductContent/course_20.png'),
    // 'course_21.png': require('~/assets/images/Home/ProductContent/course_21.png'),
};

function SortBar() {
    const [sortType, setSortType] = useState('Sắp xếp mặc định');
    
    const [sortedProducts, setSortedProducts] = useState(productCourses);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Giới hạn sản phẩm mỗi trang

    // Hàm xử lý sắp xếp
    const handleSort = (type) => {
        let sorted = [...productCourses];

        switch (type) {
            case 'Sắp xếp theo chủ đề (A-Z)':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Sắp xếp theo chủ đề (Z-A)':
                sorted.sort((b, a) => a.title.localeCompare(b.title));
                break;
            case 'Sắp xếp theo giá tiền (cao nhất)':
                sorted.sort((a, b) => (b.costSale ?? b.cost) - (a.costSale ?? a.cost));
                break;
            case 'Sắp xếp theo giá tiền (thấp nhất)':
                sorted.sort((a, b) => (a.costSale ?? a.cost) - (b.costSale ?? b.cost));
                break;
            case 'Khóa học đang sale':
                sorted = sorted.filter((p) => p.costSale && p.costSale < p.cost);
                break;
            case 'Sắp xếp mặc định':
                sorted.sort((a, b) => a.id - b.id);
                break;
            default:
                break;
        }

        setSortType(type);
        setSortedProducts(sorted);
        setCurrentPage(1); // Reset về trang đầu khi thay đổi sắp xếp
    };

    // Tính tổng số trang
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    // Lọc danh sách khóa học cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    return (
        <div className={cx('sb')}>
            <div className={cx('sb-quantity')}>
                <strong>{sortedProducts.length}</strong> khóa học
            </div>

            <SearchCourse />

            <div>
                <Tippy
                    interactive
                    trigger="click"
                    placement="bottom"
                    delay={[100, 0]}
                    popperOptions={{
                        modifiers: [
                            { name: 'preventOverflow', options: { boundary: 'window' } },
                            { name: 'flip', enabled: false },
                        ],
                    }}
                    render={(attrs) => (
                        <ul className={cx('sb-option_sub')} tabIndex="-1" {...attrs}>
                            <li
                                className={cx('sb-option_item')}
                                onClick={() => handleSort('Sắp xếp theo chủ đề (A-Z)')}
                            >
                                <span>Sắp xếp theo chủ đề (A-Z)</span>
                            </li>
                            <li
                                className={cx('sb-option_item')}
                                onClick={() => handleSort('Sắp xếp theo chủ đề (Z-A)')}
                            >
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
            </div>

            {/* Sản phẩm sau khi sắp xếp */}
            <Row>
                {currentProducts.map((productCourse, index) => (
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
                                costSale={productCourse.costSale ? parseFloat(productCourse.costSale) : null}
                                toCourse={productCourse.toCourse}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Pagination */}
            {totalPages > 1 && (
                <CoursePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
        </div>
    );
}

export default SortBar;
