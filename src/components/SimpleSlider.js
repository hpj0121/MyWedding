import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryImage0 from '../asset/image/gallery/test_1.jpg';
import galleryImage1 from '../asset/image/gallery/test_2.jpg';
import galleryImage2 from '../asset/image/gallery/test_3.jpg';
import galleryImage3 from '../asset/image/gallery/test_4.jpg';
import galleryImage4 from '../asset/image/gallery/test_5.jpg';

const SimpleSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <>
        <div className="componentTitle" ref={props.galleryRef}>사진</div>
        <div className="gallery_container">
        <Slider {...settings}>
          <div>
          <img className="gallery_img" src={ galleryImage0 } alt='test' />
          </div>
          <div>
          <img className="gallery_img" src={ galleryImage1 } alt='test' />
          </div>
          <div>
          <img className="gallery_img" src={ galleryImage2 } alt='test' />
          </div>
          <div>
          <img className="gallery_img" src={ galleryImage3 } alt='test' />
          </div>
          <div>
          <img className="gallery_img" src={ galleryImage4 } alt='test' />
          </div>
        </Slider>
      </div>
      </>
    );
};

export default SimpleSlider;