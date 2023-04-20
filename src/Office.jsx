import './Office.css'

export default function Office(){
    return (
        <div className='Office'>
            <div className='address'>
                <h1>오시는 길</h1>
                <p>주소: 안산시 광덕4로 116 304호</p>
                <p>TEL: 031-439-3455</p>
                <p>FAX: 031-439-3466</p>
            </div>
            <div className='map-container'>
                <img className='map-image' onClick={ () => window.open('https://naver.me/Gd1uu2DP','_blank') } src='./src/assets/green-location.png' alt='그린세무법인 위치' width='800px' height='400px' />
                <p className='map-comment'>지도를 클릭하시면 새 탭에서 지도가 열립니다.</p>
            </div>
        </div>
    )
}