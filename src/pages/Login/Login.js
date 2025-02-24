import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import styles from './Login.module.scss';
import IconApple from '~/assets/fonts/Icon/Social/icons8-apple.svg';
import IconTwitter from '~/assets/fonts/Icon/Social/icons8-twitter.svg';
import IconFacebook from '~/assets/fonts/Icon/Social/icons8-facebook.svg';
import IconGoogle from '~/assets/fonts/Icon/Social/icons8-google.svg';
import Image from '~/components/Image';
import imgContent from '~/assets/images/Login/Lovepik_com-450069364- work from home illustration vector.png';
import TypingEffect from '~/components/TypingEffect';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('Log')}>
            <div className={cx('bg')}>
                <div className={cx('wrapper')}>
                    <Row className={cx('container')}>
                        <Col lg={6} md={12} xs={12} className={cx('custom-col')}>
                            <div className={cx('box')}>
                                <div className={cx('header')}>
                                    <h3 className={cx('login')}>Đăng nhập</h3>
                                </div>

                                <div className={cx('body')}>
                                    <form action="#" className={cx('main-form')}>
                                        <div className={cx('form-wrap')}>
                                            <div className={cx('form-userName')}>
                                                <div className={cx('wrap-icon-user')}>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </div>

                                                <input
                                                    type="text"
                                                    placeholder="Tên người dùng"
                                                    required
                                                    className={cx('form-input')}
                                                />
                                            </div>

                                            <div className={cx('form-password')}>
                                                <div className={cx('wrap-icon-lock')}>
                                                    <FontAwesomeIcon icon={faLock} />
                                                </div>

                                                <input
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    required
                                                    className={cx('form-input')}
                                                />
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
                                                <Link className={cx('forgot-link')} to="#">
                                                    Quên mật khẩu?
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={cx('submit')}>
                                            <button type="submit" className={cx('submit-btn')}>
                                                Đăng nhập
                                            </button>
                                            <p className={cx('required')}>
                                                Chưa có tài khoản?{' '}
                                                <Link to="#" className={cx('required-link')}>
                                                    Đăng ký ngay
                                                </Link>
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
                                                <Image
                                                    src={IconTwitter}
                                                    alt="IconTwitter"
                                                    className={cx('img-social')}
                                                />
                                            </Link>
                                        </li>

                                        <li className={cx('social-item')}>
                                            <Link to="/" className={cx('link-social')}>
                                                <Image
                                                    src={IconFacebook}
                                                    alt="IconFacebook"
                                                    className={cx('img-social')}
                                                />
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
                        </Col>

                        <Col lg={6} md={12} xs={12} className={cx('custom-col', 'dp-none')}>
                            <div className={cx('img-content')}>
                                <div className={cx('chat-bubble')}>
                                    <TypingEffect
                                        text="Chào mừng bạn quay trở lại! Hãy đăng nhập để tiếp tục hành trình của mình."
                                        speed={150}
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

export default Login;
