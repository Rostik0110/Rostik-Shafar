import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import "./About.sass";
import aboutMePhoto from "./aboutMePhoto.png"
import Card from "./Card/Card";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import {useState} from "react";


const About = () => {
    const [animationPage, setAnimationPage] = useState(false)
    const navigate = useNavigate();

    const topAnimate = {
        hidden: {
            y: 200
        },
        visible: {
            y: 0,
            transition: {duration: 1}
        },
        setHidden:{
            y:0
        }
    }
    const photoAnimate = {
        hidden: {
            y: 200
        },
        visible: {
            y: 0,
            transition: {duration: 1, delay:0.5}
        },
        setHidden:{
            y:0
        }
    }
    return (
        <motion.div

            initial="hidden"
            whileInView= "visible"
            animate={animationPage ? {opacity:0,transition:{duration:1}} : "none"}

            className="about">
            <div className="about-container">
                <div className="block-image-overflow">
                    <div className="title-box-about">
                        <div className="logo-link-box">
                            <div onClick={() => {
                                setAnimationPage(true);
                                setTimeout(() => {
                                    navigate('../')
                                }, 1000)}}

                                className="logo-link logo-animate">

                            </div>
                        </div>
                        <motion.div  variants={topAnimate} className="animate-title">
                            <div className="title-about">I am a junior frontend developer</div>
                        </motion.div>
                    </div>
                    <div className="me-photo-box-about">
                        <motion.img alt={" "} variants={photoAnimate} className="me-photo-about" src={aboutMePhoto}/>
                    </div>
                    <div className="info-section-box">
                        <motion.div
                            initial={{x:"80vw"}}
                            whileInView={{x:0,transition: {duration:1}}}
                            className="title-section">
                            About
                        </motion.div>
                        <motion.div
                            initial={{x:"-80vw"}}
                            whileInView={{x:0,transition: {duration:1}}}
                            className="personal-info">
                            My name is Rostislav. I've been interested in the IT field for
                            several years and want to get a job to start building my career.
                        </motion.div>
                    </div>
                </div>

            </div>

            <div className="about-content">
                <Card/>
                <Education/>
                <Experience/>
            </div>
        </motion.div>
    )
}

export default About;