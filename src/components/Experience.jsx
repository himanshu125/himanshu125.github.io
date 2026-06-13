import { useEffect, useRef } from 'react';
import { experience } from '../data';
import './Experience.css';

export default function Experience() {
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
        <section className="section alt" id="experience" ref={ref}>
            <div className="container">
                <div className="fade-in">
                    <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Work History</span></div>
                    <h2 className="sec-title">Experience</h2>
                </div>
                <div className="timeline fade-in">
                    {experience.map((job, i) => (
                        <div className="t-item" key={i}>
                            <div className="t-meta">
                                <span className="t-date">{job.period}</span>
                                {job.current && <span className="t-now">Current</span>}
                            </div>
                            <div className="t-company">{job.company}</div>
                            <div className="t-role">{job.role}</div>
                            <p className="t-desc">{job.description}</p>
                            <div className="chips">
                                {job.chips.map(c => <span key={c} className="chip">{c}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
