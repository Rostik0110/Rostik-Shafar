import "./Card.sass"
import {motion} from "framer-motion";
import cardPNG from "./CardMedia/card.png";
import CardInfo from "./CardInfo/CardInfo";
import {useEffect, useState} from "react";


const Card = ( ) =>{
    const [mobileVersion,setMobileVersion] = useState(window.innerWidth <= 440)

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <=440){
                setMobileVersion(true)
            }
            else{
                setMobileVersion(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return(
        <>
            <motion.div className="card-desktop">
                <motion.div className="card-container">
                    <motion.div
                        initial={{x: "50vw", opacity: 0}}
                        whileInView={{x: 0, transition: {duration: 0.8, delay: 1.2}, opacity: 1}}
                        className="card-info-about-box">
                        <motion.div
                            className="card-text-name-about red-text">
                            Shafar Rostislav Leonidovich
                        </motion.div>
                        <CardInfo/>
                    </motion.div>
                    <motion.img
                        initial={{x: "-50vw"}}
                        whileInView={{x: 0, transition: {duration: 0.8, delay: 0.5}}}
                        className="icon-card-about" src={cardPNG}/>
                </motion.div>
            </motion.div>
            <motion.div className="card-mobile">
                <motion.div className="card-container">
                    <motion.div
                        initial={{x: "50vw", opacity: 0}}
                        whileInView={{x: 0, transition: {duration: 0.8, delay: 1.2}, opacity: 1}}
                        className="card-info-about-box">
                        <motion.div
                            className="card-text-name-about red-text">
                            Shafar Rostislav Leonidovich
                        </motion.div>
                    </motion.div>
                    <motion.img
                        initial={{x: "-50vw"}}
                        whileInView={{x: 0, transition: {duration: 0.8, delay: 0.5}}}
                        className="icon-card-about" src={cardPNG}/>
                </motion.div>
                <motion.div
                    initial={mobileVersion && {y:"20vw", opacity: 0}}
                    whileInView={mobileVersion ? {y:0, transition: {duration: 0.8,delay: 1.5}, opacity: 1}: ""}>
                    <CardInfo/>
                </motion.div>

            </motion.div>
        </>

    )
}
export default Card