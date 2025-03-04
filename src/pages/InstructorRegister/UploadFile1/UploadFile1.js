import { useState } from 'react';
import styles from './UploadFile1.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import FileUpload from '~/components/FileUploadComponent';
import Progress from '~/pages/InstructorRegister/ProgressBar';

const cx = classNames.bind(styles);

function UploadFile1({ onBack, onNext }) {
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    return (
        <div className={cx('ir-upload1')}>
            <div className={cx('header')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('progress-wrap')}>
                            <Progress progress={25} />
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('text')}>
                            <h2>Chúng tôi muốn biết bạn như thế nào</h2>
                            <p>Bước 2: Ảnh chân dung và hồ sơ giấy tờ</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={cx('ir-content')}>
                <div className={cx('ir-about')}>
                    <div className={cx('text')}>
                        <h3>Xin chào đây là chương trình giáo dục Mona Education</h3>
                        <p>Ảnh chân dung 4x3 và giấy tờ photo có công chứng (CCCD, Giấy khai sinh, Bản cam kết công việc) được tải lên đây. Chỉ cho phép ảnh dạng JPG, PNG</p>
                        <FileUpload onFilesChange={setIsNextEnabled} />
                    </div>
                    <button className={cx('btn-back')} onClick={onBack}>
                        Back
                    </button>
                    <button
                        className={cx('btn-next')}
                        onClick={onNext}
                        disabled={!isNextEnabled} // Nếu chưa chọn file, button bị disable
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadFile1;
