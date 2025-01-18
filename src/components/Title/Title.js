import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faArrowRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ title, sub, description1, description2, buttonDescription, clsBox, clsSub, clsButton, to, children }) {
    return (
        <div className={cx('box', clsBox)}>
            <div className={cx('heading')}>
                <span className={cx('title')}>
                    <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
                    {title}
                </span>
                <h2 className={cx('sub', clsSub)}>{sub}</h2>
                {description1 && <p className={cx('description1')}>{description1}</p>}
                {description2 && <p className={cx('description2')}>{description2}</p>}
            </div>

            {children}

            {to && (
                <Link to={to} className={cx('button', clsButton)}>
                    <Button ExtraLarge primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                        {buttonDescription}
                    </Button>
                </Link>
            )}
        </div>
    );
}

/*
    Loại bỏ kiểm tra dư thừa:

    Thêm điều kiện kiểm tra description để tránh render thẻ <p> trống nếu không có giá trị.
    Kiểm tra to để đảm bảo chỉ render <Link> khi có giá trị đường dẫn.
*/

Title.propTypes = {
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonDescription: PropTypes.string,
    clsBox: PropTypes.string,
    clsButton: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node,
};

export default Title;
