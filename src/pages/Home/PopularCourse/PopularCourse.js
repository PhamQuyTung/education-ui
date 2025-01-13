import classNames from 'classnames/bind';

import styles from './PopularCourse.module.scss';
import Title from '~/components/Title';
import PopularCourseProduct from './PopularCourseProduct';

const cx = classNames.bind(styles);

function PopularCourse() {
    return (
        <div className={cx('pp-course')}>
            <div className={cx('wrapper')}>
                <Title
                    title="Phổ biến hàng đầu"
                    sub="Các khóa học phổ biến"
                    clsSub={cx('custom-subTitle')}
                    buttonDescription="Xem tất cả khoá học"
                    to="/course"
                    clsBox={cx('custom-box')}
                />
                <div className={cx('products')}>
                    <PopularCourseProduct/>
                </div>
            </div>
        </div>
    );
}

export default PopularCourse;
