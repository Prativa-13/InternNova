
import { useState } from "react";
import CareerPathFinder from "./CareerPathFinder";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  Play,
} from "lucide-react";
import "./App.css";
import SkillGapAnalyzer from "./SkillGapAnalyzer";

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Domains", href: "#domains" },
  { label: "Our approach", href: "#approach" },
  { label: "About", href: "#about" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">
              <Sparkles size={21} />
            </span>
            <span className="brand-name">
              intern<span>nova</span>
              <small>LEARN. BUILD. LAUNCH.</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#programs" onClick={closeMenu}>
              Explore opportunities <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Don't just learn.
              <br />
              <span className="headline-gradient">Become the</span>
              <br />
              person who builds.
            </h1>

            <p className="hero-description">
              Your ambitions deserve more than tutorials. Discover a path to
              practical skills, real-world projects, and a future you can build
              with confidence.
            </p>

          
<div className="hero-actions">
  <a className="button button-primary" href="#programs">
    Explore programs <ArrowRight size={18} />
  </a>

  <a className="button button-secondary" href="#approach">
    <Play size={16} /> Discover our approach
  </a>

  <button
    className="button button-secondary"
    type="button"
    onClick={() =>
      document
        .getElementById("skill-gap-analyzer")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    <Sparkles size={16} /> Analyze My Skills
    <ArrowRight size={18} />
  </button>
</div>


            <div className="hero-note">
              <CheckCircle2 size={17} />
              <span>Learn with purpose. Build with confidence.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Learning and coding illustration">
            <div className="visual-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="floating-label label-top">
              <span className="mini-icon mini-blue">
                <Code2 size={17} />
              </span>
              <span>
                <strong>Learn by doing</strong>
                <small>Skills into action</small>
              </span>
            </div>

            <div className="learning-card">
              <div className="card-topline">
                <span className="card-dot" />
                <span className="card-dot" />
                <span className="card-dot" />
                <span className="card-label">YOUR LEARNING SPACE</span>
              </div>

              <div className="code-window">
                <div className="code-line">
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">future</span> ={" "}
                  <span className="code-green">"yours"</span>;
                </div>
                <div className="code-line">
                  <span className="code-purple">function</span>{" "}
                  <span className="code-blue">buildSkills</span>() {"{"}
                </div>
                <div className="code-line code-indent">
                  practice.<span className="code-orange">daily</span>();
                </div>
                <div className="code-line code-indent">
                  projects.<span className="code-orange">build</span>();
                </div>
                <div className="code-line">{"}"}</div>
                <div className="code-cursor" />
              </div>

              <div className="learning-divider" />

              <div className="learning-card-bottom">
                <div className="learning-symbol">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <strong>From curious to capable</strong>
                  <span>Your journey, your momentum.</span>
                </div>
                <ArrowUpRight className="learning-arrow" size={19} />
              </div>
            </div>

            <div className="floating-label label-bottom">
              <span className="mini-icon mini-green">
                <BriefcaseBusiness size={17} />
              </span>
              <span>
                <strong>Career-focused</strong>
                <small>Built for what's next</small>
              </span>
            </div>

            <div className="visual-caption">
              <span className="caption-line" />
              A little progress every day adds up.
            </div>
          </div>

          <a className="scroll-cue" href="#about" aria-label="Scroll to learn more">
            ↓
          </a>
        </section>

        <section className="intro-strip" id="about">
          <div className="container intro-strip-inner">
            <p>
              FOR THE <span>CURIOUS.</span> THE <span>AMBITIOUS.</span> THE
              ONES READY TO BEGIN.
            </p>
            <span className="intro-strip-mark">
              <Sparkles size={17} /> Make your next move count.
            </span>
          </div>
        </section>

        <section className="programs-section section-padding" id="programs">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">YOUR STARTING POINT</span>
                <h2>
                  Turn potential into <span>progress.</span>
                </h2>
              </div>
              <p>
                Wherever you are in your journey, take the next step with
                focused learning and practical experience.
              </p>
            </div>

            <div className="program-grid">
              {[
                {
                  number: "01",
                  icon: Code2,
                  title: "Technical Internships",
                  description:
                    "Turn what you know into what you can build through practical, project-focused learning.",
                  tag: "Build real skills",
                  color: "blue",
                },
                {
                  number: "02",
                  icon: GraduationCap,
                  title: "Learning & Mentorship",
                  description:
                    "Strengthen your fundamentals with structured learning and meaningful feedback.",
                  tag: "Learn with direction",
                  color: "violet",
                },
                {
                  number: "03",
                  icon: BriefcaseBusiness,
                  title: "Career Preparation",
                  description:
                    "Develop your portfolio, sharpen your problem-solving, and prepare for your next opportunity.",
                  tag: "Get career-ready",
                  color: "orange",
                },
              ].map((program) => {
                const Icon = program.icon;

                return (
                  <article
                    className={`program-card ${program.color}`}
                    key={program.number}
                  >
                    <div className="program-card-top">
                      <span className="program-icon">
                        <Icon size={23} />
                      </span>
                      <span className="program-number">{program.number}</span>
                    </div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <div className="program-card-bottom">
                      <span>{program.tag}</span>
                      <a href="#approach" aria-label={`Learn about ${program.title}`}>
                        <ArrowUpRight size={19} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="domains-section section-padding" id="domains">
          <div className="container domains-inner">
            <div className="domains-copy">
              <span className="section-kicker">FIND YOUR DIRECTION</span>
              <h2>
                Explore the fields
                <br />
                <span>shaping tomorrow.</span>
              </h2>
              <p>
                Explore technology and creative fields, discover what interests
                you, and start building skills that move you forward.
              </p>
              <a className="text-link" href="#approach">
                Find your starting point <ArrowRight size={17} />
              </a>
            </div>

            <div className="domain-list">
              {[
                "Web Development",
                "Artificial Intelligence",
                "Data Science",
                "Machine Learning",
                "Cybersecurity",
                "Cloud Computing",
                "UI/UX Design",
                "Digital Marketing",
              ].map((domain, index) => (
                <a className="domain-item" href="#programs" key={domain}>
                  <span className="domain-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{domain}</span>
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-padding" id="approach">
          <div className="container approach-panel">
            <div className="approach-orb">
              <div className="orb-ring orb-ring-one" />
              <div className="orb-ring orb-ring-two" />
              <div className="orb-center">
                <Sparkles size={34} />
              </div>
            </div>

            <div className="approach-content">
              <span className="section-kicker">THE INTERNOVA APPROACH</span>
              <h2>
                Your future isn't
                <br />
                a spectator sport.
              </h2>
              <p>
                Put your knowledge into action. Set goals, work on meaningful
                projects, learn from feedback, and keep moving forward.
              </p>
              <a className="button button-primary" href="#programs">
                Start exploring <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <CareerPathFinder />
        <SkillGapAnalyzer />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <Sparkles size={20} />
            </span>
            <span className="brand-name">
              intern<span>nova</span>
              <small>LEARN. BUILD. LAUNCH.</small>
            </span>
          </a>
          <p>Built for the next generation of doers.</p>
          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
        <div className="container footer-legal">
          <span>© {new Date().getFullYear()} InternNova redesign concept.</span>
          <span>Designed with intention.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
