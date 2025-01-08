import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
// import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBook, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

import styles from './HeaderNav.module.scss';
import logo from '~/assets/logo/logo.png';
import Image from '~/components/Image';
import Cart from '~/components/Cart';
import Menu from '~/components/Popper/Menu';
import Notification from '~/components/Notification';
import MenuOption from '~/Layout/DefaultLayout/Header/HeaderNav/menuItemOption';
import SearchHeader from '~/components/Search';
import { useTheme } from '~/context/ThemeContext';
import '~/styles/theme.css';
// import '~/i18n'; // Import file cấu hình i18n
// import LanguageSwitcher from "~/components/LanguageSwitcher";

const cx = classNames.bind(styles);

function HeaderNav() {
    const imageReft = useRef(null);

    const { theme } = useTheme();

    // const { t, i18n } = useTranslation();

    // function handleMenuChange(menuItem) {
    //     if (menuItem.code) {
    //         i18n.changeLanguage(menuItem.code); // Thay đổi ngôn ngữ
    //     }
    //     console.log(menuItem);
    // }

    // dark mode logic
    useEffect(() => {
        document.body.className = theme; // Cập nhật class cho body
    }, [theme]);

    // renderMenuSub
    const renderSubMenu = () => (
        <ul className={cx('sub-menu')}>
            {[
                { to: '/events', label: 'Sự kiện' },
                { to: '/teacher', label: 'Giảng viên' },
                { to: '/news', label: 'Tin tức' },
            ].map(({ to, label }) => (
                <li key={to} className={cx('sub-item')}>
                    <NavLink to={to} className={({ isActive }) => cx('sub-item__link', { activeSub: isActive })}>
                        <FontAwesomeIcon className={cx('sub-item__icon')} icon={faBook} />
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    // xử lý logic menu
    // function handleMenuChange(menuItem) {
    //     console.log(menuItem);
    // }

    // Logic Header 
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY >= 1000);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup sự kiện khi component bị hủy
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // return jsx
    return (
        <div className={cx('header-nav', { 'ps-fix': isFixed })}>
            <div className={cx('wrapper')}>
                {/* Logo */}
                <Link to='/' className={cx('logo')}>
                    <Image ref={imageReft} className={cx('img')} src={logo} alt="logo" />
                </Link>

                {/* Main Menu */}
                <ul className={cx('menu')}>
                    {[
                        { to: '/', label: 'Trang chủ' },
                        { to: '/introduce', label: 'Giới thiệu' },
                        { to: '/course', label: 'Khóa học' },
                    ].map(({ to, label }) => (
                        <li key={to} className={cx('item')}>
                            <NavLink to={to} className={({ isActive }) => cx('link', { active: isActive })}>
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    {/* Dropdown Menu */}
                    <li className={cx('item')}>
                        <Tippy interactive placement="bottom" delay={[300, 0]} render={renderSubMenu}>
                            <span className={cx('link')}>
                                Hoạt động
                                <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                            </span>
                        </Tippy>
                    </li>
                    <li className={cx('item')}>
                        <NavLink to="/contact" className={({ isActive }) => cx('link', { active: isActive })}>
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>

                {/* ACTIONS */}
                <ul className={cx('actions')}>
                    {/* SEARCH */}
                    <SearchHeader />

                    {/* Sử dụng Cart Component */}
                    {/* cartCount tùy chỉnh số lượng giỏ hàng */}
                    <Cart cartCount={0} />

                    {/* Notification */}
                    <Notification notificationCount={0} />

                    {/* OPTIONS */}
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
