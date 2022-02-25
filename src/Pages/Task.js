import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TaskModal from "../Components/Modal/TaskModal";
import TaskArea from "../Components/TaskArea/TaskArea";

function Task() {
    const [taskItems, setTaskItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [progressItems, setProgressItems] = useState([])
    const [testItems, setTestItems] = useState([])
    const [doneItems, setDoneItems] = useState([])

    const [taskCount, setTaskCount] = useState(0)
    const [show, setShow] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")

    const addTask = (title) => {
        setTaskItems([...taskItems, { "taskid": taskCount, taskTitle: taskTitle, status: 1 }])
        setShow(false)
    }

    useEffect(() => {
        setTaskCount(taskCount + 1)
        setTaskTitle("")
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
                        <TaskArea title={"Opened"} items={taskItems} hasButton={true} addTask={addTask} openModal={openModal}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"Selected For Development"} items={selectedItems}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"In Progress"} items={progressItems}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"In Test"} items={testItems}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea title={"Done"} items={doneItems}></TaskArea>
                    </Col>
                </Row>
            </Container>

            <TaskModal show={show} closeModal={closeModal} addTask={addTask} taskTitle={taskTitle} setTaskTitle={setTaskTitle}></TaskModal>
        </div>
    )
}

export default Task