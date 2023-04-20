import './Footer.css'

export default function Footer(){
    return (
        <div className='Footer'>
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
                    <li>항목3</li>
                </ul>
                <ul className="footer-column">
                    <li className='footer-column-title'>제목4</li>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
            </div>
        </div>
    )
}