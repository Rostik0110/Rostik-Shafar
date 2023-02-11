import "./EducationInfo.sass"
import {motion} from "framer-motion";
const EducationInfo = () => {
    return(
        <div className="education-info">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {duration:0.5,delay:0.7}}}
                className="education-info-bachelor-about">Bachelor</motion.div>
            <motion.div
                initial={{x: "40vw", opacity: 0}}
                whileInView={{x: 0, opacity: 1, transition:{duration:1,delay:1}}}
                className="education-info-other-about">
                National Aviation University<br/>
                1 course<br/>
                Faculty of cyber security, computer and software engineering<br/>
                Specialty: "Computer Science"
            </motion.div>
        </div>

    )
}

export default EducationInfo;