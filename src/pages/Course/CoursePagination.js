import React from 'react';
import styles from './Course.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={styles['pagination-container']}>
            {/* Hiển thị số trang */}
            <span className={styles['page-info']}>
                Trang {currentPage} của {totalPages}
            </span>

            {/* Điều hướng */}
            <div className={styles['pagination-controls']}>
                <button
                    className={styles['button']}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ◀
                </button>
                <span className={`${styles['page-number']} ${styles['current-page']}`}>{currentPage}</span>
                <span className={styles['page-number']}>{totalPages}</span>
                <button
                    className={styles['button']}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    ▶
                </button>
            </div>
        </div>
    );
};

export default Pagination;
