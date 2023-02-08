import "./Languages.sass";
import {motion} from "framer-motion";

const Languages = () =>{
    return(
        <motion.div
            className="languages-box">
            <motion.div
                initial={{x:"80vw"}}
                whileInView={{x:0, transition: {duration:1}}}
                className="title-box-my-skills text-color-red">Languages</motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {duration:1,delay:0.5}}}
                className="lang-container">
                <div className="lang-box">
                    <div className="lang">English</div>
                    <div className="status">Beginner, Elementary</div>
                </div>
                <div className="lang-box">
                    <div className="lang">Ukrainian</div>
                    <div className="status">Proficiency</div>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Languages;