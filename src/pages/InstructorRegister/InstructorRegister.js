import { useState } from 'react';
import styles from './InstructorRegister.module.scss';
import classNames from 'classnames/bind';
import IntroduceTeacher from './Introduce';
import UploadFile1 from './UploadFile1';
import AnswerQuestion from './AQ';
import FormTeacher from './FormTeacher';
import Finished from './Finished';

const cx = classNames.bind(styles);

function InstructorRegister() {
    const [step, setStep] = useState(1); // Quản lý bước hiện tại

    return (
        <div className={cx('ir-main')}>
            <div className={cx('ir-wrapper')}>
                {step === 1 && <IntroduceTeacher onNext={() => setStep(2)} />}
                {step === 2 && <UploadFile1 onBack={() => setStep(1)} onNext={() => setStep(3)} />}
                {step === 3 && <AnswerQuestion onBack={() => setStep(2)} onNext={() => setStep(4)} />}
                {step === 4 && <FormTeacher onBack={() => setStep(3)} onNext={() => setStep(5)} />}
                {step === 5 && <Finished onBack={() => setStep(4)} onNext={() => setStep(6)} />}
                {/* Thêm các bước vào đây */}
            </div>
        </div>
    );
}

export default InstructorRegister;
