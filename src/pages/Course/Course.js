import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from'react';
import { Link } from'react-router-dom';
import Button from '~/components/Button';
// import styles from './Course.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

function Course() {
    return (
        <div className="Course">
            <h2>List Course page</h2>
            {/* <div>
                <Link to="/courseDetail">
                    <Button ExtraLarge primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>Xem thêm chi tiết khóa học</Button>
                </Link>
            </div> */}
        </div>
    );
}

export default Course;
