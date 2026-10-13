
import React, { useState } from "react";
import "./SkillGapAnalyzer.css";

const careerRoles = {
  "MERN Stack Developer": {
    requiredSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git & GitHub",
      "REST APIs",
      "Data Structures"
    ],
    projects: [
      "Build a full-stack task management application",
      "Create a user authentication system",
      "Develop a REST API with MongoDB"
    ]
  },

  "Frontend Developer": {
    requiredSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "Git & GitHub",
      "REST APIs",
      "TypeScript",
      "Testing",
      "Web Accessibility"
    ],
    projects: [
      "Build a responsive portfolio website",
      "Create a weather application using an API",
      "Develop an accessible product dashboard"
    ]
  },

  "Backend Developer": {
    requiredSkills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "SQL",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Authentication",
      "Data Structures",
      "Testing"
    ],
    projects: [
      "Build a secure authentication API",
      "Create a database-backed inventory system",
      "Develop a REST API with validation and testing"
    ]
  },

  "Java Developer": {
    requiredSkills: [
      "Java",
      "OOP",
      "Data Structures",
      "SQL",
      "Git & GitHub",
      "REST APIs",
      "Spring Boot",
      "Exception Handling",
      "Testing",
      "Database Design"
    ],
    projects: [
      "Build a Java-based library management system",
      "Create a Spring Boot REST API",
      "Develop a database-backed student management app"
    ]
  },

  "Data Analyst": {
    requiredSkills: [
      "Python",
      "SQL",
      "Excel",
      "Statistics",
      "Data Visualization",
      "Power BI",
      "Data Cleaning",
      "Problem Solving",
      "Git & GitHub",
      "Communication"
    ],
    projects: [
      "Analyze a real-world sales dataset",
      "Create an interactive business dashboard",
      "Build a customer trends analysis report"
    ]
  }
};

const learningResources = {
  HTML: "Learn semantic HTML and accessible page structure.",
  CSS: "Practice Flexbox, Grid, responsive layouts, and animations.",
  JavaScript: "Study ES6+, promises, async/await, and DOM concepts.",
  React: "Learn components, hooks, props, state, and React Router.",
  "Node.js": "Practice Node.js modules, asynchronous code, and server development.",
  "Express.js": "Learn routing, middleware, validation, and error handling.",
  MongoDB: "Practice CRUD operations, schemas, and database relationships.",
  "Git & GitHub": "Learn branching, commits, pull requests, and collaboration.",
  "REST APIs": "Practice HTTP methods, status codes, and API integration.",
  "Data Structures": "Practice arrays, strings, linked lists, trees, and problem solving.",
  "Responsive Design": "Build mobile-first layouts with CSS media queries.",
  TypeScript: "Learn types, interfaces, generics, and type-safe React.",
  Testing: "Practice unit tests and integration tests.",
  "Web Accessibility": "Learn keyboard navigation, semantic elements, and ARIA.",
  SQL: "Study joins, grouping, subqueries, and database design.",
  Authentication: "Understand sessions, JWT, password hashing, and authorization.",
  Java: "Learn Java syntax, collections, exception handling, and OOP.",
  OOP: "Practice abstraction, encapsulation, inheritance, and polymorphism.",
  "Spring Boot": "Build REST APIs using Spring Boot.",
  "Exception Handling": "Practice handling errors and designing useful exceptions.",
  "Database Design": "Learn normalization, keys, relationships, and indexing.",
  Excel: "Practice formulas, pivot tables, and data cleaning.",
  Statistics: "Learn descriptive statistics, distributions, and hypothesis testing.",
  "Data Visualization": "Practice communicating insights through charts.",
  "Power BI": "Build reports, dashboards, and data models.",
  "Data Cleaning": "Learn to handle missing, duplicate, and inconsistent data.",
  "Problem Solving": "Practice breaking problems into smaller steps.",
  Communication: "Practice explaining insights clearly and concisely."
};

