import React, {useState, useEffect, useContext} from 'react';
import Cart from './Cart/Cart.js';
import Data from '../Components/fakeData/fakeData.json';
import {CardContext} from "../App";

function ShopCart() {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        setCarts(Data);
    },[]);
    const [addCart, setAddCart] = useContext(CardContext);
    const handleAddProduct = (product) =>{
        console.log('addeddd')
        console.log(addCart.length)
        const newCart = [...addCart, product];
        setAddCart(newCart);
    }

    return (
        <div className="cartpart">
            {
                carts.map(cart => <Cart cart={cart} handleAddProduct={handleAddProduct} key={cart.id}></Cart>)
            }
            <h1>{addCart.length}</h1>
        </div>
    )
}

export default ShopCart
