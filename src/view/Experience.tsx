import "../core/style/experience.css";

import { experienceString } from "../core/constant/string";

import { MoveRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="work">
                <h1>{experienceString.subtitle} <FaHeart size={24} color="#F43F8C" /></h1>

                {
                    experienceString.works.map((item) => {
                        return (
                            <div className="work-card">
                                <div className="card-left">
                                    <p>{item.date}</p>
                                </div>
                                {/* <div className="work-border" /> */}
                                <div className="card-right">
                                    <h3 className="designation">{item.title}</h3>
                                    <h3 className="company">{item.subtitle}</h3>
                                    <p>{item.description}</p>
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
                <MoveRight size={18} /> {experienceString.viewMore}
            </button>
        </section>
    );
}