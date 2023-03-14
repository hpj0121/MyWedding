import React, {useEffect, useRef, useState} from 'react';
import scene_0 from "../asset/image/frame/scene_0.webp"
import scene_1 from "../asset/image/frame/scene_1.webp"
import scene_2 from "../asset/image/frame/scene_2.webp"
import scene_3 from "../asset/image/frame/scene_3.webp"
import scene_4 from "../asset/image/frame/scene_4.webp"
import scene_5 from "../asset/image/frame/scene_5.webp"
import scene_6 from "../asset/image/frame/scene_6.webp"
import scene_7 from "../asset/image/frame/scene_7.webp"
import scene_8 from "../asset/image/frame/scene_8.webp"
import scene_9 from "../asset/image/frame/scene_9.webp"
import scene_10 from "../asset/image/frame/scene_10.webp"
import scene_11 from "../asset/image/frame/scene_11.webp"
import scene_12 from "../asset/image/frame/scene_12.webp"
import scene_13 from "../asset/image/frame/scene_13.webp"
import scene_14 from "../asset/image/frame/scene_14.webp"
import scene_15 from "../asset/image/frame/scene_15.webp"
import scene_16 from "../asset/image/frame/scene_16.webp"
import scene_17 from "../asset/image/frame/scene_17.webp"
import scene_18 from "../asset/image/frame/scene_18.webp"
import scene_19 from "../asset/image/frame/scene_19.webp"
import scene_20 from "../asset/image/frame/scene_20.webp"
import scene_21 from "../asset/image/frame/scene_21.webp"
import scene_22 from "../asset/image/frame/scene_22.webp"
import scene_23 from "../asset/image/frame/scene_23.webp"
import scene_24 from "../asset/image/frame/scene_24.webp"
import scene_25 from "../asset/image/frame/scene_25.webp"
import scene_26 from "../asset/image/frame/scene_26.webp"
import scene_27 from "../asset/image/frame/scene_27.webp"
import scene_28 from "../asset/image/frame/scene_28.webp"
import scene_29 from "../asset/image/frame/scene_29.webp"
import scene_30 from "../asset/image/frame/scene_30.webp"
import scene_31 from "../asset/image/frame/scene_31.webp"
import scene_32 from "../asset/image/frame/scene_32.webp"
import scene_33 from "../asset/image/frame/scene_33.webp"
import scene_34 from "../asset/image/frame/scene_34.webp"
import scene_35 from "../asset/image/frame/scene_35.webp"
import scene_36 from "../asset/image/frame/scene_36.webp"
import scene_37 from "../asset/image/frame/scene_37.webp"
import scene_38 from "../asset/image/frame/scene_38.webp"
import scene_39 from "../asset/image/frame/scene_39.webp"
import scene_40 from "../asset/image/frame/scene_40.webp"
import scene_41 from "../asset/image/frame/scene_41.webp"
import scene_42 from "../asset/image/frame/scene_42.webp"
import scene_43 from "../asset/image/frame/scene_43.webp"
import scene_44 from "../asset/image/frame/scene_44.webp"
import scene_45 from "../asset/image/frame/scene_45.webp"
import scene_46 from "../asset/image/frame/scene_46.webp"
import scene_47 from "../asset/image/frame/scene_47.webp"
import scene_48 from "../asset/image/frame/scene_48.webp"
import scene_49 from "../asset/image/frame/scene_49.webp"
import scene_50 from "../asset/image/frame/scene_50.webp"
import scene_51 from "../asset/image/frame/scene_51.webp"
import scene_52 from "../asset/image/frame/scene_52.webp"
import scene_53 from "../asset/image/frame/scene_53.webp"
import scene_54 from "../asset/image/frame/scene_54.webp"
import scene_55 from "../asset/image/frame/scene_55.webp"
import scene_56 from "../asset/image/frame/scene_56.webp"
import scene_57 from "../asset/image/frame/scene_57.webp"
import scene_58 from "../asset/image/frame/scene_58.webp"
import scene_59 from "../asset/image/frame/scene_59.webp"
import scene_60 from "../asset/image/frame/scene_60.webp"
import scene_61 from "../asset/image/frame/scene_61.webp"
import scene_62 from "../asset/image/frame/scene_62.webp"
import scene_63 from "../asset/image/frame/scene_63.webp"
import scene_64 from "../asset/image/frame/scene_64.webp"
import scene_65 from "../asset/image/frame/scene_65.webp"
import scene_66 from "../asset/image/frame/scene_66.webp"
import scene_67 from "../asset/image/frame/scene_67.webp"
import scene_68 from "../asset/image/frame/scene_68.webp"
import scene_69 from "../asset/image/frame/scene_69.webp"
import scene_70 from "../asset/image/frame/scene_70.webp"
import scene_71 from "../asset/image/frame/scene_71.webp"
import scene_72 from "../asset/image/frame/scene_72.webp"
import scene_73 from "../asset/image/frame/scene_73.webp"
import scene_74 from "../asset/image/frame/scene_74.webp"
import scene_75 from "../asset/image/frame/scene_75.webp"
import scene_76 from "../asset/image/frame/scene_76.webp"
import scene_77 from "../asset/image/frame/scene_77.webp"
import scene_78 from "../asset/image/frame/scene_78.webp"
import scene_79 from "../asset/image/frame/scene_79.webp"
import scene_80 from "../asset/image/frame/scene_80.webp"
import scene_81 from "../asset/image/frame/scene_81.webp"
import scene_82 from "../asset/image/frame/scene_82.webp"
import scene_83 from "../asset/image/frame/scene_83.webp"
import scene_84 from "../asset/image/frame/scene_84.webp"
import scene_85 from "../asset/image/frame/scene_85.webp"
import scene_86 from "../asset/image/frame/scene_86.webp"
import scene_87 from "../asset/image/frame/scene_87.webp"
import scene_88 from "../asset/image/frame/scene_88.webp"
import scene_89 from "../asset/image/frame/scene_89.webp"
import scene_90 from "../asset/image/frame/scene_90.webp"
import scene_91 from "../asset/image/frame/scene_91.webp"
import scene_92 from "../asset/image/frame/scene_92.webp"
import scene_93 from "../asset/image/frame/scene_93.webp"
import scene_94 from "../asset/image/frame/scene_94.webp"
import scene_95 from "../asset/image/frame/scene_95.webp"
import scene_96 from "../asset/image/frame/scene_96.webp"
import scene_97 from "../asset/image/frame/scene_97.webp"
import scene_98 from "../asset/image/frame/scene_98.webp"
import scene_99 from "../asset/image/frame/scene_99.webp"
import scene_100 from "../asset/image/frame/scene_100.webp"
import scene_101 from "../asset/image/frame/scene_101.webp"
import scene_102 from "../asset/image/frame/scene_102.webp"
import scene_103 from "../asset/image/frame/scene_103.webp"
import scene_104 from "../asset/image/frame/scene_104.webp"
import scene_105 from "../asset/image/frame/scene_105.webp"
import scene_106 from "../asset/image/frame/scene_106.webp"
import scene_107 from "../asset/image/frame/scene_107.webp"
import scene_108 from "../asset/image/frame/scene_108.webp"
import scene_109 from "../asset/image/frame/scene_109.webp"
import scene_110 from "../asset/image/frame/scene_110.webp"
import scene_111 from "../asset/image/frame/scene_111.webp"
import scene_112 from "../asset/image/frame/scene_112.webp"
import scene_113 from "../asset/image/frame/scene_113.webp"
import scene_114 from "../asset/image/frame/scene_114.webp"

