import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import logo from '~/assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faBook,
    faCartShopping,
    faChevronCircleDown,
    faEllipsis,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

const cx = classNames.bind(styles);

function HeaderNav() {
    const [activeIndex, setActiveIndex] = useState(0);

    const imageReft = useRef(null);

    // console.log('imageReft in HeaderNav:', imageReft);

    return (
        <div className={cx('header-nav')}>
            <div className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Image ref={imageReft} className={cx('img')} src={logo} alt="logo" />
                </div>

                <ul className={cx('menu')}>
                    <li className={cx('item')}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => cx('link', { active: isActive })}
                            onClick={() => setActiveIndex(activeIndex)}
                        >
                            Trang chủ
                        </NavLink>
                    </li>

                    <li className={cx('item')}>
                        <NavLink
                            to="/introduce"
                            className={({ isActive }) => cx('link', { active: isActive })}
                            onClick={() => setActiveIndex(activeIndex)}
                        >
                            Giới thiệu
                        </NavLink>
                    </li>

                    <li className={cx('item')}>
                        <NavLink
                            to="/course"
                            className={({ isActive }) => cx('link', { active: isActive })}
                            onClick={() => setActiveIndex(activeIndex)}
                        >
                            Khóa học
                        </NavLink>
                    </li>

                    <li className={cx('item')}>
                        <Tippy
                            interactive
                            placement="bottom"
                            // visible
                            delay={[300, 0]}
                            render={(attrs) => (
                                <ul className={cx('sub-menu')} tabIndex="-1" {...attrs}>
                                    <li className={cx('sub-item')}>
                                        <NavLink
                                            to="/events"
                                            className={({ isActive }) => cx('sub-item__link', { activeSub: isActive })}
                                            onClick={() => setActiveIndex(activeIndex)}
                                        >
                                            <FontAwesomeIcon className={cx('sub-item__icon')} icon={faBook} />
                                            Sự kiện
                                        </NavLink>
                                    </li>
                                    <li className={cx('sub-item')}>
                                        <NavLink
                                            to="/teacher"
                                            className={({ isActive }) => cx('sub-item__link', { activeSub: isActive })}
                                            onClick={() => setActiveIndex(activeIndex)}
                                        >
                                            <FontAwesomeIcon className={cx('sub-item__icon')} icon={faBook} />
                                            Giảng viên
                                        </NavLink>
                                    </li>
                                    <li className={cx('sub-item')}>
                                        <NavLink
                                            to="/news"
                                            className={({ isActive }) => cx('sub-item__link', { activeSub: isActive })}
                                            onClick={() => setActiveIndex(activeIndex)}
                                        >
                                            <FontAwesomeIcon className={cx('sub-item__icon')} icon={faBook} />
                                            Tin tức
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        >
                            <span className={cx('link')}>
                                Hoạt động
                                <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                            </span>
                        </Tippy>
                    </li>

                    <li className={cx('item')}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => cx('link', { active: isActive })}
                            onClick={() => setActiveIndex(activeIndex)}
                        >
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>

                <ul className={cx('actions')}>
                    <div>
                        <Tippy
                            interactive
                            placement="bottom-end"
                            // visible
                            delay={[300, 0]}
                            render={(attrs) => (
                                <form action="/">
                                    <div className={cx('actions-search-sub')} tabIndex="-1" {...attrs}>
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
                            )}
                        >
                            <li className={cx('search')}>
                                <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                            </li>
                        </Tippy>
                    </div>

                    <div>
                        <Tippy
                            interactive
                            placement="bottom-end"
                            // visible
                            delay={[300, 0]}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    Không có sản phẩm nào trong giỏ hàng
                                </div>
                            )}
                        >
                            <li className={cx('cart')}>
                                <FontAwesomeIcon className={cx('icon-cart')} icon={faCartShopping} />
                            </li>
                        </Tippy>
                    </div>

                    <div>
                        <Tippy
                            interactive
                            placement="bottom-end"
                            // visible
                            delay={[300, 0]}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    Ngôn ngữ và chế độ sáng/tối
                                </div>
                            )}
                        >
                            <li className={cx('more')}>
                                <FontAwesomeIcon className={cx('icon-more')} icon={faEllipsis} />
                            </li>
                        </Tippy>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNav;

