import React, { useState } from 'react';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';

import CourseSortBar from './CourseSortBar';
import CoursePagination from './CoursePagination';
import ScrollToTopWithProgress from '~/components/ScrollToTopWithProgress';

const cx = classNames.bind(styles);

function Course() {
    return (
        <div className={cx('Course')}>
            <CourseSortBar />
            <ScrollToTopWithProgress />
        </div>
    );
}

export default Course;
