import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Task from "./Pages/Task"
import About from "./Pages/About"
import TNavbar from "./Components/Navbar/TNavbar"
import Footer from "./Components/Footer/Footer"

export function App() {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <>
           <TNavbar darkMode={darkMode} setDarkMode={setDarkMode}></TNavbar>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Task darkMode={darkMode}/>} />
                        <Route path="/about" element={<About darkMode={darkMode}/>} />
                    </Routes>
                </div>
            </Router>
            <Footer darkMode={darkMode}></Footer>
        </>
    )
}