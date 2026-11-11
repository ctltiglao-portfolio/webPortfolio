import "../core/style/project.css";

import { projectString } from "../core/constant/string";

import { MoveRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "ParkGo Mobile Application",
        category: ["mobile"],
        image: "/parkgo.png",
        description: "Rewrote the ParkGo parking guest mobile application from native language to cross-platform framework, improving maintainability and reducing the effort required to support multiple platforms.\nDesigned and developed a dynamic parking slot visualization that adapts to the actual parking environment, supporting different layouts. The system provides a more realistic and intuitive representation of available parking spaces based on their physical arrangement.\nModified and extended existing APIs to support application requirements and parking-related features.",
        company: "STRIDE Consulting, Inc.",
        start: "Mar 2025",
        end: "Jun 2026",
        tags: [
            "Flutter",
            "Dart",
            "MVC Architecture",
            "RESTful API",
            "Node.js",
            "Express.js",
            "MariaDB"
        ]
    },
    {
        id: 2,
        title: "VINTA Ferry Mobile Application",
        category: ["mobile"],
        image: "/vinta.png",
        description: "Rewrote the VINTA Ferry mobile application from native language to cross-platform framework, improving maintainability and reducing the effort required to support multiple platforms.\nDesigned and developed a cinema-style seat selection that allows passengers to select multiple seats and assign each seat to specific passenger, making group bookings and passenger management more intuitive and organized.\nModified and extended existing APIs to support mobile application functionality.",
        company: "VINTATECH",
        start: "Jul 2025",
        end: "Oct 2026",
        tags: [
            "Flutter",
            "Dart",
            "MVC Architecture",
            "RESTful API",
            "Node.js",
            "Express.js",
            "MariaDB"
        ]
    },
    {
        id: 3,
        title: "Metta City System",
        category: ["desktop"],
        image: "/metta.png",
        description: "Designed and developed a desktop application to monitor and track guest interactions within Metta City, including backend API development to support application functionality.\nCreated web pages for administrator registration and tier management to support user administration and guest tier operations.\nDeveloped an automated mall-linking process for end-of-day (EOD) sales transactions and enhanced hourly sales transaction processing. Implemented automated CSV generation and database procedures to retrieve, process, and calculate sales data for mall reporting.",
        company: "VINTATECH | Globaltronics, Inc.",
        start: "Jan 2026",
        end: "Oct 2026",
        tags: [
            "Python",
            "Tkinter",
            "Node.js",
            "RESTful API",
            "Express.js",
            "ASP.NET C#",
            "MVC Architecture",
            "MariaDB",
            "GitHub"
        ]
    },
    {
        id: 4,
        title: "Travel Time and Delay Survey System",
        category: ["mobile"],
        image: "/ttds.png",
        description: "Developed and designed an Android mobile application to record the travel time and cause of delay in N1 and Nautical Highway in the Philippines to reduce travel time, and improved road network quality and safety.\nBuilt a web page that will convert the PDF file to SQL database that will be use by the mobile application for travel time and delay survey.",
        company: "Department of Public Works and Highways | DJMV Management Consultancy, Inc.",
        start: "Mar 2026",
        end: "Oct 2026",
        tags: [
            "Android Studio",
            "Java",
            "SQL Database",
            "ASP.NET C#",
            "MVC Architecture",
            "GitHub"
        ]
    },
    {
        id: 5,
        title: "ParaSol Platform Development",
        category: ["mobile"],
        image: "/parasol.png",
        description: "Developed a cross-platform mobile application for SafeTravelPH, providing real-time transit monitoring and eco-driving assistance for commuters, drivers, and transport planners. Implemented features for vehicle location tracking, occupancy monitoring, travel time analysis, and commuter feedback to support data-driven transportation planning and promote safer, more fuel-efficient driving.",
        company: "SafeTravelPH Mobility Innovations Organizations, Inc.",
        start: "Mar 2026",
        end: "Oct 2026",
        tags: [
            "React Native",
            "Tailwind CSS",
            "MVC Architecture",
            "Figma",
            "GitLab",
            "Monday.com"
        ]
    },
]

export default function Project() {

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
                onClick={() => window.open("/ctltiglao_cv.pdf", "_blank")}
            >
                <MoveRight size={18} /> {projectString.viewMore}
            </button>
        </section>
    );
}