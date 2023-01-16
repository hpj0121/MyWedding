import { useLayoutEffect, useState } from 'react';
import galleryImage0 from '../asset/image/gallery/test_1.jpg';
import galleryImage1 from '../asset/image/gallery/test_2.jpg';
import galleryImage2 from '../asset/image/gallery/test_3.jpg';
import galleryImage3 from '../asset/image/gallery/test_4.jpg';
import galleryImage4 from '../asset/image/gallery/test_5.jpg';

const Gallery = () => {
  function useWindowSize(){
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() =>{
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

      return(
        <div className='gallery_container'>
            <ul className='gallery_item_box'>
                <li className='gallery_item' >
                  <img className='gallery_img' src={galleryImage0} alt='test' />
                </li>
                <li className='gallery_item' >
                  <img className='gallery_img' src={galleryImage1} alt='test' />
                </li>
                <li className='gallery_item' >
                  <img className='gallery_img' src={galleryImage2} alt='test' />
                </li>
                <li className='gallery_item' >
                  <img className='gallery_img' src={galleryImage3} alt='test' />
                </li>
                <li className='gallery_item' >
                  <img className='gallery_img' src={galleryImage4} alt='test' />
                </li>
            </ul>
        </div>
      );
  }

  export default Gallery;