function SkillGapAnalyzer() {
  const [selectedRole, setSelectedRole] = useState(
    "MERN Stack Developer"
  );

  const [selectedSkills, setSelectedSkills] = useState([]);

  const [analysis, setAnalysis] = useState(null);

  const toggleSkill = (skill) => {
    setSelectedSkills((previousSkills) =>
      previousSkills.includes(skill)
        ? previousSkills.filter((item) => item !== skill)
        : [...previousSkills, skill]
    );

    setAnalysis(null);
  };

  const analyzeSkills = (event) => {
    event.preventDefault();

    const requiredSkills = careerRoles[selectedRole].requiredSkills;

    const matchedSkills = requiredSkills.filter((skill) =>
      selectedSkills.includes(skill)
    );

    const missingSkills = requiredSkills.filter(
      (skill) => !selectedSkills.includes(skill)
    );

    const readiness = Math.round(
      (matchedSkills.length / requiredSkills.length) * 100
    );

    setAnalysis({
      matchedSkills,
      missingSkills,
      readiness
    });
  };

  const roleSkills = careerRoles[selectedRole].requiredSkills;

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setAnalysis(null);
  };

  return (
    <section className="skill-gap-section" id="skill-gap-analyzer">
      <div className="skill-gap-container">
        <div className="skill-gap-heading">
          <span className="skill-gap-eyebrow">
            YOUR CAREER, YOUR ROADMAP
          </span>

          <h2>AI Career Gap Analyzer</h2>

          <p>
            Discover the skills you already have, identify what you
            need to learn, and take the next step toward your dream job.
          </p>
        </div>

        <form className="skill-gap-form" onSubmit={analyzeSkills}>
          <div className="skill-gap-role">
            <label htmlFor="career-role">
              Select your target career
            </label>

            <select
              id="career-role"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              {Object.keys(careerRoles).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="skill-gap-skill-heading">
            <div>
              <h3>Which skills do you already know?</h3>
              <p>Select every skill you can confidently demonstrate.</p>
            </div>

            <span className="skill-gap-count">
              {selectedSkills.filter((skill) =>
                roleSkills.includes(skill)
              ).length}{" "}
              / {roleSkills.length} selected
            </span>
          </div>

          <div className="skill-gap-skills">
            {roleSkills.map((skill) => (
              <label
                key={skill}
                className={`skill-gap-chip ${
                  selectedSkills.includes(skill) ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => toggleSkill(skill)}
                />

                <span>
                  {selectedSkills.includes(skill) ? "✓ " : "+ "}
                  {skill}
                </span>
              </label>
            ))}
          </div>

          <button className="skill-gap-button" type="submit">
            Analyze My Skills →
          </button>
        </form>

        {analysis && (
          <div className="skill-gap-results" aria-live="polite">
            <div className="skill-gap-results-heading">
              <span className="skill-gap-eyebrow">
                YOUR PERSONALIZED REPORT
              </span>

              <h3>Your Career Readiness</h3>

              <p>
                Target role: <strong>{selectedRole}</strong>
              </p>
            </div>

            <div className="skill-gap-score-card">
              <div
                className="skill-gap-score-circle"
                style={{
                  "--readiness": `${analysis.readiness}%`
                }}
                role="img"
                aria-label={`${analysis.readiness}% skill match`}
              >
                <div>
                  <strong>{analysis.readiness}%</strong>
                  <span>Skill match</span>
                </div>
              </div>

              <div className="skill-gap-score-details">
                <h4>
                  {analysis.readiness === 100
                    ? "You match all listed skills!"
                    : analysis.readiness >= 70
                    ? "You're building a strong foundation!"
                    : analysis.readiness >= 40
                    ? "You're making progress!"
                    : "Let's build your foundation!"}
                </h4>

                <p>
                  You matched {analysis.matchedSkills.length} out of{" "}
                  {roleSkills.length} listed skills. Learn the missing
                  skills to strengthen your preparation.
                </p>
              </div>
            </div>

            <div className="skill-gap-result-grid">
              <div className="skill-gap-result-card">
                <h4>
                  ✅ Skills You Have ({analysis.matchedSkills.length})
                </h4>

                {analysis.matchedSkills.length > 0 ? (
                  <ul>
                    {analysis.matchedSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Start selecting skills you already know.</p>
                )}
              </div>

              <div className="skill-gap-result-card missing">
                <h4>
                  📚 Skills to Develop ({analysis.missingSkills.length})
                </h4>

                {analysis.missingSkills.length > 0 ? (
                  <ul>
                    {analysis.missingSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    You have matched all the skills in this checklist.
                    Keep practicing and building projects!
                  </p>
                )}
              </div>
            </div>

            <div className="skill-gap-roadmap">
              <h3>Your Recommended Learning Roadmap</h3>

              {analysis.missingSkills.length > 0 ? (
                <ol>
                  {analysis.missingSkills.slice(0, 5).map((skill) => (
                    <li key={skill}>
                      <strong>{skill}</strong>
                      <p>
                        {learningResources[skill] ||
                          `Practice ${skill} and apply it in a project.`}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p>
                  Build an advanced project, practice interview questions,
                  and review your knowledge regularly.
                </p>
              )}
            </div>

            <div className="skill-gap-projects">
              <h3>Recommended Projects</h3>

              <ul>
                {careerRoles[selectedRole].projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>

            <p className="skill-gap-disclaimer">
              Note: This score represents your self-reported skill match,
              not a guaranteed measure of job readiness or employability.
            </p>

            <button
              type="button"
              className="skill-gap-reset"
              onClick={() => {
                setSelectedSkills([]);
                setAnalysis(null);
              }}
            >
              Start a New Analysis
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillGapAnalyzer;
