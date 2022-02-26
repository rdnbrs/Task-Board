import React from "react";

function Footer(props) {
    return (
        <div className={!props.darkMode ? "taskboard-footer-dark" : "taskboard-footer"}>
            <span className="global-footer-text">@2022</span>
        </div>
    )
}

export default Footer