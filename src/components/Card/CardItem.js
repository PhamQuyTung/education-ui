import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChartSimple, faClock } from '@fortawesome/free-solid-svg-icons';

import styles from './Card.module.scss';
import Button from '~/components/Button';
import FullRating from '~/components/Rating';
import Image from '~/components/Image';
import { faFile, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const CardItem = memo(function ({
    classNameCard,
    courseHours,
    courseMinutes,
    icon,
    clsContent,
    img,
    ratingNum,
    title,
    sub,
    quantityUnit,
    quantityStudent,
    level,
    toBtn,
    toCourse,
    toUser,
    buttonDescription,
    userShortNamePosted,
    userNamePosted,
    cost = 'Free',
    costSale,
}) {
    return (
        <div className={cx('card-item', classNameCard)}>
            {(courseHours || courseMinutes) && (
                <div className={cx('wrap-courseTime')}>
                    <p className={cx('time')}>
                        <FontAwesomeIcon icon={faClock} />
                        <span>
                            {courseHours}h {courseMinutes}m
                        </span>
                    </p>
                </div>
            )}

            {img && (
                <div className={cx('wrap-img')}>
                    <Image className={cx('img')} src={img} />
                </div>
            )}

            {icon && <div className={cx('wrap-icon')}>{icon}</div>}

            <div className={cx('content', clsContent)}>
                {ratingNum && <FullRating ratingNum={parseFloat(ratingNum)} className={cx('wrap-ratingNum')} />}

                <Link to={toCourse}>
                    <h3 className={cx('title')}>{title}</h3>
                </Link>

                {((quantityUnit && level) || quantityStudent) && (
                    <div className={cx('box-meta')}>
                        <span className={cx('lesson')}>
                            <FontAwesomeIcon icon={faFile} className={cx('icon-file')} />
                            Bài học: {quantityUnit}
                        </span>

                        <span className={cx('lesson')}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon-ac')} />
                            Học viên: {quantityStudent}
                        </span>

                        <span className={cx('lesson')}>
                            <FontAwesomeIcon icon={faChartSimple} className={cx('icon-lv')} />
                            {level}
                        </span>
                    </div>
                )}

                {sub && <p className={cx('sub')}>{sub}</p>}

                {buttonDescription && (
                    <Link to={toBtn}>
                        <Button Small primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                            {buttonDescription}
                        </Button>
                    </Link>
                )}

                {userShortNamePosted && userNamePosted && cost && (
                    <div className={cx('wrap-footer')}>
                        <div className={cx('userShortNamePosted')}>
                            <span className={cx('userShortName')}>{userShortNamePosted}</span>
                            <Link to={toUser} className={cx('userNamePosted')}>
                                {userNamePosted}
                            </Link>
                        </div>
                        <div className={cx('wrap-cost')}>
                            <span className={cx('cost-first', { 'has-sale': costSale })}>{cost}₫</span>
                            {costSale && <span className={cx('cost-saled')}>{costSale}₫</span>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

CardItem.propTypes = {
    userNamePosted: PropTypes.string,
    userShortNamePosted: PropTypes.string,
    cost: PropTypes.number,
    costSale: PropTypes.number,
    clsContent: PropTypes.string,
    quantityUnit: PropTypes.number,
    quantityStudent: PropTypes.number,
    level: PropTypes.string,
    classNameCard: PropTypes.string,
    rating: PropTypes.bool,
    ratingNum: PropTypes.number,
    courseHours: PropTypes.number,
    courseMinutes: PropTypes.number,
    img: PropTypes.node,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    sub: PropTypes.string,
    to: PropTypes.string,
    buttonDescription: PropTypes.string,
};

export default CardItem;
