import { useCallback, useRef } from "react";

function ProjectList({ projects, onOpenModal }) {
const requestRef = useRef(null);

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
<ul className="project_list">
    {projects
    .slice()
    .sort((a, b) => b.id - a.id)
    .map((project) => (
        <li key={project.id}>
        <button
            type="button"
            className="hover_link"
            onClick={() => onOpenModal(project)}
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
);
}

export default ProjectList;
