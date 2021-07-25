import React from 'react';

const Options = ({ count, showCart, cartClass }) => {
    return (
        <div className="options">
            <button className="cart" onClick={() => showCart()}>Cart ({count})</button>
            <a href="#">Men Shoes</a>
            <a href="#">Women Shoes</a>
            <a href="#">Handbags</a>
            <a href="#">Backpack</a>
            <a href="#">Leather Jackets</a>
            <a href="#">Denims</a>
            <div className={cartClass}>
                <div className="cart-item">
                    <div className="cart-item-txt">
                        <p>Cardigan</p>
                        <small>Quantity: 1</small>
                        <small>Total: $250</small>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-txt">
                        <p>Cardigan</p>
                        <small>Quantity: 1</small>
                        <small>Total: $250</small>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-txt">
                        <p>Cardigan</p>
                        <small>Quantity: 1</small>
                        <small>Total: $250</small>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-txt">
                        <p>Cardigan</p>
                        <small>Quantity: 1</small>
                        <small>Total: $250</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;