import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import IconApple from '~/assets/fonts/Icon/Social/icons8-apple.svg';
import IconTwitter from '~/assets/fonts/Icon/Social/icons8-twitter.svg';
import IconFacebook from '~/assets/fonts/Icon/Social/icons8-facebook.svg';
import IconGoogle from '~/assets/fonts/Icon/Social/icons8-google.svg';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Login({ switchToRegister, switchToForgotPassword }) {
    const [valueUserName, setValueUserName] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorUserName, setErrorUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleChangeUserName = useCallback((e) => {
        setValueUserName(e.target.value);
        setErrorUserName(''); // Xóa lỗi khi nhập lại
    }, []);

    const handleChangePassWord = useCallback((e) => {
        setValuePassword(e.target.value);
        setErrorPassword(''); // Xóa lỗi khi nhập lại
    }, []);

    const handleTogglePassword = useCallback(() => {
        setShowPassword((prev) => !prev);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (!valueUserName.trim()) {
            setErrorUserName('Vui lòng nhập tên người dùng.');
            isValid = false;
        }
        if (!valuePassword.trim()) {
            setErrorPassword('Vui lòng nhập mật khẩu.');
            isValid = false;
        }

        if (isValid) {
            console.log('Tên đăng nhập:', valueUserName);
            console.log('Mật khẩu:', valuePassword);
        }
    };

    return (
        <div className={cx('box')}>
            <div className={cx('header')}>
                <h3 className={cx('login')}>Đăng nhập</h3>
            </div>

            <div className={cx('body')}>
                <form className={cx('main-form')} onSubmit={handleSubmit}>
                    <div className={cx('form-wrap')}>
                        {/* Input Username */}
                        <div className={cx('form-userName')}>
                            <div className={cx('wrap-icon-user')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            </div>
                            <input
                                type="text"
                                value={valueUserName}
                                placeholder="Tên người dùng"
                                className={cx('form-input', { 'input-error': errorUserName })}
                                onChange={handleChangeUserName}
                            />
                            {errorUserName && <p className={cx('error-message')}>{errorUserName}</p>}
                        </div>

                        {/* Input Password */}
                        <div className={cx('form-password')}>
                            <div className={cx('wrap-icon-lock')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={valuePassword}
                                placeholder="Mật khẩu"
                                className={cx('form-input', { 'input-error': errorPassword })}
                                onChange={handleChangePassWord}
                            />
                            {valuePassword && (
                                <div className={cx('wrap-icon-eye')} onClick={handleTogglePassword}>
                                    <FontAwesomeIcon className={cx('icon')} icon={showPassword ? faEyeSlash : faEye} />
                                </div>
                            )}
                            {errorPassword && <p className={cx('error-message')}>{errorPassword}</p>}
                        </div>
                    </div>

                    <div className={cx('option')}>
                        <div className={cx('remember')}>
                            <input type="checkbox" id="remember" name="remember" />
                            <label className={cx('remember-pass')} htmlFor="remember">
                                Ghi nhớ mật khẩu
                            </label>
                        </div>
                        <div className={cx('forgot')}>
                            <span className={cx('forgot-link')} onClick={switchToForgotPassword}>
                                Quên mật khẩu?
                            </span>
                        </div>
                    </div>

                    <div className={cx('submit')}>
                        <button type="submit" className={cx('submit-btn')}>
                            Đăng nhập
                        </button>
                        <p className={cx('required')}>
                            Chưa có tài khoản?{' '}
                            <span className={cx('required-link')} onClick={switchToRegister}>
                                Đăng ký ngay
                            </span>
                        </p>
                    </div>
                </form>
            </div>

            <div className={cx('footer')}>
                <p>Hoặc đăng nhập bằng:</p>
                <ul className={cx('social-list')}>
                    <li className={cx('social-item')}>
                        <Link to="/" className={cx('link-social')}>
                            <Image src={IconApple} alt="IconApple" className={cx('img-social')} />
                        </Link>
                    </li>
                    <li className={cx('social-item')}>
                        <Link to="/" className={cx('link-social')}>
                            <Image src={IconTwitter} alt="IconTwitter" className={cx('img-social')} />
                        </Link>
                    </li>
                    <li className={cx('social-item')}>
                        <Link to="/" className={cx('link-social')}>
                            <Image src={IconFacebook} alt="IconFacebook" className={cx('img-social')} />
                        </Link>
                    </li>
                    <li className={cx('social-item')}>
                        <Link to="/" className={cx('link-social')}>
                            <Image src={IconGoogle} alt="IconGoogle" className={cx('img-social')} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Login;
