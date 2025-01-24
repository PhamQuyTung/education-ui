import React from 'react';
import classNames from 'classnames/bind';
import styles from './EventHome.module.scss';
import Title from '~/components/Title';
import EventHomeItem from './EventHomeItem';

const cx = classNames.bind(styles);

function EventHome() {
    return (
        <div className={cx('eventHome')}>
            <div className={cx('wrapper')}>
                <Title
                    title="Các sự kiện nổi bật"
                    sub="Sự kiện sắp tới của chúng tôi"
                    clsBox={cx('custom-box')}
                    clsSub={cx('custom-sub')}
                />

                <div className="eventItem">
                    <EventHomeItem />
                </div>
            </div>
        </div>
    );
}

export default EventHome;
