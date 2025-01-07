import React from 'react';
import HeaderNav from './HeaderNav'
import HeaderTop from './HeaderTop';

function Header() {
    return (
        <div className='Header-main'>
            <HeaderTop />
            <HeaderNav />
        </div>
    );
}

export default Header;
