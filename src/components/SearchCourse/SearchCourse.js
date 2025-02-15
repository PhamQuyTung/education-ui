import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchCourse.module.scss';

const cx = classNames.bind(styles);

function SearchCourse() {
    const [searchValue, setSearchValue] = useState(''); // Trạng thái khi người dùng nhập text vào ô input

    // Hàm xử lý khi người dùng nhập text vào ô input
    const handleSearch = (e) => {
        setSearchValue(e.target.value); // Set the value of the input field
    };

    // Xử lý khi người dùng xóa text trong ô input
    const handleClear = () => {
        setSearchValue(''); // Set the value of the input field to an empty string
    };

    return (
        <form action="#" className={cx('sb-search')}>
            <input
                value={searchValue}
                className={cx('sb-input')}
                type="text"
                placeholder="Tìm kiếm khóa học..."
                required
                onChange={handleSearch}
            />

            <button className={cx('sb-btn')} type="submit">
                <FontAwesomeIcon icon={faSearch} className={cx('icon-Search', { 'icon-Search2': searchValue })} />
            </button>

            {!!searchValue && (
                <span className={cx('clear-text')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faXmark} className={cx('icon-clear')} />
                </span>
            )}
        </form>
    );
}

export default SearchCourse;
