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

    // 배열 범위 내에서 무한 순환하도록 인덱스 계산
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    const prevProject = projects[prevIndex];
    const nextProject = projects[nextIndex];

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
                <div className="tit">
                    <h2 className="project">{project.title}</h2>
                    {project.url ? (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="homepage"
                            title="새 창 열림"
                        >
                            Website
                        </a>
                    ) : null}
                </div>

                <ul className="info">
                    <li>
                        <div className="tit">주요 기술</div>
                        <div className="cont">{project.stack}</div>
                    </li>
                    <li>
                        <div className="tit">기여도</div>
                        <div className="cont">{project.attribution}</div>
                    </li>
                </ul>
            </div>

            <div className="cnt_bottom">
                <ul>
                    {(project.txt1 || project.txt2 || project.txt3) && (
                        <li className="about">
                            <h3>about</h3>
                            <div>
                                {project.txt1 && <span className="txt_b">{project.txt1}</span>}
                                {project.txt2 && <span className="txt">{project.txt2}</span>}
                                {project.txt3 && <span className="txt">{project.txt3}</span>}
                            </div>
                        </li>
                    )}
                    {[project.imgCnt01, project.imgCnt02, project.imgCnt03]
                        .filter(Boolean)
                        .map((imgSrc, index) => (
                            <li key={index}>
                                <img src={imgSrc} alt={project.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="cnt_nav">

                <ul>
                    <li>
                        <button onClick={() => navigate(`/work/${prevProject.id}`)}>
                            <img src={prevProject.imgSrc} alt={prevProject.title} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate(`/work/${nextProject.id}`)}>
                            <img src={nextProject.imgSrc} alt={nextProject.title} />
                        </button>
                    </li>
                </ul>
            </div>

            <div className={`cnt_controls ${showControls ? "show" : ""}`}>
                <ul>
                    <li>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a1713"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                        </Link>
                    </li>
                    <li className="scrollTop">
                        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" }) } >↑</button>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ProjectDetail;