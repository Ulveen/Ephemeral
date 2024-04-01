import './Navbar.css'

export default function Navbar() {
    function scroll(id: string) {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div id="navbar">
            <div className='navbar-content'>
                <p className='navbar-title' onClick={() => scroll('home')}>Ephemeral</p>
                <p className='navbar-link' onClick={() => scroll('sinopsis')}>Sinopsis</p>
                <p className='navbar-link' onClick={() => scroll('video')}>Video</p>
                <p className='navbar-link' onClick={() => scroll('kredit')}>Kredit</p>
            </div>
        </div>
    )
}