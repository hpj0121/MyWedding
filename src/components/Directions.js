import { useEffect } from "react";

const {kakao} = window;
const Directions = (props) => {
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
        <>
            <div className="componentTitle" ref={props.mapRef}>오시는 길</div>
            <div id="map" className="kakaoMap"></div>
        </>
    )
};

export default Directions;