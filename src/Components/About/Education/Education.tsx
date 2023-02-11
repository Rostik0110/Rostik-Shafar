import "./Education.sass"
import {motion} from "framer-motion";
import educationIcon from "./education.png";
import {useState} from "react";
import EducationInfo from "./EducationInfo/EducationInfo";

const Education = () => {
    const [mobileVersion] = useState(window.innerWidth <= 440 ? true : false);
  return(
      <motion.div className="education">
          <div className="education-container">
              <div className="education-info-about-box">
                  <motion.div
                      initial={{y:"-3vh", opacity:0}}
                      whileInView={{y: 0, transition:{duration:0.5, delay:0.5}, opacity: 1}}
                      className="education-info-date-about">
                      Sept. 2022 - Today
                  </motion.div>
                  {!mobileVersion ? <EducationInfo/> : ""}
              </div>
              <motion.img
                  initial={{ opacity: 0}}
                  whileInView={{opacity: 1, transition:{duration:1,delay:0.3}}}
                  className="icon-education-about" src={educationIcon}/>
          </div>
          {mobileVersion ? <EducationInfo/> : ""}
      </motion.div>
  )
}

export default Education;