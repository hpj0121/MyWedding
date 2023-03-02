import React, {useEffect, useRef, useState} from 'react';

const ScrollAni = () => {
  function importAll(r){
    let images = {};
    r.keys().map(item => {images[item.replace('./', '')] = r(item); });
    return images;
  }
  const html = document.documentElement;
  const images = importAll(require.context('../asset/image/frame', false, /\.png/));
  const [position, setPosition] = useState(0);
  const canvasRef = useRef(null);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      setPosition(window.scrollY)
      requestAnimationFrame(() => scrollActFunc());
    });
    return ()=> {
        window.removeEventListener("scroll", ()=>setPosition(window.scrollY));
    };
  }, []);

  function draw(image_seq) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    resizeCanvasToDisplaySize(ctx.canvas)
    const image = new Image();
    const image_index = 'scene_'+image_seq+'.png'
    image.src = images[image_index];

    image.onload = function(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, document.body.clientWidth, document.body.clientHeight);
    }
  }

  function scrollActFunc(){
    const numb_img = 81;
    var i = percentageFunc(numb_img);
    if(i<=numb_img){
        draw(i)
    }
  }

  var percentageFunc = function(frameCount){
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollheight = window.innerHeight -500;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
    return frameIndex;
  }

  function resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed
    const width = window.document.documentElement.clientWidth;
    const height = document.body.clientHeight;
 
    // If it's resolution does not match change it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
 
    return false;
 }
  
  return <div className="canvas"><canvas className="sticky" ref={canvasRef} ></canvas></div>;
};
  
  export default ScrollAni;