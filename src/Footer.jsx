import './Footer.css'

export default function Footer(){
    return (
        <footer className='Footer'>
            <div className='footer-info'>
                <p className='footer-info-title'>전화상담</p>
                <p><a className='phone-number' href='tel:0314393455'>031-439-3455</a> (월~금 09:00 ~ 17:00)</p>
            </div>
            <div className='footer-info'>
                <p className='footer-info-title'>그린세무법인</p>
                <p>경기도 안산시 광덕4로 116 304호</p>
            </div>
        </footer>
    )
}