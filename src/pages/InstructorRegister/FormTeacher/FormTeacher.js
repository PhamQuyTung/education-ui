import styles from './FormTeacher.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Progress from '~/pages/InstructorRegister/ProgressBar';

const cx = classNames.bind(styles);

function FormTeacher({ onBack, onNext }) {
    return (
        <div className={cx('ir-upload2')}>
            <div className={cx('header')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('progress-wrap')}>
                            {/* Progress */}
                            <Progress progress={75} />
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('text')}>
                            <h2>Cố lên sắp xong rồi! Hãy cung cấp thêm một số thông tin cụ thể để chúng tôi hiểu bạn rõ hơn</h2>
                            <p>Bước 4: Hoàn thiện thông tin bằng cách điền vào form này</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Form & Upload File & AQ */}
            <div className={cx('ir-content')}>
                <div className={cx('ir-about')}>
                    <div className={cx('text')}>
                        <h3>Xin chào đây là chương trình giáo dục Mona Education</h3>
                        <p>Form sẽ tải lên đây</p>
                    </div>
                    <button className={cx('btn-back')} onClick={onBack}>
                        Back
                    </button>
                    <button className={cx('btn-next')} onClick={onNext}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default FormTeacher;
