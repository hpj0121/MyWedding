import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryImage0 from '../asset/image/gallery/test_1.jpg';
import galleryImage1 from '../asset/image/gallery/test_2.jpg';
import galleryImage2 from '../asset/image/gallery/test_3.jpg';
import galleryImage3 from '../asset/image/gallery/test_4.jpg';
import galleryImage4 from '../asset/image/gallery/test_5.jpg';
import f1 from "../asset/image/icons/f1.png"
import f2 from "../asset/image/icons/f2.png"
import useScrollFadeIn from "hooks/useScrollFadeIn";

const SimpleSlider = (props) => {
    const animatedItem = useScrollFadeIn();
    const settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <div className="component" {...animatedItem}>
          <div className="componentTitle" ref={props.galleryRef}>
            <img src={f1} alt="flower icon"/>
            사진
            <img src={f2} alt="flower icon"/>
          </div>
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
      </div>
    );
};

export default SimpleSlider;