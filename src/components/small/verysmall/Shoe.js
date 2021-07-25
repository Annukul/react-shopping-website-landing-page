import React from 'react';
import img1 from '../../../images/shoe1.png';
import img2 from '../../../images/shoe2.png';
import img3 from '../../../images/shoe3.png';
import img4 from '../../../images/shoe4.png';

const Shoe = () => {
    return (
        <>
            <div className="shoes-1">
                <div className="shoe">
                    <img src={img1} alt="Shoes" />
                    <div className="shoe-txt">
                        <p>Nike zoom</p><span>$250</span>
                    </div>
                </div>
                <h1 className="shoe-tag shoe-tag-top">Sports</h1>
                <div className="shoe">
                    <img src={img2} alt="Shoes" />
                    <div className="shoe-txt">
                        <p>Nike zoom</p><span>$250</span>
                    </div>
                </div>
            </div>
            <div className="shoes-2">
                <div className="shoe">
                    <img src={img3} alt="Shoes" />
                    <div className="shoe-txt">
                        <p>Nike zoom</p><span>$250</span>
                    </div>
                </div>
                <h1 className="shoe-tag shoe-tag-bottom">Shoes</h1>
                <div className="shoe">
                    <img src={img4} alt="Shoes" />
                    <div className="shoe-txt">
                        <p>Nike zoom</p><span>$250</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shoe;