import React from 'react';
import classNames from 'classnames/bind';

import styles from './News.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <label>Tìm kiếm</label>
                </div>

                <form action="/">
                    <div className={cx('actions-search-sub')}>
                        <input
                            className={cx('search-input')}
                            type="text"
                            placeholder="Tìm kiếm tin tức...."
                            required
                        />
                        <button className={cx('btn-submit')} type="submit">
                            <FontAwesomeIcon className={cx('icon-submit')} icon={faSearch} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
