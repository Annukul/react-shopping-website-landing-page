import React from 'react';
import Wf from './verysmall/Wf';

const Wfs = ({ addCart, womenItems }) => {
    return (
        <div className="fa">
            <div className="fa1">
                <h1 className="fa1-h1">Woman's</h1>
                <h1>Fashion</h1>
            </div>
            <Wf addCart={addCart} womenItems={womenItems} />
        </div>
    );
}

export default Wfs;