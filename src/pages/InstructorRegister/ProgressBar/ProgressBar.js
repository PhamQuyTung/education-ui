import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProgressBar.css'; // File CSS custom

const breakpoints = [0, 20, 40, 60, 80, 100];

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-container">
            {/* Thanh progress Bootstrap */}
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} />
            </div>

            {/* Hiển thị phần trăm trên điểm breakpoint */}
            {breakpoints.map((point) => (
                <span
                    key={point}
                    className={`progress-text ${progress >= point ? 'active' : ''}`}
                    style={{ left: `${point}%` }}
                >
                    {progress >= point ? `${point}%` : ''}
                </span>
            ))}

            {/* Các điểm breakpoint */}
            {breakpoints.map((point) => (
                <span
                    key={point}
                    className={`breakpoint ${progress >= point ? 'active' : ''}`}
                    style={{ left: `${point}%` }}
                />
            ))}
        </div>
    );
};

export default ProgressBar;
