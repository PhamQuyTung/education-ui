import React from 'react';
import Header from './Header';
import Slider from './Slider';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Slider />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
