import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollToTopWithProgress.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ScrollToTopWithProgress = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;

            setProgress(scrollProgress);

            if (scrollTop > 300) {
                setIsVisible(true);
                setIsExiting(false);
            } else if (isVisible) {
                setIsExiting(true);
                setTimeout(() => setIsVisible(false), 500);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    const scrollToTop = () => {
        const scrollHeight = window.scrollY;

        let startTime = null;

        const scrollStep = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            // Tính vị trí cuộn hiện tại
            const currentScroll = Math.max(scrollHeight - (scrollHeight * elapsed) / 1000, 0);

            // Cập nhật vị trí cuộn
            window.scrollTo(0, currentScroll);

            // Tính trạng thái progress
            const scrollProgress = ((scrollHeight - currentScroll) / scrollHeight) * 100;
            setProgress(scrollProgress);

            if (currentScroll > 0) {
                requestAnimationFrame(scrollStep);
            }
        };

        requestAnimationFrame(scrollStep);
    };

    return (
        <div>
            {isVisible && (
                <button
                    className={cx('scrollToTop', {
                        'animation-enter': !isExiting,
                        'animation-exit': isExiting,
                    })}
                    onClick={scrollToTop}
                >
                    <div className={cx('progress')} style={{ height: `${progress}%` }}></div>
                    <FontAwesomeIcon icon={faArrowUp} className={cx('icon')} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopWithProgress;
