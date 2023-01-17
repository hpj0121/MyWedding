import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import galleryImage0 from '../asset/image/gallery/test_1.jpg';
import galleryImage1 from '../asset/image/gallery/test_2.jpg';
import galleryImage2 from '../asset/image/gallery/test_3.jpg';
import galleryImage3 from '../asset/image/gallery/test_4.jpg';
import galleryImage4 from '../asset/image/gallery/test_5.jpg';

const Gallery = () => {

  const images = useRef([{src:galleryImage0}, {src:galleryImage1}, {src:galleryImage2}, {src:galleryImage3}, {src:galleryImage4}]);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({marginLeft: `-${current}00%`});

  const imgSize = useRef(5);
  
  const moveSlide = i =>{
    let nextIndex = current + i;
    if(nextIndex < 0) nextIndex = imgSize.current -1;else
    if(nextIndex >= imgSize.current) nextIndex = 0;
    setCurrent(nextIndex);
  };

  useEffect(()=>{
    setStyle({marginLeft: `-${current}00%`});
  },[current]);


  return (
    React.createElement("div", {className: "container"},
    React.createElement("div", {className: "slide"},
    React.createElement("div", {className:"btn", onClick:()=>{moveSlide(-1);}}, "<"),
    React.createElement("div", {className:"gallery_container"},
    React.createElement("div", {className:"gallery_box", style: style},
    images.current.map((img, i) =>
    React.createElement("img", {
      key:i,
      className:"gallery_img",
      src:img.src
    })))),

    React.createElement("div", {className:"btn", onClick: ()=>{moveSlide(1);}}, ">")),
    React.createElement("div", {className:"position"},
    images.current.map((x, i)=>
    React.createElement("div", {
      key:i,
      className: i === current ? 'dot current':'dot'})))));
  }

  export default Gallery;