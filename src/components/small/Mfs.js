import React from 'react';
import Mf from './verysmall/Mf';

const Mfs = ({ addCart, menItems }) => {
    return (
        <div className="men-fa">
            <div className="men-fa1">
                <h1 className="men-fa1-h1">Men's</h1>
                <h1>Fashion</h1>
            </div>
            <Mf addCart={addCart} menItems={menItems} />
        </div>
    );
}

export default Mfs;