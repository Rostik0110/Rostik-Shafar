import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom"
import "./Home.sass";
import mePhoto from "./Avatarrr.png"
import Contacts from "../Contacts/Contacts";

const Home = () => {
    const [displayNone, setDisplayNone] = useState(true)
    const [contactsBox, setContactsBox] = useState(false)
    const [animationPage, setAnimationPage] = useState(false)
    const navigate = useNavigate()

    const textAnimation = {
        hidden: {
            y: "15vh"
        },
        visible: {
            y: 0,
            transition: {duration: 0.5},
        },
        setHidden: {
            y: 0,
            x: 0,
            opacity: 1
        },
        setVisible: {
            y: 0,
            x: 100,
            opacity: 0,
            transition: {duration: 1.6}
        }
    }
    const photoAnimation = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {duration: 1.5}
        },
        setHidden: {
            opacity: 1
        },
        setVisible: {
            opacity: 0,
            transition: {duration: 1.5}
        }
    }
    return (
        <motion.div
            initial={animationPage ? "setHidden" : "hidden"}
            animate={animationPage ? "setVisible" : "visible"}
            className="home">
            <motion.img
                variants={photoAnimation}
                className="me-photo-home"
                src={mePhoto}/>
                <AnimatePresence>
                    {displayNone && (<motion.div
                        initial={animationPage ? "setHidden" : "hidden"}
                        animate={animationPage ? "setVisible" : "visible"}
                        exit={ {opacity: 0, transition:{duration:1}}}
                        className="button-link-box-home">
                        <div className="hide-text-block">
                            <motion.div variants={textAnimation} onClick={() => {
                                setAnimationPage(true);
                                setTimeout(() => {
                                    navigate('/about')
                                }, 1500)
                            }
                            } className="button-link-home label-hello animate">

                            </motion.div>
                        </div >
                        <div className="hide-text-block">
                            <motion.div variants={textAnimation} onClick={() => {
                                setAnimationPage(true);
                                setTimeout(() => {
                                    navigate('/skills')
                                }, 1500)
                            }
                            } className="button-link-home label-skills text-color-red animate">

                            </motion.div>
                        </div>
                        <div className="hide-text-block">
                            <motion.div
                                variants={textAnimation}
                                onClick={()=>{setDisplayNone(false);setTimeout(()=>{setContactsBox(true)},1100)}}
                                className="button-link-home text-color-red label-contacts animate">
                            </motion.div>
                        </div>
                    </motion.div>)}
                </AnimatePresence>
            <AnimatePresence>
                {contactsBox && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={contactsBox ? {opacity: 1, transition:{duration:1}}:"none"}
                    exit={{opacity: 0,transition:{duration:1}}}
                    className="contacts-container"
                >
                    <Contacts/>
                    <div className="back-button" onClick={()=>{setContactsBox(false);setTimeout(()=>{setDisplayNone(true)},1100)}}>Back</div>
                </motion.div>)}
            </AnimatePresence>
        </motion.div>
    )
}

export default Home;