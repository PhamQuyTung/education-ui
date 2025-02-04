import styles from './DefaultSlider.module.scss';
import classNames from 'classnames/bind';
import BreadCrumb from '~/components/BreadCrumb';

const cx = classNames.bind(styles);

function DefaultSlider() {
    return (
        <div className={cx('sliderRouter')}>
            <div className={cx('bg')}>
                <BreadCrumb />
                <div className={cx('shape1')}></div>
                <div className={cx('shape2')}></div>
                <div className={cx('shape3')}></div>
            </div>
        </div>
    );
}

export default DefaultSlider;
