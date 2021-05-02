import React, {useContext} from 'react';
import {CardContext} from "../../App";

const Checkout = () => {

    const [addCart, setAddCart] = useContext(CardContext);
    console.log('I am checkout page')

    return (
        <div>
            {
                console.log(2)
            }
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>hi</h1>

            {
                addCart.map(cart => <h2>{cart.price}</h2>)
            }
        </div>
    );
};

export default Checkout;