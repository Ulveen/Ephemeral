import './Navbar.css';

export default function Navbar() {
    const links = ['Sinopsis', 'Video', 'Kredit'];

    function scrollTo(id: string) {
        return () => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };

    return (
        <div id="navbar">
            <div className='navbar-content'>
                <p className='navbar-title' onClick={scrollTo('home')}>Ephemeral</p>
                {links.map((link, index) => (
                    <p key={index} className='navbar-link' onClick={scrollTo(link.toLowerCase())}>
                        {link}
                    </p>
                ))}
            </div>
        </div>
    );
}
