import { useEffect, useState } from "react";
import { Home, Briefcase, FolderOpen, Phone, Mail, MapPin, Download } from "lucide-react";

import "../style/theme.css";
import "../style/sidebar.css";
import { sidebarString } from "../constant/string";

const menu = [
    {
        id: "about",
        label: "About",
        icon: Home
    },
    {
        id: "experience",
        label: "Experience",
        icon: Briefcase
    },
    {
        id: "projects",
        label: "Projects",
        icon: FolderOpen
    }
];

export default function Sidebar() {
    const [active, setActive] = useState("about");

    // useEffect(() => {
    //     const sections = document.querySelectorAll("section");

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     setActive(entry.target.id);
    //                 }
    //             });
    //         }, {
    //         threshold: 0.5,
    //     }
    //     );

    //     sections.forEach((section) => observer.observe(section));
    //     return () => observer.disconnect();
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = menu
                .map((item) => document.getElementById(item.id))
                .filter((section): section is HTMLElement => section !== null);

            if (sections.length === 0) return;

            // Highlight the last section when reaching the bottom
            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 5;

            if (atBottom) {
                setActive(sections[sections.length - 1].id);
                return;
            }

            // Determine which section has reached the activation line
            const activationPoint = window.innerHeight * 0.35;

            let currentSection = sections[0].id;

            sections.forEach((section) => {
                const top = section.getBoundingClientRect().top;

                if (top <= activationPoint) {
                    currentSection = section.id;
                }
            });

            setActive(currentSection);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <aside className="sidebar">
            {/* profile */}
            <div className="profile">
                <h1>{sidebarString.name}</h1>
                <span>{sidebarString.profession}</span>
                <p>{sidebarString.tagline}</p>
            </div>

            {/* navigation */}
            <nav className="menu">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            className={
                                `menu-item ${active === item.id ? "active" : ""
                                }`
                            }
                            onClick={() => {
                                setActive(item.id);

                                document.getElementById(item.id)?.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }}
                        >
                            <div className="icon">
                                <Icon size={22} />
                            </div>

                            <span>{item.label}</span>

                            {/* {active === item.id && (
                                <div className="pointer"></div>
                            )} */}
                        </button>
                    );
                })}
            </nav>

            <div className="divider" />

            {/* contact */}
            <div className="contact">
                <div className="contact-item">
                    <Phone size={18} />
                    <span>{sidebarString.phone}</span>
                </div>

                <div className="contact-item">
                    <Mail size={18} />
                    <span>{sidebarString.email}</span>
                </div>

                <div className="contact-item">
                    <MapPin size={18} />
                    <span>{sidebarString.location}</span>
                </div>
            </div>

            <button
                className="resume"
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/ctltiglao_cv.pdf";
                    link.download = "ctltiglao_cv.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}
            >
                <Download size={18} />
                {sidebarString.dowload}
            </button>
        </aside>
    );
}