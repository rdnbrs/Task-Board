import React, { useEffect } from "react";
import { HiChevronDoubleRight, HiOutlineTrash, HiChevronDoubleLeft, HiAcademicCap } from "react-icons/hi";

function TaskCard(props) {
    const deleteTask = (item) => {
        props.deleteTask(item)
    }

    return (
        <div className="task-card">
            <div className="task-card-inner">
                <span className="task-text">{props.item.taskTitle}</span>
            </div>
            <div className="task-card-button">
                {
                    props.item.status == 1 &&
                    <HiOutlineTrash className="global-color add-item" size={18} onClick={() => deleteTask(props.item)} />
                }
                {
                    props.item.status != 1 &&
                    <HiChevronDoubleLeft className="global-color add-item" size={18} onClick={() => props.changeStatus(props.item, -1)} />
                }
                {
                    (props.item.status != 5 && props.item.status != 4) &&
                    <HiChevronDoubleRight className="global-color add-item" size={18} onClick={() => props.changeStatus(props.item, 1)} />
                }
                {
                    props.item.status == 4 &&
                    <HiAcademicCap className="global-color add-item" size={18} onClick={() => props.changeStatus(props.item, 1)} />
                }
            </div>
        </div>
    )
}

export default TaskCard