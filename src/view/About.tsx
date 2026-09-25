import "../core/style/about.css";

import profile from "../assets/profile (2).png";
import { aboutString } from "../core/constant/string";

import { ChartNoAxesCombined, Database, Globe, Smartphone } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const skills = [
    {
        icon: Globe,
        title: "Web Development",
        description: "Building responsive and scalable web applications."
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Creating native- and cross-platform mobile apps."
    },
    {
        icon: Database,
        title: "Backend & Database",
        description: "RESTful APIs, database, design, and system integration."
    },
    {
        icon: ChartNoAxesCombined,
        title: "GIS & Analytics",
        description: "Geospatial analysis, mapping, and automated reporting solutions."
    }
]

export default function About() {
    return (
        <section id="about" className="about">
            {/* header */}
            <div className="about-header">
                {/* left */}
                <div className="header-left">
                    <div className="image-bg">
                        <img
                            src={profile}
                            alt="profile"
                            className="profile-image"
                        />
                    </div>
                </div>

                {/* right */}
                <div className="header-right">
                    <h1>{aboutString.greetings} <FaHeart size={24} color="#F43F8C" /></h1>
                    <p>{aboutString.description}</p>
                </div>
            </div>

            <div className="about-divider" />

            <div className="skill">
                <h3 className="subtitle">{aboutString.subtitle}</h3>

                <div className="skill-container">
                    {
                        skills.map((skill, index) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={skill.title}
                                    className={
                                        `skill-card ${index !== skills.length - 1
                                            ? "border-right"
                                            : ""
                                        }`
                                    }
                                >
                                    <div className="skill-icon">
                                        <Icon size={28} />
                                    </div>

                                    <h5>{skill.title}</h5>
                                    <p>{skill.description}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}