import React from 'react';
import Services from './small/Services';
import Wfs from './small/Wfs';
import Mfs from './small/Mfs';
import Shoes from './small/Shoes';

const Content = ({ addCart, menItems, womenItems }) => {
    return (
        <div className="content">
            <h2>Our Services</h2>
            <Services />
            <Wfs addCart={addCart} womenItems={womenItems} />
            <div className="empty-div"></div>
            <Mfs addCart={addCart} menItems={menItems} />
            <div className="empty-div"></div>
            <Shoes addCart={addCart} />
        </div>
    );
}

export default Content;