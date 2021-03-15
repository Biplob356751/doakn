import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Carousel extends Component {

    constructor(props) {
        super(props);
    
        this.image0 = "https://s3-pixelphant-frontend.s3.amazonaws.com/frontend/white-background-photography-1.jpg";
        this.image1 = "https://i1.wp.com/s3-pixelphant-frontend.s3.amazonaws.com/frontend/use-subtle-colors.jpg?fit=1024%2C512&ssl=1";
        this.image2 = "https://savageuniversal.com/wp-content/uploads/2019/03/ZP-FOOD-122917_2338-1-1000x675.png";
        this.image3 = "https://cdn.shopify.com/s/files/1/0169/0383/1606/articles/blog-product-photos_1200x674.jpg?v=1564587146";
        this.title = "40% OFF All Product...";
        this.title1 = "30% OFF All Product...";
        this.title2 = "50% OFF All Product...";
        this.title3 = "10% OFF All Product...";
        this.description = "On Time Delivary";
        this.para = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptas nihil, architec necessitatibus labore nesciunt ipsum quaerat quos dolorem non?";
      };
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            speed: 2000,
          };
        return (
            <div className="slider-part">
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div className="slide-image">
                        <img src={this.image0} alt=""/>
                        <div className="slide-content">
                            <h1>{this.title}</h1>
                            <span>{this.description}</span>
                            <p>{this.para}</p>
                        </div>
                    </div>
                    <div className="slide-image">
                        <img src={this.image1} alt=""/>
                        <div className="slide-content">
                            <h1>{this.title1}</h1>
                            <span>{this.description}</span>
                            <p>{this.para}</p>
                        </div>
                    </div>
                    <div className="slide-image">
                        <img src={this.image2} alt=""/>
                        <div className="slide-content">
                            <h1>{this.title2}</h1>
                            <span>{this.description}</span>
                            <p>{this.para}</p>
                        </div>
                    </div>
                    <div className="slide-image">
                        <img src={this.image3} alt=""/>
                        <div className="slide-content">
                            <h1>{this.title3}</h1>
                            <span>{this.description}</span>
                            <p>{this.para}</p>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default Carousel;
