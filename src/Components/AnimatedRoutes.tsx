import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import About from "./About/About";

const AnimatedRoutes = () => {
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;