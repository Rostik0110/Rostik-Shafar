import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes"
import "./App.sass";

const App = () => {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
}

export default App;