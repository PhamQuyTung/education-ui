//Libary
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <div className={cx('menu-header')}>
            <button className={cx('menu-header__btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menu-header__title')}>{title}</h4>
        </div>
    )
}

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default MenuHeader;
