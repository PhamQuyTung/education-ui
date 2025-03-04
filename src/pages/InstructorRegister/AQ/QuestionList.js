import React, { useState } from 'react';
import styles from './AQ.module.scss';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);

const questionList = [
    {
        title: 'Giới thiệu bản thân',
        question: 'Câu 1: Khi giới thiệu bản thân trong buổi phỏng vấn giảng viên, điều nào sau đây là đúng?',
        answers: [
            'A. Chỉ nêu tên, tuổi và quê quán.',
            'B. Giới thiệu tên, trình độ, kinh nghiệm giảng dạy và định hướng nghề nghiệp.',
            'C. Chỉ nói về sở thích cá nhân.',
            'D. Kể chi tiết về quá trình học tập từ cấp 1 đến đại học.',
        ],
    },
    {
        title: 'Kỹ năng chuyên môn',
        question: 'Câu 2: Một giảng viên nên làm gì để bài giảng thu hút và dễ hiểu?',
        answers: [
            'A. Sử dụng phương pháp giảng dạy phù hợp và kết hợp công nghệ.',
            'B. Chỉ giảng theo cách mình thấy dễ hiểu.',
            'C. Không cần thay đổi phương pháp giảng dạy.',
            'D. Đọc nguyên văn sách giáo trình.',
        ],
    },
    {
        title: 'Phát triển và định hướng nghề nghiệp',
        question: 'Câu 3: Một giảng viên nên làm gì để phát triển sự nghiệp lâu dài?',
        answers: [
            'A. Luôn cập nhật kiến thức mới và tham gia các hội thảo chuyên môn.',
            'B. Chỉ giảng dạy các môn học mình quen thuộc, không cần học thêm.',
            'C. Không cần quan tâm đến xu hướng giáo dục hiện đại.',
            'D. Chỉ tập trung vào giảng dạy, không cần nghiên cứu khoa học.',
        ],
    },
    {
        title: 'Đạo đức nghề nghiệp',
        question: 'Câu 4: Điều nào sau đây thể hiện đạo đức nghề nghiệp của một giảng viên?',
        answers: [
            'A. Công bằng trong giảng dạy và đánh giá sinh viên.',
            'B. Thiên vị sinh viên mà mình yêu thích.',
            'C. Nhận quà biếu để nâng điểm cho sinh viên.',
            'D. Không quan tâm đến sinh viên có học lực yếu.',
        ],
    },
    {
        title: 'Tình huống thực tế',
        question: 'Câu 5: Nếu sinh viên liên tục gây mất trật tự trong lớp, giảng viên nên làm gì?',
        answers: [
            'A. Nhắc nhở và tìm hiểu nguyên nhân để có biện pháp phù hợp.',
            'B. Phớt lờ hành vi đó và tiếp tục giảng bài.',
            'C. Đuổi sinh viên đó ra khỏi lớp ngay lập tức.',
            'D. Giảm điểm chuyên cần của sinh viên mà không cảnh báo trước.',
        ],
    },
];

function QuestionList({ onAnswerUpdate }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerClick = (questionIndex, answerIndex) => {
        setSelectedAnswers((prev) => {
            const updatedAnswers = {
                ...prev,
                [questionIndex]: answerIndex,
            };
            onAnswerUpdate(updatedAnswers); // Gửi lên AQ
            return updatedAnswers;
        });
    };

    return (
        <div className={cx('questionList')}>
            <Row>
                <Col lg={5} md={12} xs={12} className={cx('custom-col')}>
                    <div className={cx('tabTitle')}>
                        <div className={cx('title')}>
                            <h3>Trả lời câu hỏi</h3>
                            <p>Chọn một câu trả lời cho từng câu hỏi.</p>
                        </div>
                        <ul className={cx('title-list')}>
                            {questionList.map((item, index) => (
                                <li className={cx('title-item')} key={index}>
                                    <span
                                        className={cx('title-item__name', { active: activeIndex === index })}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {item.title}
                                    </span>
                                </li>
                            ))}
                            <div className={cx('line')} style={{ transform: `translateY(${activeIndex * 54}px)` }}></div>
                        </ul>
                    </div>
                </Col>

                <Col lg={7} md={12} xs={12}>
                    {questionList.map(
                        (item, index) =>
                            activeIndex === index && (
                                <div className={cx('question-detail')} key={index}>
                                    <div className={cx('qd-title')}>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className={cx('qd-content')}>
                                        <div className={cx('question-wrap')}>
                                            <h4>{item.question}</h4>
                                            <ul className={cx('result-list')}>
                                                {item.answers.map((answer, idx) => {
                                                    const isSelected = selectedAnswers[index] === idx;
                                                    return (
                                                        <li
                                                            key={idx}
                                                            className={cx('result-item', { selected: isSelected })}
                                                            onClick={() => handleAnswerClick(index, idx)}
                                                        >
                                                            <p>{answer}</p>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default QuestionList;

