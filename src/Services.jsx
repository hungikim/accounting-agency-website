import './Services.css'
import personIcon from './assets/person-vcard.svg'
import calculatorIcon from './assets/calculator-fill.svg'
import textIcon from './assets/layout-text-sidebar-reverse.svg'
import cardIcon from './assets/card-checklist.svg'

export default function Services(){
    
    return (
        <main className='Services'>
            <h1 className='content-intro'>
                국세청 20년 경력을 바탕으로<br />
                "고객의 권익을 확실하게 챙기겠습니다."
            </h1>
            <section className='content kijang'>
                <img src={cardIcon} className='content-icon' />
                <h2 className="sub-title">세무기장서비스</h2>
                <p className='content-description'>
                    회계장부작성 및 각종 세무대리신고<br />
                    법인세·부가세·재산세제 등 각종신고대행 및 <br />
                    종합소득세 과세표준계산, 신고 대행 및 사후 관리
                </p>
            </section>
            <section className='content jojung'>
                <img src={calculatorIcon} className='content-icon' />
                <h2 className='sub-title'>세무조정</h2>
                <p className='content-description'>
                    결산 조정 및 신고조정을 통해 <br />
                    최선의 절세 방법을 제시하여 진행해드립니다.
                </p>
            </section>
            <section className='content employee'>
                <img src={personIcon} className='content-icon' />
                <h2 className="sub-title">직원관리</h2>
                <p className='content-description'>
                    원천세 신고, 급여관리, 4대보험 취득<br /> 
                    및 상실 신고를 포함한 전반적인 직원관리 서비스
                </p>
            </section>
            <section className='content guitar'>
                <img src={textIcon} className='content-icon' />
                <h2 className='sub-title'>기타</h2>
                <p className='content-description'>
                    양도/상속/증여 컨설팅 서비스
                </p>
            </section>

        </main>
    )
}