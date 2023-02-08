import "./Card.sass"
import {motion} from "framer-motion";
import cardPNG from "./CardMedia/card.png";
import {useState} from "react";
import CardInfo from "./CardInfo/CardInfo";


const Card = ( ) =>{
    const [mobileVersion] = useState(window.innerWidth <= 420 ? true : false);

    return(
        <motion.div className="card">
            <motion.div

                initial={mobileVersion ? {y:"-50vw", opacity: 0} : {x:"50vw", opacity: 0} }
                whileInView={mobileVersion ? {y:0, transition: {duration: 0.8,delay: 1.2}, opacity: 1}:{x:0, transition: {duration: 0.8,delay: 1.2}, opacity: 1}}
                className="card-info-about-box">
                <motion.div
                    className="card-text-name-about red-text">
                    Shafar Rostislav Leonidovich
                </motion.div>
                modileVersion ? <CardInfo/> : {}
            </motion.div>
            <motion.img
                initial={{x: "-50vw"}}
                whileInView={{x: 0, transition: {duration: 0.8, delay: 0.5}}}
                className="icon-card-about" src={cardPNG} />
        </motion.div>
    )
}
export default Card