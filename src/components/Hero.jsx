import { useEffect, useRef } from 'react';
import './Hero.css';

const words = ['clean backend systems', 'scalable APIs', 'data pipelines', 'robust architecture', 'distributed services'];

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        let wi = 0, ci = 0, del = false;
        let timer;
        const tick = () => {
            const w = words[wi];
            if (del) {
                if (typedRef.current) typedRef.current.textContent = w.slice(0, --ci);
                if (ci === 0) { del = false; wi = (wi + 1) % words.length; timer = setTimeout(tick, 400); return; }
                timer = setTimeout(tick, 50);
            } else {
                if (typedRef.current) typedRef.current.textContent = w.slice(0, ++ci);
                if (ci === w.length) { del = true; timer = setTimeout(tick, 2500); return; }
                timer = setTimeout(tick, 90);
            }
        };
        timer = setTimeout(tick, 1000);
        return () => clearTimeout(timer);
    }, []);

    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="hero" id="home">
            <div className="hero-inner">
                <div className="hero-eyebrow">
                    <div className="hero-eyebrow-line" />
                    <span className="hero-eyebrow-text">Software Engineer · Arrow International</span>
                </div>
                <h1 className="hero-h1">
                    Himanshu<br />
                    Ranjan<span className="gold-dot">.</span>
                </h1>
                <p className="hero-desc">
                    Building <span className="typed-wrap"><span ref={typedRef} /><span className="cursor" /></span> —
                    from enterprise gaming platforms to data pipelines and APIs.
                    CS graduate from IIIT Bhagalpur with 4+ years of production experience.
                </p>
                <div className="hero-btns">
                    <button className="btn-p" onClick={() => scrollTo('projects')}>View Projects ↗</button>
                    <a href="https://www.linkedin.com/in/himanshu125ranjan/" target="_blank" rel="noreferrer" className="btn-s">LinkedIn</a>
                    <a href="https://github.com/himanshu125" target="_blank" rel="noreferrer" className="btn-s">GitHub</a>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-num">4<span>+</span></div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">3</div>
                        <div className="stat-label">Companies</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">15<span>+</span></div>
                        <div className="stat-label">Repositories</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-num">7.32</div>
                        <div className="stat-label">B.Tech CGPA</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
