import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CardItem({ icon, title, sub, buttonDescription }) {
    return (
        <div className={cx('card-item')}>
            <div className={cx('wrap-icon')}>{icon}</div>
            <div className={cx('content')}>
                <h3 className={cx('title')}>{title}</h3>
                <p className={cx('sub')}>{sub}</p>
                <Link to='/'>
                    <Button Small primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                        {buttonDescription}
                    </Button>
                </Link>
            </div>
        </div>
    );
}

CardItem.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
    buttonDescription: PropTypes.string.isRequired,
};

export default CardItem;
