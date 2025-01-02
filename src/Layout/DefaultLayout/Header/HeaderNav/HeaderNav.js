// import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderNav() {
    return (
        <div className={cx('header-nav')}>
            <h2>Header Nav</h2>
        </div>
    );
}

export default HeaderNav;