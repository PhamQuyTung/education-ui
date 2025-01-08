import React, { useEffect, useState, useRef } from 'react';
import styles from './Animation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Animation({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <div ref={contentRef} className={cx('content', { animate: isVisible })}>
            {children}
        </div>
    );
}

export default Animation;
