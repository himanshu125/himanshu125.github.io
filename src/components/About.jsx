import { useEffect, useRef } from 'react';
import { skills } from '../data';
import './About.css';

export default function About() {
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
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <div className="fade-in">
                    <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">About</span></div>
                    <h2 className="sec-title">Problem Solver. Quick Learner.</h2>
                </div>
                <div className="about-grid">
                    <div className="about-body fade-in">
                        <p>I'm a Software Engineer with a B.Tech in Computer Science &amp; Engineering from the <strong>Indian Institute of Information Technology, Bhagalpur</strong>.</p>
                        <p>Currently at <strong>Arrow International</strong>, I build enterprise gaming systems — working across backend services, APIs, database design, and system architecture. I care about clean code, well-defined boundaries, and software that holds up under real conditions.</p>
                        <p>Previously at <strong>Zensar Technologies</strong> and <strong>Infosys</strong>, where I worked on enterprise software delivery and large-scale application development.</p>
                        <p>Outside work — machine learning, NLP, and algorithms keep me sharp.</p>
                    </div>
                    <div className="about-skills fade-in">
                        {skills.map(group => (
                            <div key={group.label} className="skill-group">
                                <div className="skill-label">{group.label}</div>
                                <div className="tags">
                                    {group.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
