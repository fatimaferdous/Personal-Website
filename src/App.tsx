import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  aboutParagraphs,
  programmingLanguages,
  technicalSkills,
} from "./data/about";


function App() {
  const fullName = "Fatima Ferdous.";
  const [typedName, setTypedName] = useState("");
  const [openExperience, setOpenExperience] = useState<number | null>(null);

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));

      if (index >= fullName.length) {
        window.clearInterval(interval);
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  const isTyping = typedName.length < fullName.length;
  return (
    <div className="website">

      <header className="navbar">
        <nav>
          <a href="#/" onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Projects
          </a>

          <a href="#/" onClick={(e) => {
            e.preventDefault();
            document.getElementById("experience")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Experience
          </a>

          <a href="#/" onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            About
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">

          <h1 className="name">
            <span className="typed-name">
              {typedName.replace(/\.$/, "")}
              {typedName.endsWith(".") && (
                <span className="gold-dot">.</span>
              )}
              {isTyping && (
                <span className="typing-cursor" aria-hidden="true" />
              )}
            </span>
          </h1>

          <div className="hero-bottom">

            <div className="laptop-container">
              <img
                src={`${import.meta.env.BASE_URL}laptop.png`}
                alt="Laptop illustration"
                className="hero-laptop"
              />
            </div>

            <div className="contact">
              <div className="contact-group">
                <p className="contact-label">EMAIL</p>

                <a href="mailto:fatima.ferdous15@gmail.com">
                  fatima.ferdous15@gmail.com
                </a>
              </div>

              <div className="contact-group">
                <p className="contact-label">LOCATION</p>
                <p>Ottawa, Ontario, Canada</p>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/fatimaferdous"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>

                <a
                  href="https://ca.linkedin.com/in/fatima-ferdous-3aa0582b1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
            </div>

          </div>

        </section>

        <section id="projects" className="explore-work">
          <p className="explore-heading">EXPLORE WORK</p>

          <div className="work-categories">
            <Link to="/web-ux-ui" className="work-category">
              <span className="work-number">01</span>
              <span className="work-title">Web &amp; UX/UI</span>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>

            <Link to="/software" className="work-category">
              <span className="work-number">02</span>
              <span className="work-title">Software</span>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>

            <Link to="/research" className="work-category">
              <span className="work-number">03</span>
              <span className="work-title">Research</span>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <h2 className="experience-heading">EXPERIENCE</h2>
          <div className="experience-divider" />

          <div className="snake-timeline">

            {[
              {
                date: "MAY 2026 — PRESENT",
                role: "UX/UI Web Developer",
                company: "Freelance",
                description:
                  "Helped multiple small businesses develop their websites.",
              },
              {
                date: "JANUARY 2026 — APRIL 2026",
                role: "Database Management Teaching Assistant",
                company: "Carleton University",
                description:
                  "Held project consultations and office hours, providing support with SQL.",
              },
              {
                date: "SEPTEMBER 2025 — NOVEMBER 2025",
                role: "Project Manager",
                company: "Prototyp3",
                description:
                  "Coordinated a development team of five, managing over 20 tasks and dependencies to deliver a frontend web project on time. Tracked progress and blockers, and led UI/UX reviews to ensure feature completion and usability before deployment.",
              },
              {
                date: "MAY 2024 — AUGUST 2025",
                role: "Embedded Systems Engineering Intern",
                company: "Paradigm Electronics Inc.",
                description:
                  "Automated UI tests using Selenium, improving speaker interface reliability and reducing manual testing by 30%. Performed system analysis using Wireshark to improve test coverage and support product optimization. Used Arduinos for hardware automation and delivered presentations to multiple audiences.",
              },
              {
                date: "JANUARY 2024 — APRIL 2024",
                role: "Intro to Software Engineering Teaching Assistant",
                company: "Carleton University",
                description:
                  "Helped students debug C++ assignments, graded coursework, and held office hours and tutorials.",
              },
              {
                date: "APRIL 2023 — JANUARY 2024",
                role: "Cloud Engineering Intern",
                company: "Nokia",
                description:
                  "Developed AWS cloud infrastructure using EC2 and infrastructure as code (IaC) to support scalable, multi-environment deployments. Maintained SQL databases and Splunk logs for reporting, and documented processes to improve reliability.",
              },
              {
                date: "JANUARY 2023 — APRIL 2023",
                role: "Intro to CS II Teaching Assistant",
                company: "Carleton University",
                description:
                  "Helped students debug Java assignments, graded coursework, and held office hours.",
              },
            ].map((job, index) => (
              <article
                className={`snake-item ${index % 2 === 0 ? "snake-right" : "snake-left"}`}
                key={job.role}
              >
                <div className="snake-track" aria-hidden="true" />

                <button
                  type="button"
                  className={`snake-dot ${openExperience === index ? "snake-dot-active" : ""}`}
                  aria-label={`${openExperience === index ? "Hide" : "Show"} details for ${job.role}`}
                  aria-expanded={openExperience === index}
                  aria-controls={`experience-details-${index}`}
                  onClick={() =>
                    setOpenExperience(openExperience === index ? null : index)
                  }
                />

                <div className="snake-content">
                  <div className="snake-job-info">
                    <p className="snake-date">{job.date}</p>
                    <h3 className="snake-role">{job.role}</h3>
                    <p className="snake-company">{job.company}</p>
                  </div>

                  <div
                    id={`experience-details-${index}`}
                    className="snake-details"
                    hidden={openExperience !== index}
                  >
                    <p>{job.description}</p>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </section>

        <section id="about" className="about-section">

          <h2 className="about-heading">ABOUT</h2>
          <div className="about-divider" />

          {/* Introduction */}

          <div className="about-intro">

            <div className="about-intro-left">
              <h3 className="about-title">
                A little about me<span>.</span>
              </h3>

              <p className="about-subtitle">
                DEVELOPER · DESIGNER · PROBLEM SOLVER
              </p>
            </div>

            <div className="about-bio">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

          </div>

          {/* Skills */}

          <div className="about-skills">

            <h3 className="skills-heading">SKILLS &amp; TECHNOLOGIES</h3>

            <div className="skills-group">
              <h4 className="skills-category">Languages</h4>

              <div className="skills-tags">
                {programmingLanguages.map((language) => (
                  <span className="skill-tag" key={language}>
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-group">
              <h4 className="skills-category">Technical skills</h4>

              <div className="skills-tags">
                {technicalSkills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;