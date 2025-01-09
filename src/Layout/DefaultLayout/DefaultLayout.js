import PropTypes from 'prop-types';
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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