const ScrollAni = () => {
  // function importAll(r){
  //   let images = {};
  //   r.keys().map(item => {images[item.replace('./', '')] = r(item); });
  //   return images;
  // }
  const NUMB_IMG = 119;
  const html = document.documentElement;
  // const images = importAll(require.context('../asset/image/frame', false, /\.jpg/));
  const [position, setPosition] = useState(0);
  const [isCanvasFixed, setIsCanvasFixed] = useState(true);
  const canvasRef = useRef(null);

  const images = [scene_0, scene_1, scene_2, scene_3, scene_4, scene_5, scene_6, scene_7, scene_8, scene_9, scene_10, 
    scene_11, scene_12, scene_13, scene_14, scene_15, scene_16, scene_17, scene_18, scene_19, scene_20, 
    scene_21, scene_22, scene_23, scene_24, scene_25, scene_26, scene_27, scene_28, scene_29, scene_30,
    scene_31, scene_32, scene_33, scene_34, scene_35, scene_36, scene_37, scene_38, scene_39, scene_40, 
    scene_41, scene_42, scene_43, scene_44, scene_45, scene_46, scene_47, scene_48, scene_49, scene_50, 
    scene_51, scene_52, scene_53, scene_54, scene_55, scene_56, scene_57, scene_58, scene_59, scene_60, 
    scene_61, scene_62, scene_63, scene_64, scene_65, scene_66, scene_67, scene_68, scene_69, scene_70, 
    scene_71, scene_72, scene_73, scene_74, scene_75, scene_76, scene_77, scene_78, scene_79, scene_80,
    scene_81, scene_82, scene_83, scene_84, scene_85, scene_86, scene_87, scene_88, scene_89, scene_90,
    scene_91, scene_92, scene_93, scene_94, scene_95, scene_96, scene_97, scene_98, scene_99, scene_100,
    scene_101, scene_102, scene_103, scene_104, scene_105, scene_106, scene_107, scene_108, scene_109, scene_110,
    scene_111, scene_112, scene_113, scene_114]

  console.log("images: ", images);

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
    image.src = images[image_seq];

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