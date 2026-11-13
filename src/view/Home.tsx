import "../core/style/theme.css";
import "../core/style/app.css";

import Sidebar from "../core/widget/sidebar";

import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "../core/widget/footer";

export default function Home() {
    return (
        <div className="layout">
            <Sidebar />

            <main className="content">
                <section id="about">
                    {/* <p>About</p> */}
                    <About />
                </section>

                <section id="experience">
                    {/* <p>Experience</p> */}
                    <Experience />
                </section>

                <section id="projects">
                    {/* <p>Projects</p> */}
                    <Project />
                </section>

                <Footer />
            </main>
        </div>
    )
}