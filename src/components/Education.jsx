import { useEffect, useRef } from 'react';
import { education } from '../data';
import './Education.css';

export default function Education() {
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
        <section className="section alt" id="education" ref={ref}>
            <div className="container">
                <div className="fade-in">
                    <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Academic Background</span></div>
                    <h2 className="sec-title">Education</h2>
                </div>
                <div className="edu-list fade-in">
                    {education.map((e, i) => (
                        <div className="edu-row" key={i}>
                            <div className="edu-yr">{e.period}</div>
                            <div>
                                <div className="edu-deg">{e.degree}</div>
                                <div className="edu-school">{e.school}</div>
                            </div>
                            <div className="edu-score">{e.score}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
