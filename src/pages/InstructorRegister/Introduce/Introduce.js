import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Progress from '~/pages/InstructorRegister/ProgressBar';

const cx = classNames.bind(styles);

function IntroduceTeacher({ onNext }) {
    return (
        <div className={cx('ir-introduce')}>
            <div className={cx('header')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('progress-wrap')}>
                            {/* Progress */}
                            <Progress progress={0} />
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('text')}>
                            <h2>Xin chào bạn!</h2>
                            <p>Bước 1: Giới thiệu về chúng tôi</p>
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
                            Bạn có thể sử dụng Bootstrap để tạo thanh progress với các điểm breakpoint và hiển thị phần
                            trăm trên đầu breakpoint hiện tại.
                        </p>
                    </div>
                    <button className={cx('btn-next')} onClick={onNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IntroduceTeacher;
