import React from 'react';
import Carousel from './slider/Carousel';
import ShopCart from './ShopCart';

function Shop() {
    return (
        <div className='shop'>
            <div className="container-fluidd">
                <div className="slider__part">
                    <Carousel/>
                </div>
                <div className="delivary__section d-flex">
                    <div className="col-3">
                        <i className='fa fa-truck'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores eaque commodi cum, magni commodi cum, magni.</p>
                    </div>
                    <div className="col-3">
                        <i className='fa fa-hand-holding-usd'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores eaque commodi cum, magni commodi cum, magni.</p>
                    </div>
                    <div className="col-3">
                        <i className='fa fa-chess-queen'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores eaque commodi cum, magni commodi cum, magni.</p>
                    </div>
                </div>
                <div className="shopcart">
                    <h1>New Product...</h1>
                    <ShopCart />
                </div>
            </div>
        </div>
    )
}

export default Shop
