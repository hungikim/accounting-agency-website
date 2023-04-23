import './Footer.css'

export default function Footer(){
    return (
        <footer className='Footer'>
            <div className='footer-container'>
                <ul className="footer-column">
                    <li className='footer-column-title'>제목1</li>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
                <ul className="footer-column">
                    <li className='footer-column-title'>제목2</li>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
                <ul className="footer-column">
                    <li className='footer-column-title'>제목3</li>
                    <li>항문1</li>
                    <li>항목2</li>
                </ul>
                <ul className="footer-column">
                    <li className='footer-column-title'>제목4</li>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
                <div className='footer-break'></div>
                <div className='footer-tel-info'>
                    <p className='footer-column-title'>전화상담</p>
                    <p>031-439-3455 (09:00 ~ 17:00)</p>
                </div>
            </div>
        </footer>
    )
}