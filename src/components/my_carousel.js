import React from 'react';
import Carousel from 'react-image-carousel';

let images = [
    './images/louis.jpg',
    '/img/landing2.jpg',
    '/img/landing3.jpg',
    '/img/landing4.jpg',
    '/img/landing5.jpg'
];
class PortfolioCarousel extends React.Component {
    render() {
        return(<div className="my-carousel">
            <Carousel images={images} 
                        thumb={true}
                        loop={true}
                        autoplay={3000}/>
        </div>, document.getElementById("app"))}}

export default PortfolioCarousel;