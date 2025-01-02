import styles from './HeaderTop.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <div className={cx('header-top')}>
            <h2>Header Top</h2>

        </div>
    );
}

export default HeaderTop;
