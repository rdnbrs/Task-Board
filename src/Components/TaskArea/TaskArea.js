import React, { useEffect, useState } from "react";
import { MdAddBox } from 'react-icons/md';
import TaskCard from "../TaskCard/TaskCard";

function TaskArea(props) {

    return (
        <div className={!props.darkMode ? "task-area-dark" : "task-area"}>
            <span className="global-color">{props.title} {props.hasButton && <MdAddBox className="add-item" size={22} onClick={props.openModal} />}</span>
            <hr style={{ borderTop: "1px" }}></hr>
            {
                props.items.map(item => {
                    if (item.status == props.filterStatus)
                        return <TaskCard darkMode={props.darkMode} item={item} changeStatus={props.changeStatus} deleteTask={props.filterStatus == 1 ? props.deleteTask : () => { }} />
                })
            }
        </div>
    )
}

export default TaskArea