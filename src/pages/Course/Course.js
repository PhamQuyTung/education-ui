import React from'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from'react-router-dom';
import Button from '~/components/Button';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';

import CourseSortBar from './CourseSortBar';
import CourseProduct from './CourseProduct';
import CoursePagination from './CoursePagination';

const cx = classNames.bind(styles);

function Course() {
    return (
        <div className={cx('Course')}>
            <CourseSortBar />
            {/* <CourseProduct />
            <CoursePagination /> */}
        </div>
    );
}

export default Course;
