import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './Cart.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import emptyCart from '~/assets/images/EmptyCart/abandoned-cart126.png';

const cx = classNames.bind(styles);

function Cart({ cartCount = 0 }) {
    return (
        <div className={cx('cart-wrapper')}>
            <Tippy
                interactive
                // visible
                placement="bottom-end"
                delay={[300, 0]}
                render={(attrs) => (
                    <div className={cx('cart-box')} tabIndex="-1" {...attrs}>
                        {cartCount > 0 ? (
                            <p>Bạn có {cartCount} sản phẩm trong giỏ hàng!</p>
                        ) : (
                            <>
                                <Image className={cx('cart-img')} src={emptyCart} alt="Empty Cart" />
                                <div className={cx('cart-empty-content')}>
                                    <h3>Giỏ hàng của bạn đang trống :(</h3>
                                    <p>Vui lòng thêm sản phẩm!</p>
                                </div>
                                <Link to="/course">
                                    <Button primary Large className={cx('custom-btn')}>
                                        Mua ngay
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                )}
            >
                <div className={cx('cart')}>
                    <FontAwesomeIcon className={cx('icon-cart')} icon={faCartShopping} />
                    <div className={cx('cart-count')}>{cartCount}</div>
                </div>
            </Tippy>
        </div>
    );
}

export default Cart;
