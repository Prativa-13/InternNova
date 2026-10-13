
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Code2,
  BrainCircuit,
  ChartNoAxesCombined,
  ShieldCheck,
  Cloud,
  Palette,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import "./CareerPathFinder.css";

const questions = [
  {
    title: "What do you enjoy most?",
    subtitle: "Choose the kind of problem you'd love to solve.",
    options: [
      { label: "Building websites and apps", value: "web", icon: Code2 },
      { label: "Exploring AI and intelligent tools", value: "ai", icon: BrainCircuit },
      { label: "Finding patterns in data", value: "data", icon: ChartNoAxesCombined },
      { label: "Protecting systems and information", value: "security", icon: ShieldCheck },
      { label: "Working with cloud and infrastructure", value: "cloud", icon: Cloud },
      { label: "Designing beautiful user experiences", value: "design", icon: Palette },
    ],
  },
  {
    title: "How do you like to work?",
    subtitle: "Pick the approach that sounds most exciting.",
    options: [
      { label: "Building things with code", value: "build" },
      { label: "Experimenting and researching", value: "research" },
      { label: "Analyzing and solving puzzles", value: "analyze" },
      { label: "Designing and creating", value: "create" },
    ],
  },
  {
    title: "What's your current experience?",
    subtitle: "We'll tailor the suggested starting point to you.",
    options: [
      { label: "I'm a complete beginner", value: "beginner" },
      { label: "I know the basics", value: "basics" },
      { label: "I've built a few projects", value: "projects" },
    ],
  },
];

const careerPaths = {
  web: {
    name: "Web Development",
    icon: Code2,
    color: "violet",
    description: "Turn ideas into responsive websites and useful web applications.",
    skills: ["HTML & CSS", "JavaScript", "React", "APIs & Git"],
    projects: ["Personal portfolio", "Interactive task manager", "Full-stack web app"],
  },
  ai: {
    name: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "blue",
    description: "Explore intelligent applications, machine learning, and AI-powered tools.",
    skills: ["Python", "Data handling", "ML fundamentals", "AI APIs"],
    projects: ["AI study assistant", "Text classification tool", "Smart recommendation demo"],
  },
  data: {
    name: "Data Science & Analytics",
    icon: ChartNoAxesCombined,
    color: "green",
    description: "Use data to uncover patterns, explain trends, and support decisions.",
    skills: ["Python", "SQL", "Data visualization", "Statistics basics"],
    projects: ["Dataset exploration", "Interactive analytics dashboard", "Trend analysis report"],
  },
  security: {
    name: "Cybersecurity",
    icon: ShieldCheck,
    color: "orange",
    description: "Learn how systems are secured and how common vulnerabilities are understood.",
    skills: ["Networking basics", "Linux", "Security fundamentals", "Safe lab practice"],
    projects: ["Security awareness guide", "Log analysis demo", "Local lab security checklist"],
  },
  cloud: {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "blue",
    description: "Understand how applications are deployed, monitored, and maintained.",
    skills: ["Linux", "Git", "Cloud fundamentals", "CI/CD basics"],
    projects: ["Deploy a static site", "Automated build workflow", "Application monitoring demo"],
  },
  design: {
    name: "UI/UX Design",
    icon: Palette,
    color: "pink",
    description: "Create clear, accessible interfaces around real user needs.",
    skills: ["Design principles", "Wireframing", "Prototyping", "Usability testing"],
    projects: ["Mobile app wireframes", "Website redesign", "Clickable product prototype"],
  },
};

function getRecommendation(answers) {
  const interest = answers[0];
  const workStyle = answers[1];

  if (interest) return careerPaths[interest];

  if (workStyle === "research") return careerPaths.ai;
  if (workStyle === "analyze") return careerPaths.data;
  if (workStyle === "create") return careerPaths.design;

  return careerPaths.web;
}

export default function CareerPathFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[step];
  const selectedAnswer = answers[step];
  const recommendation = getRecommendation(answers);
  const RecommendedIcon = recommendation.icon;

  function chooseAnswer(value) {
    const updatedAnswers = [...answers];
    updatedAnswers[step] = value;
    setAnswers(updatedAnswers);
  }

  function goNext() {
    if (!selectedAnswer) return;

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  }

  function restartQuiz() {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  }

  return (
    <section className="career-section" id="career-finder">
      <div className="career-container">
        <div className="career-heading">
          <span className="career-eyebrow">
            <Sparkles size={16} /> YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h2>Not sure where to start?</h2>
          <p>
            Discover a career direction that matches your interests.
            Answer three quick questions to get a suggested learning path.
          </p>
        </div>

        <div className="career-card">
          {!showResult ? (
            <>
              <div className="career-progress">
                <span>QUESTION {step + 1} OF {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>

              <div className="career-progress-track">
                <div
                  className="career-progress-fill"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="career-question">
                <h3>{currentQuestion.title}</h3>
                <p>{currentQuestion.subtitle}</p>
              </div>

              <div className="career-options">
                {currentQuestion.options.map((option) => {
                  const OptionIcon = option.icon;
                  const isSelected = selectedAnswer === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`career-option ${isSelected ? "selected" : ""}`}
                      onClick={() => chooseAnswer(option.value)}
                      aria-pressed={isSelected}
                    >
                      {OptionIcon && <OptionIcon size={20} />}
                      <span>{option.label}</span>
                      {isSelected && <CheckCircle2 className="career-check" size={19} />}
                    </button>
                  );
                })}
              </div>

              <div className="career-actions">
                <button
                  type="button"
                  className="career-back"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 0}
                >
                  <ArrowLeft size={17} /> Back
                </button>

                <button
                  type="button"
                  className="career-next"
                  onClick={goNext}
                  disabled={!selectedAnswer}
                >
                  {step === questions.length - 1 ? "Find my path" : "Continue"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : (
            <div className="career-result">
              <div className={`career-result-icon ${recommendation.color}`}>
                <RecommendedIcon size={30} />
              </div>

              <span className="career-eyebrow">
                <Sparkles size={15} /> YOUR SUGGESTED DIRECTION
              </span>
              <h3>{recommendation.name}</h3>
              <p className="career-result-description">
                {recommendation.description}
              </p>

              <div className="career-result-block">
                <h4>Your learning roadmap</h4>
                {recommendation.skills.map((skill, index) => (
                  <div className="career-roadmap-item" key={skill}>
                    <span className="career-roadmap-number">{index + 1}</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="career-result-block">
                <h4>Build your portfolio with</h4>
                <ul className="career-project-list">
                  {recommendation.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>

              {answers[2] === "beginner" && (
                <p className="career-beginner-note">
                  Start with the fundamentals and build one small project before
                  moving to the next skill.
                </p>
              )}

              <button
                type="button"
                className="career-next career-restart"
                onClick={restartQuiz}
              >
                <RotateCcw size={17} /> Retake the quiz
              </button>

              <p className="career-disclaimer">
                This is a learning suggestion based on your answers, not a guarantee
                of internship or employment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
