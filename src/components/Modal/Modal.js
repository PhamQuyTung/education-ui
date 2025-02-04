import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ isOpen, onClose, children, clsOL, clsModal, clsContent, clsBtn }) => {
    if (!isOpen) return null;

    return (
        <div className={cx('overlay', clsOL)} onClick={onClose}>
            <div className={cx('modal', clsModal)} onClick={(e) => e.stopPropagation()}>
                <button className={cx('closeButton', clsBtn)} onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} className={cx('icon-close')} />
                </button>
                <div className={cx('content', clsContent)}>{children}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    clsModal: PropTypes.string,
    clsOL: PropTypes.string,
    clsContent: PropTypes.string,
};

export default Modal;
