import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './Notification.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Notification({ notificationCount = 0 }) {
    return (
        <div className={cx('notification-wrapper')}>
            <Tippy
                interactive
                // visible
                placement="bottom-end"
                delay={[300, 0]}
                render={(attrs) => (
                    <div className={cx('notification-box')} tabIndex="-1" {...attrs}>
                        {notificationCount > 0 ? (
                            <p>Bạn nhận được {notificationCount} thông báo mới!</p>
                        ) : (
                            <>
                                <div className={cx('notification-empty-content')}>
                                    <h3>Bạn chưa nhận được thông báo nào!</h3>
                                </div>
                            </>
                        )}
                    </div>
                )}
            >
                <div className={cx('notification')}>
                    <FontAwesomeIcon className={cx('icon-notification')} icon={faBell} />
                    <div className={cx('notification-count')}>{notificationCount}</div>
                </div>
            </Tippy>
        </div>
    );
}

export default Notification;
