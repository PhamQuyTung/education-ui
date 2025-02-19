import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { faEnvelope, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FormContact.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FormContact() {
    // State lưu trữ giá trị input
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    });

    // Ref để điều hướng focus
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);
    const submitRef = useRef(null);

    // Xử lý khi nhấn Enter để focus vào ô tiếp theo
    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn form submit khi nhấn Enter
            nextRef.current?.focus(); // Chuyển focus đến input tiếp theo
        }
    };

    // State lưu trữ lỗi
    const [errors, setErrors] = useState({});

    // Xử lý khi input thay đổi
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Nếu là input phone, chỉ cho phép nhập số
        if (name === 'phone' && !/^\d*$/.test(value)) {
            setErrors({ ...errors, phone: 'Số điện thoại chỉ được chứa số' });
            return;
        }

        // Xóa lỗi khi user nhập lại đúng
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    // Xử lý khi input mất focus (onBlur)
    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (!value.trim()) {
            setErrors({ ...errors, [name]: 'Trường này không được để trống' });
        }

        // Kiểm tra định dạng số điện thoại
        if (name === 'phone' && !/^\d+$/.test(value)) {
            setErrors({ ...errors, phone: 'Số điện thoại không hợp lệ' });
        }
    };

    // Validate toàn bộ form trước khi gửi
    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Vui lòng nhập họ tên';
        if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email';
        if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
        // if (!formData.topic.trim()) newErrors.topic = 'Vui lòng chọn chủ đề';
        if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung';

        // Kiểm tra định dạng email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailPattern.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        // Kiểm tra định dạng sđt
        if (!formData.phone.trim()) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Xử lý gửi form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert('Gửi thành công!');
            console.log('Dữ liệu form:', formData);
        }

        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });

        // // Focus lại ô nhập đầu tiên
        // nameRef.current?.focus();
    };

    return (
        <form className={cx('form-wrap')} onSubmit={handleSubmit}>
            <Row>
                {/* Họ Tên */}
                <Col lg={6} md={6} xs={12} className={cx('custom-colMb24')}>
                    <div className={cx('form-fullName')}>
                        <input
                            className={cx('input-fullName', { 'is-invalid': errors.fullName })}
                            ref={nameRef}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => handleKeyDown(e, emailRef)}
                            placeholder="Họ Tên *"
                        ></input>
                        <div className={cx('form-icon-user')}>
                            <FontAwesomeIcon className={cx('icon-user')} icon={faUser} />
                        </div>
                        {errors.fullName && <p className={cx('error-text')}>{errors.fullName}</p>}
                    </div>
                </Col>

                {/* Email */}
                <Col lg={6} md={6} xs={12} className={cx('custom-colMb24')}>
                    <div className={cx('form-email')}>
                        <input
                            className={cx('input-email', { 'is-invalid': errors.email })}
                            ref={emailRef}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                            placeholder="Email *"
                        ></input>
                        <div className={cx('form-icon-envelop')}>
                            <FontAwesomeIcon className={cx('icon-envelop')} icon={faEnvelope} />
                        </div>
                        {errors.email && <p className={cx('error-text')}>{errors.email}</p>}
                    </div>
                </Col>

                {/* Chủ đề */}
                <Col lg={6} md={6} xs={12} className={cx('custom-colMb24')}>
                    <div className={cx('form-option')}>
                        <select
                            // className={cx('input-select', { 'is-invalid': errors.topic })}
                            className={cx('input-select')}
                            // ref={nameRef}
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            // onBlur={handleBlur}
                        >
                            <option value="">Chọn chủ đề</option>
                            <option value="web">Khóa học Web</option>
                            <option value="marketing">Khóa học Marketing kỹ thuật số</option>
                            <option value="uiux">Khóa học thiết kế UI UX</option>
                        </select>
                        {/* {errors.topic && <p className={cx('error-text')}>{errors.topic}</p>} */}
                    </div>
                </Col>

                {/* Số điện thoại */}
                <Col lg={6} md={6} xs={12} className={cx('custom-colMb24')}>
                    <div className={cx('form-phoneNb')}>
                        <input
                            className={cx('input-phoneNb', { 'is-invalid': errors.phone })}
                            ref={phoneRef}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => handleKeyDown(e, messageRef)}
                            placeholder="Số điện thoại *"
                        ></input>
                        <div className={cx('form-icon-phoneNb')}>
                            <FontAwesomeIcon className={cx('icon-phoneNb')} icon={faPhone} />
                        </div>
                        {errors.phone && <p className={cx('error-text')}>{errors.phone}</p>}
                    </div>
                </Col>

                {/* Nội dung */}
                <Col lg={12} md={12} xs={12} className={cx('custom-colMb24')}>
                    <div className={cx('form-message')}>
                        <textarea
                            className={cx('input-message', { 'is-invalid': errors.message })}
                            ref={messageRef}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={(e) => handleKeyDown(e, submitRef)}
                            placeholder="Nội dung *"
                        ></textarea>
                        <div className={cx('form-icon-message')}>
                            <FontAwesomeIcon className={cx('icon-message')} icon={faMessage} />
                        </div>
                        {errors.message && <p className={cx('error-text')}>{errors.message}</p>}
                    </div>
                </Col>
            </Row>

            <Button
                ref={submitRef}
                ExtraLarge
                primary
                rightIcon={<FontAwesomeIcon className={cx('icon-phoneNb')} icon={faArrowRight} />}
            >
                Gửi
            </Button>
        </form>
    );
}

export default FormContact;
