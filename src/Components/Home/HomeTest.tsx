import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom"
import "./HomeTest.sass";
import mePhoto from "./Avatar.png"
import Contacts from "../Contacts/Contacts";


const HomeTest = () => {

    const [mobileVersion] = useState(window.innerWidth <= 440)
    const [displayNone, setDisplayNone] = useState(true)
    const [contactsBox, setContactsBox] = useState(false)
    const [animationPage, setAnimationPage] = useState(false)
    const [eventMVersion, setEventMVersion] = useState(true)
    const navigate = useNavigate()


    const ButtonLink = (link: string) => {
        setAnimationPage(true);
        setTimeout(() => {
            navigate(link)
        }, 1500);
    }
    const ContactsButtonLink = () => {
        setDisplayNone(false);
        setTimeout(() => {
            setContactsBox(true)
        }, 1100)
    }
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
            opacity: 1
        },
        setVisible: {
            y: 0,
            opacity: 0,
            transition: {duration: 1.5}
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
    const opacityNone = {
        setHidden: {
            opacity: 1
        },
        setVisible: {
            opacity: 0,
            transition: {duration: 1.5}
        }
    }

    return (
        <AnimatePresence>
                <motion.div

                    initial={animationPage ? "setHidden" : "hidden"}
                    animate={animationPage ? "setVisible" : "visible"}
                    variants={opacityNone}
                    className="home">

                    {displayNone && (
                        <div className="layer" onClick={() => {
                            mobileVersion && displayNone && setEventMVersion(!eventMVersion)
                        }}>

                        </div>)}
                    <motion.img
                        variants={photoAnimation}
                        className="me-photo-home"
                        src={mePhoto}/>
                    <AnimatePresence>
                        {displayNone && (
                            <>
                                <motion.div
                                    exit={{opacity: 0, transition: {duration: 1}}}
                                    className="tap-anywhere">Tap anywhere</motion.div>
                                {!mobileVersion && (
                                    <motion.div
                                        initial={animationPage ? "setHidden" : "hidden"}
                                        animate={animationPage ? "setVisible" : "visible"}
                                        exit={{opacity: 0, transition: {duration: 1}}}
                                        className="button-link-box-home">
                                        <div className="hide-text-block">
                                            <motion.div
                                                variants={textAnimation}
                                                onClick={() => {
                                                    ButtonLink("/about")
                                                }}
                                                className="button-link-home label-hello animate">
                                            </motion.div>
                                        </div>
                                        <div className="hide-text-block">
                                            <motion.div
                                                variants={textAnimation}
                                                onClick={() => {
                                                    ButtonLink("/skills")
                                                }}
                                                className="button-link-home label-skills text-color-red animate">
                                            </motion.div>
                                        </div>
                                        <div className="hide-text-block">
                                            <motion.div
                                                variants={textAnimation}
                                                onClick={() => {
                                                    ContactsButtonLink()
                                                }}
                                                className="button-link-home text-color-red label-contacts animate">
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}


                                {eventMVersion && (
                                    <motion.div
                                        initial={"hidden"}
                                        animate={"visible"}
                                        className="button-link-box-home-mobile">
                                        <div className="hide-text-block">
                                            <motion.div variants={textAnimation}
                                                        className="button-link-home label-hello animate">
                                                Hello.
                                            </motion.div>
                                        </div>
                                        <div className="hide-text-block">
                                            <motion.div variants={textAnimation}
                                                        className="button-link-home label-skills text-color-red animate">
                                                I am
                                            </motion.div>
                                        </div>
                                        <div className="hide-text-block">
                                            <motion.div variants={textAnimation}
                                                        className="button-link-home text-color-red label-contacts animate">
                                                Rostislav
                                            </motion.div>
                                        </div>
                                    </motion.div>)}


                                {!eventMVersion && (
                                    <motion.div
                                        initial={"hidden"}
                                        animate={"visible"}
                                        exit={{opacity: 0, transition: {duration: 1.5}}}
                                        className="button-link-box-home-mobile index">
                                        <div className="hide-text-block">
                                            <motion.div variants={textAnimation} onClick={() => ButtonLink("/about")}
                                                        className="button-link-home label-hello animate">
                                                About
                                            </motion.div>
                                        </div>
                                        <div className="hide-text-block">
                                            <motion.div variants={textAnimation} onClick={() => {ButtonLink("/skills")}}
                                                        className="button-link-home label-skills text-color-red animate">
                                                Skills
                                            </motion.div>
                                        </div>
                                        <div className="hide-text-block">
                                            <motion.div
                                                variants={textAnimation}
                                                onClick={() => {
                                                    ContactsButtonLink()
                                                }}
                                                className="button-link-home text-color-red label-contacts animate">
                                                Contacts
                                            </motion.div>
                                        </div>
                                    </motion.div>)}
                            </>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {contactsBox && (
                            <>

                            <motion.div
                                initial={{opacity: 0}}
                                animate={contactsBox && {opacity: 1, transition: {duration: 1}}}
                                exit={{opacity: 0, transition: {duration: 1}}}
                                className="contacts-container"
                            >
                                <div className="logo-box">
                                    <div
                                        className="logo-link-box">
                                        <div onClick={() => {
                                            setContactsBox(false);
                                            setEventMVersion(true);
                                            setTimeout(() => {
                                                setDisplayNone(true)
                                            }, 1100)
                                        }}
                                             className="logo-link-h logo-animate">
                                        </div>
                                    </div>
                                </div>
                                <Contacts/>
                            </motion.div>
                            </>
                            )}
                    </AnimatePresence>
                </motion.div>



        </AnimatePresence>
    )
}


export default HomeTest;