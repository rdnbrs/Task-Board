import React, { useEffect } from "react";
import { MdAddBox } from 'react-icons/md';
import TaskCard from "../TaskCard/TaskCard";

function TaskArea(props) {

    return (
        <div className="task-area">
            <span className="global-color">{props.title} {props.hasButton && <MdAddBox className="add-item" size={22} onClick={props.openModal} />}</span>
            <hr style={{ borderTop: "1px" }}></hr>
            {
                props.items.map(item => {
                    return <TaskCard item={item} />
                })
            }
        </div>
    )
}

export default TaskArea