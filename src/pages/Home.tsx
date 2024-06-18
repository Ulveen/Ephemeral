import { useEffect } from 'react'
import './Home.css'
import useCheckIsVisible from '../hooks/useCheckIsVisible'

export default function Home() {
    const {ref: page, isVisible: isPageVisible} = useCheckIsVisible<HTMLDivElement>()
    // const {ref: title, isVisible: isTitleVisible} = useCheckIsVisible<HTMLParagraphElement>()

    useEffect(() => {
        
    }, [isPageVisible])

    return (
        <div className="page" id="home" ref={page}>
            <p className="home-title">Ephemeral</p>
            <img className='home-bg' src='/bg1.png' />
        </div>
    )
}