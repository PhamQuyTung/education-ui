import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Card({ className = '', children }) {
    return (
        <div className={cx('wrapper', className)}>{children}</div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Card;
