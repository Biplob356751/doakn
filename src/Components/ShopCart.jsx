import React, {useState, useEffect} from 'react';
import Cart from './Cart/Cart.js';
import Data from '../Components/fakeData/fakeData.json';

function ShopCart() {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        setCarts(Data);
    },[]);

    return (
        <div className="cartpart">
            {
                carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
            }
        </div>
    )
}

export default ShopCart
