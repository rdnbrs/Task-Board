import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Task from "./Pages/Task"
import About from "./Pages/About"
import TNavbar from "./Components/Navbar/TNavbar"
import Footer from "./Components/Footer/Footer"

export function App() {
    return (
        <>
           <TNavbar></TNavbar>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Task />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
            <Footer></Footer>
        </>
    )
}