import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

export default function App() {
    const [showBtt, setShowBtt] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowBtt(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <footer className="footer">
                <p>Himanshu Ranjan &nbsp;·&nbsp; Software Engineer</p>
                <p>
                    Built with React &nbsp;·&nbsp;
                    <a href="https://github.com/himanshu125/himanshu125.github.io" target="_blank" rel="noreferrer">View source ↗</a>
                </p>
            </footer>
            <a
                href="#"
                className={`btt${showBtt ? ' show' : ''}`}
                onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >↑</a>
        </>
    );
}
