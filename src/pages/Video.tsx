import './Video.css'

export default function Video() {
    return (
        <div className="page" id="video">
            <p className="video-title">Video</p>
            <iframe className='video-vid'
                src="https://www.youtube.com/embed/UPjZSPh04QM"
                allowFullScreen
            />
        </div>
    )
}