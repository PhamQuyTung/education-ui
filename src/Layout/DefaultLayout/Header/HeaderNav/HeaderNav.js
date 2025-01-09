import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBook, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './HeaderNav.module.scss';
import logo from '~/assets/logo/logo.png';
import Image from '~/components/Image';
import Cart from '~/components/Cart';
import Menu from '~/components/Popper/Menu';
import Notification from '~/components/Notification';
import MenuOption from '~/Layout/DefaultLayout/Header/HeaderNav/menuItemOption';
import SearchHeader from '~/components/Search';
import { useTheme } from '~/context/ThemeContext';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    { to: '/', label: 'Trang chủ' },
    { to: '/introduce', label: 'Giới thiệu' },
    { to: '/course', label: 'Khóa học' },
    { to: '/contact', label: 'Liên hệ' },
];

const SUB_MENU_ITEMS = [
    { to: '/events', label: 'Sự kiện' },
    { to: '/teacher', label: 'Giảng viên' },
    { to: '/news', label: 'Tin tức' },
];

function HeaderNav() {
    const imageRef = useRef(null);
    const { theme } = useTheme();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        // Áp dụng theme
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY >= 1000);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderMenuItems = (items, isSubMenu = false) =>
        items.map(({ to, label }) => (
            <li key={to} className={cx(isSubMenu ? 'sub-item' : 'item')}>
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        cx(isSubMenu ? 'sub-item__link' : 'link', { [isSubMenu ? 'activeSub' : 'active']: isActive })
                    }
                >
                    {isSubMenu && <FontAwesomeIcon className={cx('sub-item__icon')} icon={faBook} />}
                    {label}
                </NavLink>
            </li>
        ));

    const renderSubMenu = () => <ul className={cx('sub-menu')}>{renderMenuItems(SUB_MENU_ITEMS, true)}</ul>;

    return (
        <div className={cx('header-nav', { 'ps-fix': isFixed })}>
            <div className={cx('wrapper')}>
                {/* Logo */}
                <Link to="/" className={cx('logo')}>
                    <Image ref={imageRef} className={cx('img')} src={logo} alt="logo" />
                </Link>

                {/* Main Menu */}
                <ul className={cx('menu')}>
                    {renderMenuItems(MENU_ITEMS.slice(0, -1))}
                    <li className={cx('item')}>
                        <Tippy interactive placement="bottom" delay={[300, 0]} render={renderSubMenu}>
                            <span className={cx('link')}>
                                Hoạt động
                                <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                            </span>
                        </Tippy>
                    </li>
                    {renderMenuItems([MENU_ITEMS[MENU_ITEMS.length - 1]])}
                </ul>

                {/* Actions */}
                <ul className={cx('actions')}>
                    <SearchHeader />
                    <Cart cartCount={0} />
                    <Notification notificationCount={0} />
                    <div className={cx('option-wrapper')}>
                        <Menu items={MenuOption} className={cx('custom-menu')}>
                            <li className={cx('option')}>
                                <FontAwesomeIcon className={cx('icon-option')} icon={faEllipsis} />
                            </li>
                        </Menu>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNav;
