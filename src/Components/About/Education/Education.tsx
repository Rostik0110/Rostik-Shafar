import "./Education.sass"
import {motion} from "framer-motion";
import educationIcon from "./education.png";

const Education = () => {
  return(
      <motion.div className="education">
          <div className="education-info-about-box">
              <motion.div
                  initial={{y:"-3vh", opacity:0}}
                  whileInView={{y: 0, transition:{duration:0.5, delay:0.5}, opacity: 1}}
                  className="education-info-date-about">Sept. 2022 - Today</motion.div>
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
          <motion.img
              initial={{ opacity: 0}}
              whileInView={{opacity: 1, transition:{duration:1,delay:0.3}}}
              className="icon-education-about" src={educationIcon}/>
      </motion.div>
  )
}

export default Education;