import styles from './Finished.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Progress from '~/pages/InstructorRegister/ProgressBar';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Finished({ onBack, onNext }) {
    return (
        <div className={cx('ir-upload2')}>
            <div className={cx('header')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('progress-wrap')}>
                            {/* Progress */}
                            <Progress progress={100} />
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('text')}>
                            <h2>Đơn của bạn đã được hoàn thành!</h2>
                            <p>Bước 5: Chờ kết quả xác nhận</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Form & Upload File & AQ */}
            <div className={cx('ir-content')}>
                <div className={cx('ir-about')}>
                    <div className={cx('text')}>
                        <h3>Xin chào đây là chương trình giáo dục Mona Education</h3>
                        <p>
                            Đơn đăng ký của bạn đã được gửi lên bộ phận xét duyệt. Kết quả sẽ được gửi vào email của bạn
                            trong 3 ngày tới, vui lòng check email thường xuyên để không bỏ lỡ thông tin mới nhất. Cảm
                            ơn bạn vì đã quan tâm đến chương trình này!
                        </p>
                    </div>
                    <button className={cx('btn-back')} onClick={onBack}>
                        Back
                    </button>
                    <Link to={config.ROUTES_CONFIG.HOME}>
                        <button className={cx('btn-next')}>Quay về trang chủ</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Finished;
