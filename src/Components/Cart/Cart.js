import React from 'react'
import { Link } from 'react-router-dom';

function Cart(props) {
    const {image, name, price, id} = props.cart;
    return (
            <div className="cartitem">
                <i className="fa fa-heart"></i>
                <img src={image} alt='t-shirt'/>
                <h4>{name}</h4>
                <p>{price}</p>
                <div className="button">
                    <button><Link to={`/details/${id}`}>Details</Link></button>
                    <button><Link>Add To Cart</Link></button>
                </div>
            </div>
    )
}

export default Cart
