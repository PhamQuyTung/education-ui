import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleRight,
    faBars,
    faBook,
    faEllipsis,
    faMinus,
    faPlus,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
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
import ModalNavBars from '~/components/Modal';

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

function HeaderNav({ isHidden, currentUser }) {
    const imageRef = useRef(null);
    const { theme } = useTheme();
    const [isFixed, setIsFixed] = useState(false);
    const [isOppenModalNavBarsMobile, setIsOppenModalNavBarsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => setIsOpen(!isOpen);
    const toggleModalNavBarsMobile = () => setIsOppenModalNavBarsMobile(!isOppenModalNavBarsMobile);

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
        <div className={cx('header-nav', { 'ps-fix': isFixed }, { 'dp-none': isHidden })}>
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
                    {currentUser && <Notification notificationCount={0} />} {/* Hiển thị nếu currentUser = true */}
                    <div className={cx('option-wrapper')}>
                        <Menu items={MenuOption} className={cx('custom-menu')}>
                            <li className={cx('option')}>
                                <FontAwesomeIcon className={cx('icon-option')} icon={faEllipsis} />
                            </li>
                        </Menu>
                    </div>
                </ul>

                {/* Header-navbars-menu__mbtl */}
                <div className={cx('Header-navbars-menu__mbtl')}>
                    {/* <SearchHeader /> */}
                    <Cart cartCount={0} />
                    {currentUser && <Notification notificationCount={0} />} {/* Hiển thị nếu currentUser = true */}
                    <button
                        onClick={toggleModalNavBarsMobile}
                        className={cx('Header-navbars-menu__mbtl-btn')}
                    >
                        <FontAwesomeIcon icon={faBars} className={cx('icon-bars')} />
                    </button>
                    <ModalNavBars
                        clsOL={cx('custom-overlay')}
                        clsModal={cx('custom-modal', { 'show' : isOppenModalNavBarsMobile })}
                        clsContent={cx('custom-content')}
                        clsBtn={cx('custom-btn')}
                        isOpen={isOppenModalNavBarsMobile}
                        onClose={toggleModalNavBarsMobile}
                    >
                        <Link to="/" className={cx('logo-mobile')}>
                            <Image ref={imageRef} className={cx('img')} src={logo} alt="logo" />
                        </Link>

                        <form action="/">
                            <div className={cx('actions-search-sub')}>
                                <input
                                    className={cx('search-input')}
                                    type="text"
                                    placeholder="Tìm kiếm khóa học...."
                                    required
                                />
                                <button className={cx('btn-submit')} type="submit">
                                    <FontAwesomeIcon className={cx('icon-submit')} icon={faSearch} />
                                </button>
                            </div>
                        </form>

                        <ul className={cx('header-navbars-menu__mbtl-list')}>
                            <li className={cx('item-mobile')}>
                                <NavLink to="/" className={cx('link-mobile')}>
                                    <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                    Trang chủ
                                </NavLink>
                            </li>

                            <li className={cx('item-mobile')}>
                                <NavLink to="/introduce" className={cx('link-mobile')}>
                                    <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                    Giới thiệu
                                </NavLink>
                            </li>

                            <li className={cx('item-mobile')}>
                                <NavLink to="/course" className={cx('link-mobile')}>
                                    <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                    Khóa học
                                </NavLink>
                            </li>

                            {/* Hoạt động - Có submenu */}
                            <li className={cx('item-mobile', { open: isOpen })}>
                                <div className={cx('item-mobile__wrap')}>
                                    <Link to="#" className={cx('link-mobile')}>
                                        <FontAwesomeIcon
                                            icon={isOpen ? faAngleDown : faAngleRight}
                                            className={cx('icon-angleRight')}
                                        />
                                        Hoạt Động
                                    </Link>

                                    <FontAwesomeIcon
                                        icon={isOpen ? faMinus : faPlus}
                                        className={cx('icon-toggle')}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSubMenu();
                                        }}
                                    />
                                </div>
                            </li>

                            {/* Submenu */}
                            {isOpen && (
                                <ul className={cx('submenu')}>
                                    <li className={cx('submenu-item')}>
                                        <NavLink to="/events" className={cx('link-mobile')}>
                                            <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                            Sự kiện
                                        </NavLink>
                                    </li>
                                    <li className={cx('submenu-item')}>
                                        <NavLink to="/teacher" className={cx('link-mobile')}>
                                            <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                            Giảng viên
                                        </NavLink>
                                    </li>
                                    <li className={cx('submenu-item')}>
                                        <NavLink to="/news" className={cx('link-mobile')}>
                                            <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                            Tin tức
                                        </NavLink>
                                    </li>
                                </ul>
                            )}

                            <li className={cx('item-mobile')}>
                                <NavLink to="/contact" className={cx('link-mobile')}>
                                    <FontAwesomeIcon icon={faAngleRight} className={cx('icon-angleRight')} />
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </ModalNavBars>
                </div>
            </div>
        </div>
    );
}

HeaderNav.propTypes = {
    isHidden: PropTypes.bool,
    isFixed: PropTypes.bool,
    currentUser: PropTypes.bool,
    notificationCount: PropTypes.number,
};

export default HeaderNav;
