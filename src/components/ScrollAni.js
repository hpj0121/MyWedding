import React, {useEffect, useRef, useState} from 'react';

const ScrollAni = () => {
  function importAll(r){
    let images = {};
    r.keys().map(item => {images[item.replace('./', '')] = r(item); });
    return images;
  }
  const NUMB_IMG = 81;
  const html = document.documentElement;
  const images = importAll(require.context('../asset/image/frame', false, /\.png/));
  const [position, setPosition] = useState(0);
  const [isCanvasFixed, setIsCanvasFixed] = useState(true);
  const canvasRef = useRef(null);

  useEffect(()=>{
    draw(1)
    window.addEventListener("scroll", ()=>{
      setPosition(window.scrollY)
      requestAnimationFrame(() => scrollActFunc());
    });
    return ()=> {
        window.removeEventListener("scroll", ()=>setPosition(window.scrollY));
    };
  }, []);

  function draw(image_seq) {
    if(image_seq >= NUMB_IMG -1) setIsCanvasFixed(false);
    else setIsCanvasFixed(true);

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
    var i = percentageFunc(NUMB_IMG);
    if(i<=NUMB_IMG){
        draw(i)
    }
  }

  var percentageFunc = function(frameCount){
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollheight = window.innerHeight;
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
  
  return <div className="canvas"><canvas className={isCanvasFixed ? "positionFixed" : "positionAbsolute"} ref={canvasRef} ></canvas></div>;
};
  
  export default ScrollAni;