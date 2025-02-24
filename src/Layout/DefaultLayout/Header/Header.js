import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import HeaderTop from './HeaderTop';

function Header() {
    const [currentUser, setCurrentUser] = useState(false); // Giả sử user đã đăng nhập
    return (
        <div className="Header-main">
            <HeaderTop currentUser={currentUser} />
            <HeaderNav currentUser={currentUser} />
        </div>
    );
}

export default Header;
