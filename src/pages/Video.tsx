import { useEffect, useRef, useState } from 'react'
import './Video.css'

export default function Video() {

    const [state, setState] = useState(0)
    const carouselContentRef = useRef<HTMLDivElement | null>(null)

    function handleBtnClick(type: 'increment' | 'decrement') {
        return () => {
            switch (type) {
                case 'increment':
                    setState(state === 1 ? 0 : 1)
                    break;
                case 'decrement':
                    setState(state === 0 ? 1 : 0)
                    break;
            }
        }
    }

    useEffect(() => {
        if (carouselContentRef.current) {
            carouselContentRef.current.style.transform = `translateX(-${state * 100}%)`
        }
    })

    return (
        <div className="page" id="video">
            <p className="video-title">Video</p>
            <div className="carousel-wrapper">
                <button className="carousel-btn"
                    onClick={handleBtnClick('decrement')}>
                    ◄
                </button>
                <div className="carousel-container">
                    <div className="carousel-content" ref={carouselContentRef}>
                        <iframe className='video-vid'
                            src="https://www.youtube.com/embed/UPjZSPh04QM"
                            allowFullScreen
                        />
                        <iframe className='video-vid'
                            src="
                            https://binusianorg-my.sharepoint.com/personal/vincentius_tanoto_binus_ac_id/_layouts/15/embed.aspx?UniqueId=8b6aa059-de94-49fa-9d5b-692e1ae120b0&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create
                            "
                            allowFullScreen
                            title="Ephemeral Short Movie.mp4"
                        />
                    </div>
                </div>
                <button className="carousel-btn"
                    onClick={handleBtnClick('increment')}>
                    ►
                </button>
            </div>
        </div>
    )
}