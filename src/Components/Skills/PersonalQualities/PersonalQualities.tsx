import "./PersonalQualities.sass";
import {motion} from "framer-motion";

const PersonalQualities = () => {
    return(
        <div className="personal-qualities-box">
            <motion.div
                initial={{x:"80vw"}}
                whileInView={{x:0, transition: {duration:1}}}
                className="title-box-my-skills text-color-red">Personal qualities</motion.div>
            <div className="info-box">
                <motion.div
                    initial={{y:"-5vh",opacity:0}}
                    whileInView={{y:0,opacity:1, transition:{duration:1,delay:0.5}}}
                    className="personal-qualities-info">
                    Calmness, diligence, high responsibility, attentiveness, ability to concentrate, discipline, analytical mindset.
                </motion.div>
            </div>

        </div>
    )
}

export default PersonalQualities;