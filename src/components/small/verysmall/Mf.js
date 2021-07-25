import React from 'react';

const Mf = ({ addCart, menItems }) => {
    return (
        <div className="men-fa-main">
            {menItems.map((item) => {
                const { id, type, image, price, itemClass } = item;
                return (
                    <div key={id} className={`men-fa1-inside ` + itemClass}>
                        <div className="fa-inside-txt">
                            <h1 style={{ color: '#fad0c9' }}>{type}</h1>
                        </div>
                        <div className="fa-inside-img">
                            <img src={image} alt="Winter wear" />
                            <button className="men-cart-btn" onClick={() => addCart()}>Add to cart</button><span className="price">${price}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Mf;