import React, {useState, useEffect} from 'react';
import Cart from './Cart/Cart.js';
import Data from '../Components/fakeData/fakeData.json';

function ShopCart() {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        setCarts(Data);
    },[]);
    const [addCart, setAddCart] = useState([]);
    const handleAddProduct = (product) =>{
        console.log('addeddd')
        const newCart = [...addCart, carts];
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
