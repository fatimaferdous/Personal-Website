import { useState } from "react";
import { Link } from "react-router-dom";
import { webProjects } from "../data/webProjects";
import "./WebUxUi.css";

function ProjectImage({
  src,
  title,
  number,
}: {
  src: string;
  title: string;
  number: number;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="web-project-image">
      {src && !imageFailed ? (
        <img
          src={src}
          alt={`Screenshot of ${title}`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span>
          PROJECT PREVIEW {String(number).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}

export default function WebUxUi() {
  return (
    <div className="web-page">

      {/* Navigation header */}
      <header className="web-header">
        <div className="web-header-left">
          <Link to="/" className="web-back">
            ← Back
          </Link>

          <span className="web-header-divider" />

          <span className="web-header-title">
            Web &amp; UX/UI
          </span>
        </div>

        <nav className="web-nav" aria-label="Portfolio categories">
          <Link
            to="/web-ux-ui"
            className="web-nav-link web-nav-active"
            aria-current="page"
          >
            Web &amp; UX/UI
          </Link>

          <Link to="/software" className="web-nav-link">
            Software
          </Link>

          <Link to="/research" className="web-nav-link">
            Research
          </Link>
        </nav>
      </header>

      <main>
        {/* Page introduction */}
        <section className="web-intro">
          <h1>
            Web &amp; UX/UI<span>.</span>
          </h1>

          <p>
            A collection of web development and interface
            design projects.
          </p>
        </section>

        {/* Project gallery */}
        <section
          className="web-projects"
          aria-label="Web and UX/UI projects"
        >
          <div className="web-project-grid">
            {webProjects.map((project) => (
              <a
                className="web-project-card"
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                aria-label={`Visit ${project.title} website (opens in a new tab)`}
              >
                <ProjectImage
                  src={project.image}
                  title={project.title}
                  number={project.id}
                />

                <div className="web-project-meta">
                  <span>
                    {String(project.id).padStart(2, "0")}
                    {" / "}
                    {project.category}
                  </span>

                  <span className="web-project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h2>{project.title}</h2>

                <p className="web-project-description">
                  {project.description}
                </p>

                <div
                  className="web-project-technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span
                      className="web-technology-tag"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="web-footer">
        FATIMA FERDOUS · PORTFOLIO
      </footer>

    </div>
  );
}