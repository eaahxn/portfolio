import { useEffect, useRef, useState } from "react";

function ProjectModal({ project, onClose }) {
const modalRef = useRef(null);
const lastFocusedRef = useRef(null);

// Body scroll lock
useEffect(() => {
lastFocusedRef.current = document.activeElement;
document.body.style.overflow = "hidden";
return () => {
    document.body.style.overflow = "";
    lastFocusedRef.current?.focus();
};
}, []);

// ESC + Focus trap
useEffect(() => {
const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();

    if (e.key === "Tab" && modalRef.current) {
    const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const focusArray = Array.from(focusable);
    if (!focusArray.length) return;

    const first = focusArray[0];
    const last = focusArray[focusArray.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    }
    }
};

window.addEventListener("keydown", handleKeyDown);
return () => window.removeEventListener("keydown", handleKeyDown);
}, [onClose]);

// Auto focus modal
useEffect(() => {
modalRef.current?.focus();
}, []);

return (
<div
    className="modal_overlay"
    role="dialog"
    aria-modal="true"
    ref={modalRef}
    tabIndex="-1"
    onClick={onClose}
>
    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
    <button className="modal_close" onClick={onClose} aria-label="닫기">
        ✕
    </button>

    <div className="modal_top">
        <div className="thumb">
        <img src={project.imgSrc} alt={project.title} />
        </div>
        <div className="box">
        <h2 className="project">{project.title}</h2>
        <ul className="info">
            <li>
            <div className="tit">주요 기술.</div>
            <div className="cont">
                <b>{project.stack}</b>
            </div>
            </li>
            <li>
            <div className="tit">기여도.</div>
            <div className="cont">{project.attribution}</div>
            </li>
        </ul>
        {project.url ? (
            <a href={project.url} target="_blank" className="homepage">
            홈페이지
            </a>
        ) : (
            <span className="no_url"></span>
        )}
        </div>
    </div>

    <div className="modal_bottom">
        <ul className="cnt">
        {project.imgCnt01 && <li><img src={project.imgCnt01} alt={project.title} /></li>}
        {project.imgCnt02 && <li><img src={project.imgCnt02} alt={project.title} /></li>}
        {project.imgCnt03 && <li><img src={project.imgCnt03} alt={project.title} /></li>}
        </ul>
    </div>
    </div>
</div>
);
}

export default ProjectModal;
