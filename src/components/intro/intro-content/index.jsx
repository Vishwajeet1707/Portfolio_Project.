import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Vishwajeet Pratap Singh</span>
                    </h1>
                    <p className="title">
                    I am Software Engineer with overall 2.5+ years of experience in Developing Web Based Application using HTML, CSS, JavaScript and SQL. I have also proficiency in ReactJs, Git and little bit about NodeJs, ExpressJs and MongoDB.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Keniya Andrew"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
