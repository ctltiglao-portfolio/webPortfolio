import "../style/theme.css";
import "../style/footer.css";

import { footerString } from "../constant/string";

import { Heart, Mail, MapPin, Smartphone } from "lucide-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const contactList = [
    {
        icon: Mail,
        title: "Email",
        description: "ctltiglao@gmail.com"
    },
    {
        icon: Smartphone,
        title: "Mobile",
        description: "+63 975 846 2351"
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Matandang Balara, Quezon City"
    }
]

const socialList = [
    {
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/ctltiglao/"
    },
    {
        icon: BsGithub,
        link: "https://github.com/ctltiglao"
    }
]

export default function Footer() {
    return (
        <div className="footer">
            <div className="greeting">
                <h1>{footerString.title} <span>{footerString.together}</span> <FaHeart size={20} color="#F43F8C" /></h1>
                <p>{footerString.description}</p>
            </div>

            <div className="division">
                <div className="footer-contact">
                    {
                        contactList.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={
                                        `contact-card ${index !== contactList.length - 1
                                            ? "contact-margin"
                                            : ""
                                        }`
                                    }
                                >
                                    <div className="contact-icon">
                                        <Icon size={23} />
                                    </div>

                                    <div className="contact-right">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="divider" />

                <div className="footer-social">
                    <div className="social-left">
                        <p>{footerString.connection}</p>
                        {
                            socialList.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.link}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.link}
                                    >
                                        <Icon size={22} color="#F43F8C" />
                                    </a>
                                );
                            })
                        }
                    </div>

                    <div className="social-right">
                        <p>{footerString.rights} <Heart size={14} color="#F43F8C" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}