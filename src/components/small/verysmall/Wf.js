import React from 'react';

const Wf = ({ addCart, womenItems }) => {
    return (
        <div className="fa-main">
            {womenItems.map((item) => {
                const { id, type, image, price, itemClass } = item;
                return (
                    <div key={id} className={`fa-inside ` + itemClass}>
                        <div className="fa-inside-txt">
                            <h1>{type}</h1>
                        </div>
                        <div className="fa-inside-img" >
                            <img src={image} alt="Winter wear" />
                            <button className="cart-btn" onClick={() => addCart()}>Add to cart</button><span className="price">${price}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Wf;