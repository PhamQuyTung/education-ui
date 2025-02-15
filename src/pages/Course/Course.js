import React, { useState } from 'react';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';

import CourseSortBar from './CourseSortBar';
import CourseProduct from './CourseProduct';
import CoursePagination from './CoursePagination';

const cx = classNames.bind(styles);

function Course() {
    const [page, setPage] = useState(1);
    const totalPages = 5; // Tổng số trang
    return (
        <div className={cx('Course')}>
            <CourseSortBar />
            {/* <CourseProduct /> */}
            <CoursePagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}

export default Course;
