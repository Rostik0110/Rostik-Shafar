import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomeTest from "./Home/HomeTest";
import Skills from "./Skills/Skills";
import About from "./About/About";

const AnimatedRoutes = () => {
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<HomeTest/>} />
                <Route path="/home" element={<HomeTest/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;