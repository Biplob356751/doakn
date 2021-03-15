import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    toggleclick = () =>{
        document.querySelector('.menu__section').style.opacity = '1';
        document.querySelector('.menu__section').style.visibility = 'visible';
        document.querySelector('.menu__section').style.transform = 'scaleX(1)';
        document.querySelector('.toggle__search').style.opacity = '0';
        document.querySelector('.toggle__cross').style.visibility = 'visible';
        document.querySelector('body').style.width = '86%';
        document.querySelector('body').style.marginLeft = 'auto';
        document.querySelector('body').style.transition = '.3s';
    
    };
    toggleclick2 = () =>{
        document.querySelector('.menu__section').style.opacity = '0';
        document.querySelector('.menu__section').style.visibility = 'hidden';
        document.querySelector('.menu__section').style.transform = 'scaleX(0)';
        document.querySelector('.toggle__search').style.opacity = '1';
        document.querySelector('.toggle__cross').style.visibility = 'hidden';
        document.querySelector('body').style.width = '100%';
        document.querySelector('body').style.transition = '.3s';
    
    }
    render() {
        return (
            <div className='navbar'>
                <div className="container-fluidd">
                    <div className="nav__bar d-flex">
                        <div className="bar__icon col-1">
                            <div className="toggle__search">
                                <i className='fa fa-bars' onClick={this.toggleclick}></i>
                            </div>
                            <div className="toggle__cross">
                                <i className='fa fa-times' onClick={this.toggleclick2}></i>
                            </div>
                        </div>
                        <div className="logo col-1">
                            <Link to='/'><i class="fab fa-opencart"></i>SHOP</Link>
                        </div>
                        <div className="menu__section">
                            <ul>
                                <li><i className='fa fa-shopping-bag'></i><Link to='/'>Shop</Link></li>
                                <li><i className='fa fa-list'></i><Link to='/catagory'>Catagory</Link></li>
                                <li><i className='fa fa-blog'></i><Link to='/blog'>Blog</Link></li>
                                <li><i className='fa fa-camera'></i><Link to='/gallary'>Gallary</Link></li>
                                <li><i className='fa fa-street-view'></i><Link to='/location'>Location</Link></li>
                                <li><i className='fa fa-phone'></i><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="search__Section col-5">
                            <input type="text" placeholder='Find Your Product...'/>
                            <div className="search__icon">
                                <i className='fa fa-search'></i>
                            </div>
                        </div>
                        <div className="cart__icon col-1">
                            <Link to='/checkout'><i className='fa fa-cart-plus'></i></Link>
                            <span>4</span>
                        </div>
                        <div className="languge__section col-1">
                            <span>ENG</span>
                            <span> | </span>
                            <span>BNG</span>
                        </div>
                        <div className="login__section col-1">
                            <button><Link to='/singup'>Sing Up</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Nav


