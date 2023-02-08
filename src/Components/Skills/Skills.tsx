import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import "./Skills.sass";
import MySkills from "./MySkills/MySkills"
import Languages from "./Languages/Languages";
import PersonalQualities from "./PersonalQualities/PersonalQualities";
import {useState} from "react";


const Skills = () => {
    const [animationPage, setAnimationPage] = useState(false)
    const navigate = useNavigate();
    return(
        <motion.div
            animate={animationPage ? {opacity:0,transition:{duration:1}} : "none"}
            viewport={{once:true}}
            className="skills">
            <div className="logo-box">
                <div
                    className="logo-link-box">
                    <div onClick={() => {
                        setAnimationPage(true);
                        setTimeout(() => {
                            navigate('../')
                        }, 1000)}}

                         className="logo-link logo-animate">

                    </div>
                </div>
            </div>
            <div className="title-box-skills">
                <motion.div
                    initial={{y:"40vh"}}
                    animate={{y:0,transition: {duration: 1}}}
                    className="title-page-skills">My skills & personal qualities</motion.div>
            </div>
            <MySkills/>
            <Languages/>
            <PersonalQualities/>
            <div className="red-opacity">

            </div>
        </motion.div>
    )
}

export default Skills;