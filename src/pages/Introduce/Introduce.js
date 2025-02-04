import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';
// import {Row, Col} from 

const cx = classNames.bind(styles);

function Introduce() {
    return ( 
        <div className={cx('introduce')}>
            <div className={cx('wrapper')}>
                <h2>Introduce page</h2>
            </div>
        </div>
    );
}

export default Introduce;