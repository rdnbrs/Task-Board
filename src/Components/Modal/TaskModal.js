import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function TaskModal(props) {

    const handleChange = (e) => {
        props.setTaskTitle(e.target.value)
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
        >
            <div className={!props.darkMode ? "modal-bg-dark" : "modal-bg"}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className="global-color">Create Task</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Task Title" name="title" value={props.taskTitle} onChange={handleChange} className="create-input" />
                </Modal.Body>
                <Modal.Footer>
                    <button className="modal-cancel-btn" onClick={props.closeModal}><span className="global-color">Cancel</span></button>
                    <button className="modal-create-btn" onClick={() => props.addTask(props.taskTitle)}><span className="text-color">Create</span></button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}

export default TaskModal