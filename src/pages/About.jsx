import React, { useEffect, useRef, useState } from 'react';
import './About.css';

/* ── Animated stat counter ── */
const StatCounter = ({ end, label, icon, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let startTime;
        const duration = 2200;
        const run = (time) => {
          if (!startTime) startTime = time;
          const pct = Math.min((time - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - pct, 4);
          setCount(Math.floor(ease * end));
          if (pct < 1) requestAnimationFrame(run);
          else setCount(end);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat-card fade-in" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

/* ── Faculty card ── */
const FacultyCard = ({ name, role, qual, delay = 0 }) => (
  <div className="faculty-card fade-in" style={{ transitionDelay: `${delay}s` }}>
    <div className="faculty-avatar">
      {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
    </div>
    <div className="faculty-info">
      <h4>{name}</h4>
      <p className="faculty-role">{role}</p>
      <p className="faculty-qual">{qual}</p>
    </div>
  </div>
);

const About = () => (
  <div className="page-wrapper">
    {/* ── Hero ── */}
    <div
      className="page-header"
      style={{ backgroundImage: "linear-gradient(rgba(10,25,47,0.72),rgba(10,25,47,0.92)),url('/assets/interior.png')" }}
    >
      <div className="container">
        <span className="page-badge fade-in">CSE Department · SSIPMT Raipur</span>
        <h1 className="page-title fade-in">About Us</h1>
        <p className="page-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
          Empowering the next generation of computing professionals since 2001.
        </p>
      </div>
    </div>

    {/* ── Mission & Vision ── */}
    <section className="section container">
      <div className="mv-intro fade-in">
        <span className="section-label">Who We Are</span>
        <h2 className="section-heading-lg">Excellence in Education &amp; Research</h2>
        <p className="section-lead">
          The Department of Computer Science &amp; Engineering at SSIPMT is committed to producing industry‑ready
          engineers through rigorous academics, hands‑on labs, and a vibrant innovation culture.
        </p>
      </div>

      <div className="mission-vision-grid">
        <div className="mv-card fade-in">
          <div className="mv-card-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To impart quality education and promote research in Computer Science &amp; Engineering.
            We equip students with strong foundational concepts, advanced technical skills, and a
            mindset for lifelong learning to tackle global challenges effectively.
          </p>
        </div>
        <div className="mv-card fade-in" style={{ transitionDelay: '0.15s' }}>
          <div className="mv-card-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            To be recognized as a center of excellence for education, research, and innovation
            in CSE, producing ethically strong and technically proficient graduates capable of
            leading the technological advancements of tomorrow.
          </p>
        </div>
        <div className="mv-card fade-in" style={{ transitionDelay: '0.3s' }}>
          <div className="mv-card-icon">💡</div>
          <h3>Core Values</h3>
          <p>
            Integrity, Innovation, and Inclusivity form the backbone of our department culture.
            We believe every student deserves equal opportunity to learn, build, and grow in a
            supportive and challenging environment.
          </p>
        </div>
      </div>
    </section>

    {/* ── Community Banner ── */}
    <section className="community-band">
      <div className="container">
        <div className="community-section fade-in">
          <div className="community-content">
            <span className="community-icon">🤝</span>
            <h2>Our Community</h2>
            <p>
              The CSE department at SSIPMT is more than just a place of learning — it's a thriving
              ecosystem of innovators, thinkers, and builders. Active tech clubs, mentorship programmes,
              and regular industry interactions make our community one of the most dynamic in the region.
            </p>
            <div className="community-tags">
              <span>Coding Club</span><span>Robotics Lab</span>
              <span>AI Research Cell</span><span>Entrepreneurship Cell</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="section container">
      <div className="section-title-wrap fade-in">
        <span className="section-label">By the Numbers</span>
        <h2>Our Achievements</h2>
        <div className="title-underline" />
      </div>
      <div className="stats-grid">
        <StatCounter end={2500} suffix="+" label="Alumni Worldwide"   icon="🎓" />
        <StatCounter end={98}   suffix="%" label="Placement Rate"     icon="💼" />
        <StatCounter end={50}   suffix="+" label="Industry Partners"  icon="🤝" />
        <StatCounter end={120}  suffix="+" label="Research Papers"    icon="📄" />
      </div>
    </section>

    {/* ── Faculty ── */}
    <section className="section faculty-section">
      <div className="container">
        <div className="section-title-wrap fade-in">
          <span className="section-label">Meet the Team</span>
          <h2>Our Faculty</h2>
          <div className="title-underline" />
        </div>
        <div className="faculty-grid">
          <FacultyCard name="Dr. R. K. Sharma"   role="Head of Department"         qual="Ph.D. IIT Delhi · AI &amp; ML"        delay={0}    />
          <FacultyCard name="Prof. S. Agarwal"   role="Associate Professor"         qual="M.Tech NIT · Networks &amp; Security" delay={0.1}  />
          <FacultyCard name="Dr. P. Mishra"      role="Assistant Professor"         qual="Ph.D. IIT Bombay · Data Science"     delay={0.2}  />
          <FacultyCard name="Prof. A. Verma"     role="Assistant Professor"         qual="M.Tech IIIT · Cloud Computing"       delay={0.3}  />
          <FacultyCard name="Dr. N. Gupta"       role="Associate Professor"         qual="Ph.D. NIT · Software Engineering"    delay={0.4}  />
          <FacultyCard name="Prof. D. Srivastava" role="Lab In‑Charge"             qual="M.Tech · Embedded Systems"           delay={0.5}  />
        </div>
      </div>
    </section>
  </div>
);

export default About;
