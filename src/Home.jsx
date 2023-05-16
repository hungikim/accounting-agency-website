import './Home.css'
import greenImg from './assets/green-img.jpeg'
import buildingImg1 from './assets/building-img1.jpeg'
import buildingImg2 from './assets/building-img2.jpeg'
import buildingImg3 from './assets/building-img3.jpeg'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(nextSlide, 4000)
        return () => clearInterval(interval)
    }, [])
    useEffect(()=>{// show new slide
        const carousel = document.querySelectorAll('.carousel-item')
        const dots = document.querySelectorAll('.dot')

        // Reset css properties
        for (let i=0; i<carousel.length; i++){
            carousel[i].style.opacity=0
            dots[i].style.backgroundColor='#EEE'
        }

        // Current slide css properties
        carousel[slideIndex].style.opacity=1
        dots[slideIndex].style.backgroundColor='green'

    }, [slideIndex])

    function nextSlide(){ // set slide index
        setSlideIndex(prevIndex=>((prevIndex+1)%4))
    }
    function prevSlide(){
        setSlideIndex(prevIndex=>(prevIndex===0)? 3 : prevIndex-1)
    }

    return (
        <section className='Home carousel'>
            <div className='carousel-item'>
                <img className='carousel-img' src={greenImg} loading='lazy'/>
                <div className='carousel-txt carousel-txt-1'>
                    <h3>
                        바른 약속과 신뢰로 <br/>
                        고객과 함께하는 <br/>
                    </h3>
                    <h1>그린세무법인</h1>

                </div>
            </div>
            
            <div className='carousel-item'>
                <img className='carousel-img' src={buildingImg1} loading='lazy'/>
                <div className='carousel-txt carousel-txt-2'>
                    <h3>
                        건강한 상식을 바탕으로 하는 <br/>
                        합법적 합리적 시스템과 전략으로 <br/>
                        공정하고 합리적인 보상, <br/>
                        사회적 존경과 신뢰의 <br/>
                        기업과 기업인이 되도록 <br/>
                        함께 하겠습니다.
                    </h3>
                </div>
            </div>
            <div className='carousel-item'>
                <img className='carousel-img' src={buildingImg2} loading='lazy'/>
                <div className='carousel-txt carousel-txt-3'>
                    <h3>
                        오직 <br/>
                        대한민국 경제의 <br/>
                        근본이자 뿌리인 <br/>
                        중소기업의 발전과 성장의 길에 <br/>
                        그린세무법인이 <br/>
                        함께하겠습니다 <br/>
                    </h3>
                </div>
            </div>
            <div className='carousel-item'>
                <img className='carousel-img' src={buildingImg3} loading='lazy'/>
                    <div className='carousel-txt carousel-txt-4'>
                    <h3>
                        함께 하는 <br/>
                        따뜻한 마음과 공간의 시간이 <br/>
                        삶의 의미와 가치를 <br/>
                        높여 드릴 것이라고 <br/>
                        그린세무법인 구성원 모두는<br/>
                        확신합니다 <br/>
                    </h3>
              
                </div>
            </div>

            <a className='carousel-tel' href='tel:0314393455'>031-439-3455</a>
            <span className='carousel-prev' onClick={prevSlide}>&#10094;</span>
            <span className='carousel-next' onClick={nextSlide}>&#10095;</span>
            <div className='dots'>
                <span className='dot' onClick={()=>setSlideIndex(0)}></span>
                <span className='dot' onClick={()=>setSlideIndex(1)}></span>
                <span className='dot' onClick={()=>setSlideIndex(2)}></span>
                <span className='dot' onClick={()=>setSlideIndex(3)}></span>
            </div>
        </section>
    )
}