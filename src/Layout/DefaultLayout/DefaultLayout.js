import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import DefaultSlider from './DefaultSlider';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="section">
                <DefaultSlider />
                <div className="content">{children}</div>
            </div>
            <Footer/>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
