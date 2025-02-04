import { NavLink, useLocation } from 'react-router-dom';
import styles from './BreadCrumb.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Breadcrumb = () => {
    const nameMap = {
        introduce: 'Giới thiệu',
        course: 'Khóa học',
        events: 'Sự kiện',
        teacher: 'Giảng viên',
        news: 'Tin tức',
        courseDetail: 'Chi tiết khóa học',
        eventDetail: 'Chi tiết sự kiện',
        teacherDetail: 'Chi tiết giảng viên',
        newsDetail: 'Chi tiết tin tức',
        contact: 'Liên hệ',
    };

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <nav className={cx('breadcrumb')} key={index}>
                        <div className={cx('breadcrumb-menu__heading')}>
                            <h1 className={cx('breadcrumb-title')}>{nameMap[name] || name}</h1>
                        </div>
                        <div className={cx('breadcrumb-menu')}>
                            <NavLink to="/" className={cx('breadcrumb-menu_link')}>
                                Trang chủ
                            </NavLink>
                            <span>
                                <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                                <span className={cx('breadcrumb-menu_span')} to={routeTo}>
                                    {nameMap[name] || name}
                                </span>
                            </span>
                        </div>
                    </nav>
                );
            })}
        </>
    );
};

export default Breadcrumb;
