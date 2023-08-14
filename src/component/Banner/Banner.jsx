import React from 'react'
import './banner.css'
import OwlCarousel from 'react-owl-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Banner1 from "../image/banner.jpg"
import Banner2 from "../image/banner2.jpg"
import Banner4 from "../image/banner4.jpg"



function Banner() {
    const owlOptions = {
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000
    };
    return (
        <div>
            < OwlCarousel className='owl-theme' {...owlOptions} >
                <div class='item'>
                    <div className="banner_img">
                        <img src={Banner4} alt="" className='img-fluid' />
                    </div>
                </div>

                <div class='item'>
                    <div className="banner_img">
                        <img src={Banner2} alt="" className='img-fluid' />
                    </div>
                </div>

                <div class='item'>
                    <div className="banner_img">
                        <img src={Banner1} alt="" className='img-fluid' />
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Banner
