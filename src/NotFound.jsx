import './NotFound.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound(){
    const navigate = useNavigate()
    useEffect( () => {
        setTimeout( () => {
            navigate('/')
        }, 1000)
    }, [])


    return (
        <div className='NotFound'>
            :( 유효한 URL이 아닙니다. 잠시 후 메인 페이지로 리다이렉트됩니다 ...
        </div>
    )
}