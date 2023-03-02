import { useEffect } from "react";
import useScrollFadeIn from "hooks/useScrollFadeIn";
import f3 from "../asset/image/icons/f3.png"
import f4 from "../asset/image/icons/f4.png"

const {kakao} = window;
const Directions = (props) => {
    const animatedItem = useScrollFadeIn();
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(36.6065475, 127.4209197),
            level: 4
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(36.6065475, 127.4209197); 
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, [])
    
    return (
        <div className="component" {...animatedItem}>
            <div className="componentTitle" ref={props.mapRef}>
                <img src={f3} alt="flower icon"/>
                    오시는 길
                <img src={f4} alt="flower icon"/>
            </div>
            <div id="map" className="kakaoMap"></div>
        </div>
    )
};

export default Directions;