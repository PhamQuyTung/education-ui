import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                if (!reverse) {
                    // Thêm ký tự
                    return text.slice(0, prev.length + 1);
                } else {
                    // Xóa ký tự
                    return text.slice(0, prev.length - 1);
                }
            });

            setIndex((prevIndex) => {
                if (!reverse && prevIndex + 1 >= text.length) {
                    setReverse(true); // Khi hoàn tất, bắt đầu xóa
                    return prevIndex;
                } else if (reverse && prevIndex - 1 < 0) {
                    setReverse(false); // Khi xóa hết, bắt đầu lại
                    return 0;
                }
                return reverse ? prevIndex - 1 : prevIndex + 1;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [text, reverse, speed]);

    return <p className={className}>{displayedText}</p>;
};

export default TypingEffect;
