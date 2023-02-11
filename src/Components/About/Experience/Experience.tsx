import "./Experience.sass"
import {motion} from "framer-motion";
import experienceIcon from "../experience.png";

const Experience = () =>{
    return(
        <motion.div className="experience">
            <div className="experience-info-about-box">
                <ul>
                    <motion.li
                        initial={{y:"-6vh",opacity: 0}}
                        whileInView={{y: 0, transition: {duration:0.5,delay:0.5},opacity: 1}}
                        className="experience-line-height">
                        Unfortunately, this <span className="red-text">portfolio</span> is the only project on my list so far.
                    </motion.li>
                    <motion.li
                        initial={{y:"6vh",opacity: 0}}
                        whileInView={{y: 0, transition: {duration:0.5,delay:0.5},opacity: 1}}
                        className="experience-line-height">
                        I've worked with the following  <span className="red-text">technologies</span>: HTML & SASS/SCSS, Bootstrap, ReactJS, JavaScript.
                    </motion.li>
                </ul>
            </div>
            <motion.img
                initial={{opacity: 0}}
                whileInView={{opacity:1,transition: {duration:0.5,delay:1}}}
                className="icon-experience-about" src={experienceIcon}/>
        </motion.div>
    )
}

export default Experience;