import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projectsData";

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [showControls, setShowControls] = useState(false);

    const currentIndex = projects.findIndex(
        (p) => p.id === Number(id)
    );

    const project = projects[currentIndex];
    const prevProject = projects[currentIndex - 1];
    const nextProject = projects[currentIndex + 1];

    if (!project) return null;

    // 페이지 이동 시 항상 상단으로
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // 스크롤 시 컨트롤 노출
    useEffect(() => {
        const handleScroll = () => {
        setShowControls(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="project_detail">
            <div className="cnt_top">
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
                    <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homepage"
                    >
                    홈페이지
                    </a>
                ) : null}
                </div>
            </div>

            <div className="cnt_bottom">
                <ul>
                {project.imgCnt01 && (
                    <li>
                    <img src={project.imgCnt01} alt={project.title} />
                    </li>
                )}
                {project.imgCnt02 && (
                    <li>
                    <img src={project.imgCnt02} alt={project.title} />
                    </li>
                )}
                {project.imgCnt03 && (
                    <li>
                    <img src={project.imgCnt03} alt={project.title} />
                    </li>
                )}
                </ul>
            </div>

            <nav className={`cnt_controls ${showControls ? "show" : ""}`}>
                <ul>
                    <li>
                        {prevProject && (
                        <button onClick={() => navigate(`/work/${prevProject.id}`)} className="tooltip" data-tooltip={`${prevProject.title}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a1713"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                        </button>
                        )}

                        <Link to="/" className="tooltip" data-tooltip="목록">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a1713"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                        </Link>

                        {nextProject && (
                        <button onClick={() => navigate(`/work/${nextProject.id}`)} className="tooltip" data-tooltip={`${nextProject.title}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a1713"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        </button>
                        )}
                    </li>
                    <li className="scrollTop">
                        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" }) } >↑</button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default ProjectDetail;
