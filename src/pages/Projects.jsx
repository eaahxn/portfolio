import { useState, useCallback, useRef, useEffect } from "react";
import projects from "../data/projectsData";
import "../css/main.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const modalRef = useRef(null);
  const lastFocusedElementRef = useRef(null);
  const requestRef = useRef(null);

  /** ---------- Modal Handlers ---------- */
  const handleOpenModal = (project) => {
    lastFocusedElementRef.current = document.activeElement;
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  };

  /** ---------- Effects ---------- */
  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // ESC + Focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;

      if (e.key === "Escape") {
        handleCloseModal();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const focusArray = Array.from(focusableElements);
        if (focusArray.length === 0) return;

        const firstEl = focusArray[0];
        const lastEl = focusArray[focusArray.length - 1];

        if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        } else if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  // Auto focus when modal opens
  useEffect(() => {
    if (selectedProject && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedProject]);

  /** ---------- Hover Effect ---------- */
  const handleMouseMove = useCallback((e) => {
    const hover = e.currentTarget.querySelector(".hover");
    if (!hover) return;

    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;

    const move = 30;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    requestRef.current = requestAnimationFrame(() => {
      hover.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const hover = e.currentTarget.querySelector(".hover");
    if (hover) hover.style.transform = "";

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    }
  }, []);

  return (
    <section className="content">
      <ul>
        {projects
          .slice()
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <li key={project.id}>
              <button
                type="button"
                className="hover_link"
                onClick={() => handleOpenModal(project)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src={project.imgSrc} alt={project.title} className="hover" />
              </button>
              <div className="title">
                {project.title}
                <span className="category">웹사이트</span>
              </div>
            </li>
          ))}
      </ul>

      {selectedProject && (
        <div
          className="modal_overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
          tabIndex="-1"
        >
          <div className="modal_content">
            <button className="modal_close" onClick={handleCloseModal} aria-label="닫기">
              ✕
            </button>
            <div className="modal-over">
              <div className="modal-thumbnail">
                <img src={selectedProject.imgSrc} alt={selectedProject.title} />
              </div>
              <div className="modal-txt">
                <h2 id="modal-title">{selectedProject.title}</h2>
                {selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="새 창 열림"
                    className="hover_link"
                  >
                    <span className="hover">홈페이지</span>
                  </a>
                ) : (
                  <span className="no_url"></span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
