import "./MySkills.sass";
import {motion} from "framer-motion";
import html from "./html.png";
import css from "./css.png";
import js from "./javascript.png";
import reactjs from "./react.png";

const MySkills = () =>{
    const skillsTitle = {
        hidden: {
            x:"80vw"
        },
        visible:{
            x:0,
            transition:{duration: 1}
        }
    }
    const skillsIcon = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity:1,
            transition:{duration: 1}
        }
    }

    return(
        <div
            className="skills-box">
            <motion.div
                initial={{x:"80vw"}}
                whileInView={{x:0, transition:{duration: 1}}}
                className="title-box-my-skills text-color-red">Skills</motion.div>
            <div className="html-css-box">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={skillsIcon}
                    className="icon-box">
                    <img src={html} className="icon-html"/>
                    <img src={css} className="icon-css"/>
                </motion.div>
                <motion.div
                    initial={{x:"40vw"}}
                    whileInView="visible"
                    variants={skillsTitle}
                    className="title-skills">HTML & CSS</motion.div>
            </div>
            <div className="javaScript-box-skills">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="title-boxx-skills">
                    <motion.img
                        variants={skillsIcon}
                        src={js} className="icon-js"/>
                    <motion.div
                        variants={skillsTitle}
                        className="title-skills">JavaScript</motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={skillsIcon}
                    className="info">
                    I know
                    <span className="text-color-red"> JavaScript </span>
                     at the basic level. I use
                    <span className="text-color-red"> ES5 </span>
                     and
                    <span className="text-color-red"> ES6</span> syntaxes.
                </motion.div>
            </div>
            <div className="react-box-skills">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="title-boxx-skills">
                    <motion.img
                        variants={skillsIcon}
                        src={reactjs} className="icon-react"/>
                    <motion.div
                        variants={skillsTitle}
                        className="title-skills">ReactJS</motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={skillsIcon}
                    className="info">
                    In
                    <span className="text-color-red"> ReactJS</span>
                     , usually use the
                    <span className="text-color-red"> useState</span>
                     and
                    <span className="text-color-red"> useEffect </span>
                     hooks. At the time of writing this portfolio, I am learning
                    <span className="text-color-red"> TypeScript</span>
                    ,
                    <span className="text-color-red"> SCSS/SASS</span>.
                </motion.div>
            </div>
        </div>
    )
}

export default MySkills;