import React, { useState } from 'react';
import Head from './components/Head';
import Content from './components/Content';
import Footer from './components/Footer';
import Men from './Mdata';
import Women from './Wdata';

function App() {
  const [count, setCount] = useState(0);
  const [cartClass, setCartClass] = useState('cart-item-close');
  const [menItems, setMenItems] = useState(Men);
  const [womenItems, setWomenItems] = useState(Women);
  const [cartItems, setCartItems] = useState({ id: '', type: '', price: '' });

  const getItems = () => {
    let allItems = menItems + womenItems;
    console.log(allItems);
  }
  getItems();

  const addCart = () => {
    const addOne = () => {
      const newNum = count + 1;
      setCount(newNum);
    }
    addOne();
  }

  const showCart = () => {
    if (cartClass === 'cart-item-close') {
      setCartClass('cart-items');
    }
    if (cartClass === 'cart-items') {
      setCartClass('cart-item-close');
    }
  }

  return (
    <>
      <Head count={count} showCart={showCart} cartClass={cartClass} />
      <Content addCart={addCart} menItems={menItems} womenItems={womenItems} />
      <Footer />
    </>
  );
}

export default App;
