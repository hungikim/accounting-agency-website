import './Prices.css'
import { useEffect } from 'react'

export default function Prices(){
    useEffect(()=>{
        document.querySelector('.Prices').style.opacity = '1';
    },[])
    return (
        <div className='Prices'>
            <h1>비용안내</h1>
            <h2>비용안내</h2>
            <h3>비용 안내 지말고 내</h3>
        </div>
    )
}