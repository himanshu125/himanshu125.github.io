import { useState, useEffect } from 'react';
import './Nav.css';

const links = ['about', 'experience', 'projects', 'education', 'contact'];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let cur = '';
            sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
            setActive(cur);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (e, id) => {
        e.preventDefault();
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="nav">
            <a href="#" className="nav-logo" onClick={e => handleNav(e, 'home')}>
                HR<span>.</span>
            </a>
            <ul className={`nav-links${open ? ' open' : ''}`}>
                {links.map(id => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className={`nav-link${active === id ? ' active' : ''}${id === 'contact' ? ' nav-cta' : ''}`}
                            onClick={e => handleNav(e, id)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
                <span /><span /><span />
            </button>
        </nav>
    );
}
