import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={cx('overlay')} onClick={onClose}>
            <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                <button className={cx('closeButton')} onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;
