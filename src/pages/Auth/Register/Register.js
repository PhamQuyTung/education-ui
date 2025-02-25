import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register({ switchToLogin }) {
    const [valueUserName, setValueUserName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [valueRepeatPassword, setValueRepeatPassword] = useState('');

    const [errorUserName, setErrorUserName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRepeatPassword, setErrorRepeatPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    // State lưu trữ lỗi
    const [errors, setErrors] = useState({});

    // Xử lý khi input thay đổi
    const handleChangeUserName = useCallback((e) => {
        setValueUserName(e.target.value);
        setErrorUserName(''); // Xóa lỗi khi nhập lại
    }, []);

    const handleChangeEmail = useCallback((e) => {
        setValueEmail(e.target.value);
        setErrorEmail(''); // Xóa lỗi khi nhập lại
    }, []);

    const handleChangePassWord = useCallback((e) => {
        setValuePassword(e.target.value);
        setErrorPassword(''); // Xóa lỗi khi nhập lại
    }, []);

    const handleChangeRepeatPassWord = useCallback((e) => {
        setValueRepeatPassword(e.target.value);
        setErrorRepeatPassword(''); // Xóa lỗi khi nhập lại
    }, []);

    const handleTogglePassword = useCallback(() => {
        setShowPassword((prev) => !prev);
    }, []);

    const handleToggleRepeatPassword = useCallback(() => {
        setShowRepeatPassword((prev) => !prev);
    }, []);

    // Xử lý khi input mất focus (onBlur)
    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (!value.trim()) {
            setErrors({ ...errors, [name]: 'Trường này không được để trống' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        // Kiểm tra trường trống
        if (!valueUserName.trim()) {
            setErrorUserName('Vui lòng nhập tên người dùng.');
            isValid = false;
        }
        if (!valueEmail.trim()) {
            setErrorEmail('Vui lòng nhập email.');
            isValid = false;
        }
        if (!valuePassword.trim()) {
            setErrorPassword('Vui lòng nhập mật khẩu.');
            isValid = false;
        }
        if (!valueRepeatPassword.trim()) {
            setErrorRepeatPassword('Vui lòng nhập lại mật khẩu.');
            isValid = false;
        }

        // Kiểm tra mật khẩu nhập lại
        if (valuePassword && valueRepeatPassword && valuePassword !== valueRepeatPassword) {
            setErrorRepeatPassword('Mật khẩu nhập lại không khớp!');
            isValid = false;
        }

        if (isValid) {
            // In ra thông tin người dùng đã nhập
            alert('Đăng ký thành công!');
            console.log('Tên đăng nhập:', valueUserName);
            console.log('Email:', valueEmail);
            console.log('Mật khẩu:', valuePassword);
            console.log('Nhập lại mật khẩu:', valueRepeatPassword);
            setValueUserName("");
            setValueEmail("");
            setValuePassword("");
            setValueRepeatPassword("");
        }
    };

    return (
        <div className={cx('box')}>
            <div className={cx('header')}>
                <h3 className={cx('register')}>Đăng ký</h3>
            </div>

            <div className={cx('body')}>
                <form className={cx('main-form')} onSubmit={handleSubmit}>
                    <div className={cx('form-wrap')}>
                        {/* Input Username */}
                        <div className={cx('form-userName')}>
                            <div className={cx('wrap-icon-user')}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <input
                                type="text"
                                value={valueUserName}
                                placeholder="Tên người dùng"
                                className={cx('form-input', { 'input-error': errorUserName })}
                                onChange={handleChangeUserName}
                                onBlur={handleBlur}
                            />
                            {errorUserName && <p className={cx('error-message')}>{errorUserName}</p>}
                        </div>

                        {/* Input Email */}
                        <div className={cx('form-email')}>
                            <div className={cx('wrap-icon-email')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <input
                                type="email"
                                value={valueEmail}
                                placeholder="Email"
                                className={cx('form-input', { 'input-error': errorEmail })}
                                onChange={handleChangeEmail}
                                onBlur={handleBlur}
                            />
                            {errorEmail && <p className={cx('error-message')}>{errorEmail}</p>}
                        </div>

                        {/* Input Password */}
                        <div className={cx('form-password')}>
                            <div className={cx('wrap-icon-lock')}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={valuePassword}
                                placeholder="Mật khẩu"
                                className={cx('form-input', { 'input-error': errorPassword })}
                                onChange={handleChangePassWord}
                                onBlur={handleBlur}
                            />
                            {valuePassword && (
                                <div className={cx('wrap-icon-eye')} onClick={handleTogglePassword}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </div>
                            )}
                            {errorPassword && <p className={cx('error-message')}>{errorPassword}</p>}
                        </div>

                        {/* Input Repeat Password */}
                        <div className={cx('form-password')}>
                            <div className={cx('wrap-icon-lock')}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <input
                                type={showRepeatPassword ? 'text' : 'password'}
                                value={valueRepeatPassword}
                                placeholder="Nhập lại mật khẩu"
                                className={cx('form-input', { 'input-error': errorRepeatPassword })}
                                onChange={handleChangeRepeatPassWord}
                                onBlur={handleBlur}
                            />
                            {valueRepeatPassword && (
                                <div className={cx('wrap-icon-eye')} onClick={handleToggleRepeatPassword}>
                                    <FontAwesomeIcon icon={showRepeatPassword ? faEyeSlash : faEye} />
                                </div>
                            )}
                            {errorRepeatPassword && <p className={cx('error-message')}>{errorRepeatPassword}</p>}
                        </div>
                    </div>

                    <div className={cx('submit')}>
                        <button type="submit" className={cx('submit-btn')}>
                            Đăng ký
                        </button>
                        <p className={cx('required')}>
                            Đã có tài khoản?{' '}
                            <span className={cx('required-link')} onClick={switchToLogin}>
                                Đăng nhập ngay
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
