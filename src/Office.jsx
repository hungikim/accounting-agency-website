import './Office.css'
import { useEffect } from 'react'

export default function Office(){
    useEffect( () => {
        document.querySelector('.Office').style.opacity = '1';
        document.querySelector('.Office').style.transform = 'translateY(0%)';
    }, [])

    // Load the map from Kakao Map API (Map service in South Korea)
    useEffect(()=>{
        const { kakao } = window;
        var container = document.getElementById('map-container');
        var options = {
            center: new kakao.maps.LatLng(37.31500298207166, 126.82521778307598),
            level: 5
        }

        var map = new kakao.maps.Map(container, options)
        
        map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.BOTTOMRIGHT)
        map.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.BOTTOMLEFT)
        
        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.31500298207166, 126.82521778307598)
        })
        marker.setMap(map)

        var infowindow = new kakao.maps.CustomOverlay({
            position: new kakao.maps.LatLng(37.31500298207166, 126.82521778307598),
            content: `<div class="map-infowindow">
                        <a href='http://kko.to/gcgRt6dO7G' target='_blank'>
                            <span class='iw-title'>
                                그린세무법인 ▸
                            </span>
                        </a>
                      </div>`
        })
        infowindow.setMap(map)
        
    }, []);

    
    return (
        <div className='Office'>
            <div className='address'>
                <h1>오시는 길</h1><br />
                <p>주소: 안산시 광덕4로 116 304호</p>
                <p>TEL: 031-439-3455</p>
                <p>FAX: 031-439-3466</p>
                <p>전화상담: 월~금 09:00 ~ 17:00</p>
            </div>
            <div className='map-container' id='map-container'>
                {/* Kakao Map API gets loaded here */}
            </div>
        </div>
    )
}