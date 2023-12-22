import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
//import Resume from "../../download/Vishwajeet_SoftwareEngineer";
  import Resume from "../../download/Vishwajeet_SoftwareEngineer.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                      //  alt="JavaScript, ReactJs, CSS, HTML, SASS, Photoshop, Figma"
                        alt="Html, CSS, Tailwind CSS, JavaScript, ReactJS, Git, MySql"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>MySql</li>
                    <li>Git</li>
                    </ul>
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
