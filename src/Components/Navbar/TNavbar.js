import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function TNavbar(props) {

    const changeMode = () => {
        props.setDarkMode(!props.darkMode)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={!props.darkMode ? "taskboard-nav-dark" : "taskboard-nav"}>
                <Navbar.Brand href="/" className="global-color"><span className="global-color">Task Board</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><span className="global-color">Board</span></Nav.Link>
                        <Nav.Link href="/about"><span className="global-color">About</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <label class="switch">
                    <input type="checkbox" value={props.darkMode} onChange={changeMode} />
                    <span class="slider round"></span>
                </label>
            </Navbar>
        </>
    )
}

export default TNavbar