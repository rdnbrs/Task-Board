import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import TaskCard from "../TaskCard/TaskCard";
import { MdAddBox } from 'react-icons/md';

function TaskArea(props) {
    return (
        <div className="task-area">
            <span className="global-color">{props.title} {props.hasButton && <MdAddBox className="add-item" size={22} onClick={props.openModal}></MdAddBox>}</span>
            <hr></hr>
            {/*<DragDropContext>
                <Droppable>
                    {
                        props.items &&
                        props.items.map(item => {
                            return (
                                <Draggable>
                                    <TaskCard></TaskCard>
                                </Draggable>
                            )
                        })
                    }
                </Droppable>
                </DragDropContext>
                */}                
        </div>
    )
}

export default TaskArea