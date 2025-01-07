import React from 'react';
import Header from './Header';
import DefaultSlider from './DefaultSlider';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <DefaultSlider />
                <div className="content">{children}</div>
            </div>
        </>
    );
}
export default DefaultLayout;
