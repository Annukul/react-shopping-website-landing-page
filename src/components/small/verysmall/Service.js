import React from 'react';
import img1 from '../../../images/s1.png';
import img2 from '../../../images/s2.png';
import img3 from '../../../images/s3.png';
import img4 from '../../../images/s4.png';

const Service = () => {
    return (
        <>
            <div className="service">
                <img src={img1} alt="Services" />
                <div className="service-txt">
                    <h3>Fast Delivery</h3>
                    <p>Get faster delivery or free</p>
                </div>
            </div>
            <div className="service">
                <img src={img2} alt="Services" />
                <div className="service-txt">
                    <h3>Easy return</h3>
                    <p>We never ask questions</p>
                </div>
            </div>
            <div className="service">
                <img src={img3} alt="Services" />
                <div className="service-txt">
                    <h3>Golbal deliveries</h3>
                    <p>We ship all over the world</p>
                </div>
            </div>
            <div className="service">
                <img src={img4} alt="Services" />
                <div className="service-txt">
                    <h3>Safe delivery</h3>
                    <p>Don't worry about your products. The worry is ours</p>
                </div>
            </div>
        </>
    );
}

export default Service;