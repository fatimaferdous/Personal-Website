import { Link } from "react-router-dom";
import { researchProjects } from "../data/researchProjects";
import "./Research.css";

export default function Research() {
  return (
    <div className="research-page">

      {/* Navigation header */}
      <header className="research-header">
        <div className="research-header-left">
          <Link to="/" className="research-back">
            ← Back
          </Link>

          <span className="research-header-divider" />

          <span className="research-header-title">
            Research
          </span>
        </div>

        <nav
          className="research-nav"
          aria-label="Portfolio categories"
        >
          <Link to="/web-ux-ui" className="research-nav-link">
            Web &amp; UX/UI
          </Link>

          <Link to="/software" className="research-nav-link">
            Software
          </Link>

          <Link
            to="/research"
            className="research-nav-link research-nav-active"
            aria-current="page"
          >
            Research
          </Link>
        </nav>
      </header>

      <main>

        {/* Page introduction */}
        <section className="research-intro">
          <h1>
            Research<span>.</span>
          </h1>

          <p>
            A selection of research projects, reports,
            and technical explorations.
          </p>
        </section>

        {/* Research documents */}
        <section
          className="research-projects"
          aria-label="Research documents"
        >
          <div className="research-projects-heading">
            <span>SELECTED RESEARCH</span>

            <span>
              {String(researchProjects.length).padStart(2, "0")}
              {" DOCUMENTS"}
            </span>
          </div>

          <div className="research-project-grid">
            {researchProjects.map((project) => {
              const previewUrl =
                `https://drive.google.com/file/d/${project.driveFileId}/preview`;

              const documentUrl =
                `https://drive.google.com/file/d/${project.driveFileId}/view`;

              return (
                <article
                  className="research-project-card"
                  key={project.id}
                >
                  <div className="research-project-meta">
                    <span>
                      {String(project.id).padStart(2, "0")}
                      {" / RESEARCH"}
                    </span>

                    <svg
                      className="research-document-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M8 13h8" />
                      <path d="M8 17h8" />
                    </svg>
                  </div>

                  {/* Live Google Drive preview */}
                  <div className="research-preview">
                    <iframe
                      src={previewUrl}
                      title={`Preview of ${project.title}`}
                      loading="lazy"
                      allow="fullscreen"
                    />
                  </div>

                  <div className="research-card-content">
                    <h2>{project.title}</h2>

                    <p className="research-description">
                      {project.description}
                    </p>

                    <div className="research-tags">
                      {project.tags.map((tag) => (
                        <span className="research-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-document-link"
                  >
                    <span>READ DOCUMENT</span>

                    <span
                      className="research-document-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

      </main>

      <footer className="research-footer">
        FATIMA FERDOUS · PORTFOLIO
      </footer>

    </div>
  );
}