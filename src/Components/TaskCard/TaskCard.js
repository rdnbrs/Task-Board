import React from "react";
import { HiChevronDoubleRight, HiOutlineTrash, HiChevronDoubleLeft, HiAcademicCap } from "react-icons/hi";

function TaskCard(props) {
    return (
        <div className="task-card">
            <div className="task-card-inner">
                <span className="task-text">{props.item.taskTitle}</span>
            </div>
            <div className="task-card-button">
                <HiOutlineTrash className="global-color add-item" size={18} />
                <HiChevronDoubleRight className="global-color add-item" size={18} />
            </div>
        </div>
    )
}

export default TaskCard