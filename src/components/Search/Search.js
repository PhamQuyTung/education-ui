import React from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

import styles from './Search.module.scss';
import '~/styles/theme.css';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search-wrapper')}>
            <Tippy
                interactive
                placement="bottom-end"
                // visible
                delay={[300, 0]}
                render={(attrs) => (
                    <form action="/">
                        <div className={cx('actions-search-sub')} tabIndex="-1" {...attrs}>
                            <input
                                className={cx('search-input')}
                                type="text"
                                placeholder="Tìm kiếm khóa học...."
                                required
                            />
                            <button className={cx('btn-submit')} type="submit">
                                <FontAwesomeIcon className={cx('icon-submit')} icon={faSearch} />
                            </button>
                        </div>
                    </form>
                )}
            >
                <li className={cx('search')}>
                    <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                </li>
            </Tippy>
        </div>
    );
}

export default Search;
