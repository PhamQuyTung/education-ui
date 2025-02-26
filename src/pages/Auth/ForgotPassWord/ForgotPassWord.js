import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from './ForgotPassWord.module.scss';

const cx = classNames.bind(styles);

function ForgotPassword({ switchToLogin }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Vui lòng nhập email.');
            return;
        }
        alert('Một liên kết đặt lại mật khẩu đã được gửi!');
        setEmail('');
    };

    return (
        <div className={cx('box')}>
            <div className={cx('header')}>
                <h3 className={cx('forgot')}>Quên mật khẩu</h3>
                <p>Vui lòng nhập email để nhận liên kết đặt lại mật khẩu.</p>
            </div>

            <div className={cx('body')}>
                <form className={cx('main-form')} onSubmit={handleSubmit}>
                    <div className={cx('form-email')}>
                        <div className={cx('wrap-icon-email')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                        </div>
                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            className={cx('form-input', { 'input-error': error })}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                            }}
                        />
                        {error && <p className={cx('error-message')}>{error}</p>}
                    </div>

                    <div className={cx('submit')}>
                        <button type="submit" className={cx('submit-btn')}>
                            Gửi yêu cầu
                        </button>
                        <p className={cx('back-login')} onClick={switchToLogin}>
                            Quay lại <span className={cx('back-login-link')}>đăng nhập</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
