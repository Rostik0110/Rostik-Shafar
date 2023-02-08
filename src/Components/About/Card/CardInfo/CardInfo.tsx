import "./CardInfo.sass";
import gmailIcon from "../CardMedia/gmailIcon.png";
import phoneIcon from "../CardMedia/phone.png";
import dateIcon from "../CardMedia/date.png";
import homeIcon from "../CardMedia/home.png";
import {motion} from "framer-motion";

const CardInfo = () => {
    return(
        <motion.div className="card-about-container">
            <div className="card-about-box">
                <img alt={" "} className="card-icon-about" src={gmailIcon}/>
                <div className="card-text-about">rostikshafar@gmail.com</div>
            </div>
            <div className="card-about-box">
                <img alt={" "} className="card-icon-about" src={phoneIcon}/>
                <div className="card-text-about">+38 096 549 93 35</div>
            </div>
            <div className="card-about-box">
                <img alt={" "} className="card-icon-about" src={dateIcon}/>
                <div className="card-text-about">01.10.2004</div>
            </div>
            <div className="card-about-box">
                <img alt={" "} className="card-icon-about" src={homeIcon}/>
                <div className="card-text-about">Zhmerynka</div>
            </div>
        </motion.div>
    )

}

export default CardInfo;