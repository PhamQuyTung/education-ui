import styles from './Course.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('pagination')}>
            <h3>Product Courses</h3>
        </div>
    );
}

export default Pagination;
