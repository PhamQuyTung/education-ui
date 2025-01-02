import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import logo from '~/assets/logo/logo.png'

const cx = classNames.bind(styles);

function HeaderNav() {
    return (
        <div className={cx('header-nav')}>
            <div className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Image className={cx('img')} src={logo} alt='logo' />
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;