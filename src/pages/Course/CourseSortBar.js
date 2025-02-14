import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faAngleDown, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Row, Col } from 'react-bootstrap';

import styles from './Course.module.scss';

const cx = classNames.bind(styles);

function SortBar() {
    const [searchValue, setSearchValue] = useState(''); // Trạng thái khi người dùng nhập text vào ô input
    const [isSelected, setIsSelected] = useState('Sắp xếp theo chủ đề (A-Z)'); // Trạng thái khi người dùng đã bấm vào option chưa

    // Hàm xử lý khi người dùng nhập text vào ô input
    const handleSearch = (e) => {
        setSearchValue(e.target.value); // Set the value of the input field
    };

    // Xử lý khi người dùng xóa text trong ô input
    const handleClear = () => {
        setSearchValue(''); // Set the value of the input field to an empty string
    };

    // Xử lý khi người dùng chọn option
    const handleSelect = (text) => {
        setIsSelected(text);
    };

    return (
        <div className={cx('sb')}>
            <div className={cx('sb-quantity')}>
                <strong>11</strong> khóa học
            </div>

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
                    <FontAwesomeIcon icon={faSearch} className={cx('icon-Search')} />
                </button>

                {!!searchValue && (
                    <span className={cx('clear-text')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} className={cx('icon-clear')} />
                    </span>
                )}
            </form>

            <Tippy
                interactive // Cho phép tương tác với submenu
                trigger="click" // Chỉ xuất hiện khi bấm
                placement="bottom" // Vị trí hiển thị submenu
                // visible
                delay={[100, 0]}
                popperOptions={{
                    modifiers: [
                        { name: 'preventOverflow', options: { boundary: 'window' } }, // Ngăn menu bị đẩy ra ngoài
                        { name: 'flip', enabled: false }, // Tắt tự động đổi vị trí
                    ],
                }}
                render={(attrs) => (
                    <ul className={cx('sb-option_sub')} tabIndex="-1" {...attrs}>
                        <li className={cx('sb-option_item')} onClick={() => handleSelect('Sắp xếp theo chủ đề (A-Z)')}>
                            <span>Sắp xếp theo chủ đề (A-Z)</span>
                        </li>

                        <li className={cx('sb-option_item')} onClick={() => handleSelect('Sắp xếp theo chủ đề (Z-A)')}>
                            <span>Sắp xếp theo chủ đề (Z-A)</span>
                        </li>

                        <li
                            className={cx('sb-option_item')}
                            onClick={() => handleSelect('Sắp xếp theo giá tiền (cao nhất)')}
                        >
                            <span>Sắp xếp theo giá tiền (cao nhất)</span>
                        </li>

                        <li
                            className={cx('sb-option_item')}
                            onClick={() => handleSelect('Sắp xếp theo giá tiền (thấp nhất)')}
                        >
                            <span>Sắp xếp theo giá tiền (thấp nhất)</span>
                        </li>

                        <li className={cx('sb-option_item')} onClick={() => handleSelect('Khóa học đang sale')}>
                            <span>Khóa học đang sale</span>
                        </li>
                    </ul>
                )}
            >
                <div className={cx('sb-option')}>
                    <div className={cx('sb-option-button')}>
                        <button className={cx('sb-option-btn')}>
                            {isSelected}
                            <FontAwesomeIcon icon={faAngleDown} className={cx('icon-AngleDown')} />
                        </button>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default SortBar;
