import "../core/style/subproject.css";

import { subprojectString, projectString, footerString } from "../core/constant/string";

import { Heart, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Subproject() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();

    const filteredProjects = selectedCategory === "All"
        ? projectString.projects
        : projectString.projects.filter((project) =>
            project.category.includes(selectedCategory)
        );

    const categories = [
        "All",
        ...Array.from(
            new Set(
                projectString.projects.flatMap(
                    (project) => project.category
                )
            )
        )
            .filter((category) => category !== "others")
            .sort((a, b) => a.localeCompare(b)),
        ...(projectString.projects.some((project) =>
            project.category.includes("others")
        )) ? ["others"] : []
    ];

    return (
        <main className="subproject">
            <header className="subpro-header">
                <button
                    className="view-more"
                    onClick={() => navigate("/")}
                >
                    <MoveLeft size={18} /> {subprojectString.back}
                </button>

                <h1>{subprojectString.title} <FaHeart size={24} color="#F43F8C" /></h1>
            </header>

            <section>
                <div className="tag">
                    {
                        categories.map((item) => (
                            <button
                                key={item}
                                className={`tag-category ${selectedCategory === item ? "active" : ""
                                    }`}
                                onClick={() => setSelectedCategory(item)}
                            >
                                {item.charAt(0).toLocaleUpperCase() + item.slice(1)}
                            </button>
                        ))
                    }
                </div>

                {
                    filteredProjects.map((item) => {
                        return (
                            <div className="project-card">
                                <div className="project-left">
                                    <img
                                        src={item.image}
                                        alt="screenshot"
                                        className="subpro-screenshot"
                                    />
                                </div>
                                <div className="project-right">
                                    <div className="project-div">
                                        <h3>{item.title}</h3>
                                        <div className="div-right">
                                            <span className={
                                                `company-tag ${item.company ? "company-filled" : "company-empty"}`
                                            }
                                            >
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
            </section>

            <footer>
                <p>{footerString.rights} <Heart size={14} color="#F43F8C" /></p>
            </footer>
        </main>
    );
}