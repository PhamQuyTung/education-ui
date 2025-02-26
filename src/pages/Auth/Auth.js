import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import styles from './Auth.module.scss';
import Image from '~/components/Image';
import imgContent from '~/assets/images/Login/Lovepik_com-450069364- work from home illustration vector.png';
import TypingEffect from '~/components/TypingEffect';
import LoginForm from './Login';
import RegisterForm from './Register';
import ForgotPasswordForm from './ForgotPassWord';

const cx = classNames.bind(styles);

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    
    return (
        <div className={cx('Log')}>
            <div className={cx('bg')}>
                <div className={cx('wrapper')}>
                    <Row className={cx('container')}>
                        <Col lg={6} md={12} xs={12} className={cx('custom-col')}>
                        {isForgotPassword ? (
                                <ForgotPasswordForm switchToLogin={() => {
                                    setIsForgotPassword(false);
                                    setIsLogin(true);
                                }} />
                            ) : isLogin ? (
                                <LoginForm 
                                    switchToRegister={() => setIsLogin(false)} 
                                    switchToForgotPassword={() => setIsForgotPassword(true)} // Chuyển trạng thái
                                />
                            ) : (
                                <RegisterForm switchToLogin={() => setIsLogin(true)} />
                            )}
                        </Col>

                        <Col lg={6} md={12} xs={12} className={cx('custom-col', 'dp-none')}>
                            <div className={cx('img-content')}>
                                <div className={cx('chat-bubble')}>
                                    <TypingEffect
                                        text="Chào mừng bạn quay trở lại! Hãy đăng nhập để tiếp tục hành trình của mình."
                                        speed={100}
                                        className={cx('custom-text')}
                                    />
                                </div>
                                <Image src={imgContent} alt="login-bg" className={cx('imgContent')} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Auth;
