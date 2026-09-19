import { Link } from "react-router-dom";
import { softwareProjects } from "../data/softwareProjects";
import "./Software.css";

export default function Software() {
  return (
    <div className="software-page">

      {/* Navigation header */}
      <header className="software-header">
        <div className="software-header-left">
          <Link to="/" className="software-back">
            ← Back
          </Link>

          <span className="software-header-divider" />

          <span className="software-header-title">
            Software
          </span>
        </div>

        <nav
          className="software-nav"
          aria-label="Portfolio categories"
        >
          <Link
            to="/web-ux-ui"
            className="software-nav-link"
          >
            Web &amp; UX/UI
          </Link>

          <Link
            to="/software"
            className="software-nav-link software-nav-active"
            aria-current="page"
          >
            Software
          </Link>

          <Link
            to="/research"
            className="software-nav-link"
          >
            Research
          </Link>
        </nav>
      </header>

      <main>

        {/* Page introduction */}
        <section className="software-intro">
          <h1>
            Software<span>.</span>
          </h1>

          <p>
            A selection of software projects exploring
            development, problem-solving, and technical ideas.
          </p>
        </section>

        {/* Project gallery */}
        <section
          className="software-projects"
          aria-label="Software projects"
        >
          <div className="software-projects-heading">
            <span>SELECTED PROJECTS</span>

            <span>
              {String(softwareProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="software-project-grid">
            {softwareProjects.map((project) => (
              <a
                className="software-project-card"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                aria-label={`View ${project.title} GitHub repository (opens in a new tab)`}
              >
                <div className="software-card-top">

                  <div className="software-project-meta">
                    <span>
                      {String(project.id).padStart(2, "0")}
                      {" / SOFTWARE"}
                    </span>

                    <svg
                      className="software-github-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18A11.1 11.1 0 0 1 12 6.61c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.68 5.4-5.24 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </div>

                  <h2>{project.title}</h2>

                  <p className="software-project-description">
                    {project.description}
                  </p>
                </div>

                <div className="software-card-bottom">

                  <div className="software-technologies">
                    {project.technologies.map((technology) => (
                      <span
                        className="software-technology-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="software-repository-link">
                    <span>VIEW REPOSITORY</span>

                    <span
                      className="software-repository-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer className="software-footer">
        FATIMA FERDOUS · PORTFOLIO
      </footer>

    </div>
  );
}