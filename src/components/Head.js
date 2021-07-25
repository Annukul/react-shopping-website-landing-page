import React from 'react';
import Menu from './small/Menu';
import Options from './small/Options';

const Header = ({ count, showCart, cartClass }) => {
    return (
        <div className="head">
            <div className="header">
                <Menu />
                <div className="header-text">
                    <h1>Shop what you need</h1>
                    <p>Shop from the huge variety of latest and trending footwear in town.</p>
                </div>
            </div>
            <Options count={count} showCart={showCart} cartClass={cartClass} />
        </div>
    );
}

export default Header;