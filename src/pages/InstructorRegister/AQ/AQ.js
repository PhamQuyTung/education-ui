import { useState } from 'react';
import styles from './AQ.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Progress from '~/pages/InstructorRegister/ProgressBar';
import QuestionList from './QuestionList';

const cx = classNames.bind(styles);

function AQ({ onBack, onNext }) {
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Lưu các câu trả lời

    // Hàm cập nhật câu trả lời từ QuestionList
    const handleAnswerUpdate = (answers) => {
        setSelectedAnswers(answers);
    };

    // Kiểm tra tất cả câu hỏi đã được trả lời hay chưa
    const isAllAnswered = Object.keys(selectedAnswers).length === 5; // Số câu hỏi là 5

    return (
        <div className={cx('ir-upload2')}>
            <div className={cx('header')}>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('progress-wrap')}>
                            <Progress progress={50} />
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className={cx('text')}>
                            <h2>Để tiếp tục hoàn thiện hồ sơ, hãy trả lời một vài câu hỏi từ chúng tôi</h2>
                            <p>Bước 3: Trả lời câu hỏi</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={cx('ir-content')}>
                {/* Component hiển thị danh sách câu hỏi */}
                <QuestionList onAnswerUpdate={handleAnswerUpdate} />

                {/* Nút Back & Next */}
                <div className={cx('ir-about')}>
                    <button className={cx('btn-back')} onClick={onBack}>
                        Back
                    </button>
                    <button
                        className={cx('btn-next', { disabled: !isAllAnswered })}
                        onClick={onNext}
                        disabled={!isAllAnswered}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AQ;
