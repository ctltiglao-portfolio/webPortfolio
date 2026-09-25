import "../core/style/project.css";

import { projectString } from "../core/constant/string";

import { MoveRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        id: 12,
        title: "Travel Time and Delay Survey",
        category: ["mobile", "web"],
        image: "../../public/image.png",
        description: "Built a system for recording, processing, and analyzing travel time and delay to evaluate N1 and Nautical Highway.",
        company: "Department of Public Works and Highways/DJMV Management Consultancy, Inc.",
        start: "Mar 2025",
        end: "Jun 2026",
        tags: [
            "Android Studio",
            "Java",
            "ASP.NET",
            "MVC Architecture",
            "MariaDB",
            "GitHub"
        ]
    },
    {
        id: 13,
        title: "Metta City Desktop Application",
        category: ["desktop"],
        image: "/public/image.png",
        description: "Built a desktop application to count guest interaction inside Metta City.",
        company: "VINTATECH | Globaltronics, Inc.",
        start: "Jan 2026",
        end: "Mar 2026",
        tags: [
            "Python",
            "Tkinter",
            "Node.js",
            "RESTful API",
            "Express.js",
            "MariaDB"
        ]
    },
    {
        id: 14,
        title: "VINTA Ferry Mobile Application",
        category: ["mobile"],
        image: "/public/image.png",
        description: "Rewriting ferry mobile application for easier maintenance.",
        company: "VINTATECH",
        start: "Mar 2026",
        end: "Apr 2026",
        tags: [
            "Flutter",
            "Dart",
            "MVC Architecture"
        ]
    },
    {
        id: 15,
        title: "ParkGo Guest Mobile Application",
        category: ["mobile"],
        image: "/public/image.png",
        description: "Rewriting parking management mobile application for easier maintenance.",
        company: "STRIDE Consulting, Inc.",
        start: "Apr 2026",
        end: "May 2026",
        tags: [
            "Flutter",
            "Dart",
            "MVC Architecture"
        ]
    },
    {
        id: 16,
        title: "Metta City Mobile Application",
        category: ["mobile"],
        image: "/public/image.png",
        description: "Built a cross-platform mobile application for VIP guest of Metta City.",
        company: "VINTATECH | Globaltronics, Inc.",
        start: "Jun 2026",
        end: "Aug 2026",
        tags: [
            "Flutter",
            "Dart",
            "MVC Architecture",
            "RESTful API",
            "Node.js",
            "Express.js",
            "MariaDB"
        ]
    }
]

export default function Project() {
    const navigate = useNavigate();

    return (
        <section id="projects" className="project">
            <div className="project-body">
                <h1>{projectString.subtitle} <FaHeart size={20} color="#F43F8C" /></h1>

                {
                    projects.map((item) => {
                        return (
                            <div className="project-card">
                                <div className="project-left">
                                    <img
                                        src={item.image}
                                        alt="screenshot"
                                        className="screenshot"
                                    />
                                </div>
                                <div className="project-right">
                                    <div className="project-div">
                                        <h3>{item.title}</h3>
                                        <div className="div-right">
                                            <span className={
                                                `company-tag ${item.company ? "company-filled" : "company-empty"
                                                }`
                                            }>
                                                {
                                                    item.company ? projectString.private : projectString.public
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div className="company-div">
                                        <div className="div-left">
                                            <h5 className="company">{item.company}</h5>
                                        </div>
                                        <div className="div-right">
                                            <h5 className="date">{item.start} - {item.end}</h5>
                                        </div>
                                    </div>

                                    <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>

                                    <div className="tag">
                                        {
                                            item.tags.map((tag) => (
                                                <div className="tag-card">{tag}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <button
                className="view-more"
                onClick={() => navigate("/subproject")}
            >
                <MoveRight size={18} /> {projectString.viewMore}
            </button>
        </section>
    );
}