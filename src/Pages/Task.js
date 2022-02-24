import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TaskModal from "../Components/Modal/TaskModal";
import TaskArea from "../Components/TaskArea/TaskArea";

function Task() {
    const [taskItems, setTaskItems] = useState([])
    const [taskCount, setTaskCount] = useState(0)
    const [show, setShow] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")

    const addTask = (title) => {
        setTaskItems([...taskItems, { "taskid": taskCount, taskTitle: taskTitle }])
        setShow(false)
    }

    useEffect(() => {
        setTaskCount(taskCount + 1)
        setTaskTitle("")
        console.log(taskItems)
    }, [taskItems])

    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }

    return (
        <div>
            <Container fluid className="component-div">
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <TaskArea title={"Opened"} hasButton={true} addTask={addTask} openModal={openModal}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"Selected For Development"}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"In Progress"}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"In Test"}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"Done"}></TaskArea>
                    </Col>
                </Row>
            </Container>

            <TaskModal show={show} closeModal={closeModal} addTask={addTask} taskTitle={taskTitle} setTaskTitle={setTaskTitle}></TaskModal>
        </div>
    )
}

export default Task