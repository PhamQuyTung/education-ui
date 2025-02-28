import styles from './UploadFile2.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Progress from '~/pages/InstructorRegister/ProgressBar';

const cx = classNames.bind(styles);

function UploadFile2({ onBack, onNext }) {
    return (
        <div className={cx('ir-upload2')}>
            <div className={cx('header')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('progress-wrap')}>
                            {/* Progress */}
                            <Progress progress={40} />
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('text')}>
                            <h2>Chúng tôi muốn kiểm tra giấy tờ tùy thân của bạn</h2>
                            <p>Bước 3: Ảnh giấy tờ photo có công chứng (CCCD, Giấy khai sinh, Bản cam kết công việc)</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Form & Upload File & AQ */}
            <div className={cx('ir-content')}>
                <div className={cx('ir-about')}>
                    <div className={cx('text')}>
                        <h3>Xin chào đây là chương trình giáo dục Mona Education</h3>
                        <p>Ảnh thông tin giấy tờ sẽ được tải lên đây</p>
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

export default UploadFile2;
