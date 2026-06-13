import { useEffect, useRef } from 'react';
import { projects } from '../data';
import './Projects.css';

export default function Projects() {
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.07 }
        );
        ref.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <div className="fade-in">
                    <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Selected Work</span></div>
                    <h2 className="sec-title">Projects</h2>
                </div>
                <div className="proj-grid fade-in">
                    {projects.map((p, i) => (
                        <div className="proj-card" key={i}>
                            <div className="proj-head">
                                <span className="proj-type">{p.type}</span>
                                <a href={p.url} target="_blank" rel="noreferrer" className="proj-arrow">↗</a>
                            </div>
                            <div className="proj-title">{p.title}</div>
                            <p className="proj-desc">{p.description}</p>
                            <div className="chips">
                                {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
