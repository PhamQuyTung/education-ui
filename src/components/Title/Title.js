import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { faArrowRight, faBook, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './Title.module.scss';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Title({ title, sub, description, buttonDescription, clsBox, clsButton, to, children }) {
    return (
        <div className={cx('box', clsBox)}>
            <div className={cx('heading')}>
                <span className={cx('title')}>
                    <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
                    {title}
                </span>
                <h2 className={cx('sub')}>{sub}</h2>
                <p className={cx('description')}>{description}</p>
            </div>

            {children}

            <Link to={to} className={cx('button', clsButton)}>
                <Button ExtraLarge primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                    {buttonDescription}
                </Button>
            </Link>
        </div>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonDescription: PropTypes.string.isRequired,
    clsBox: PropTypes.string,
    clsButton: PropTypes.string,
    children: PropTypes.node,
};

export default Title;
