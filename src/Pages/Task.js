import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TaskModal from "../Components/Modal/TaskModal";
import TaskArea from "../Components/TaskArea/TaskArea";

function Task(props) {
    const [taskItems, setTaskItems] = useState([])

    const [taskCount, setTaskCount] = useState(0)
    const [show, setShow] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")

    const addTask = () => {
        setTaskItems([...taskItems, { taskid: taskCount, taskTitle: taskTitle, status: 1 }])
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
        setTaskTitle("")
        setShow(false)
    }

    const changeStatus = (item, value) => {
        item.status += value
        setTaskItems([...taskItems])
    }

    const deleteTask = (task) => {
        let itemIndex = -1
        taskItems.forEach((item, index) => {
            if (task.taskid == item.taskid) {
                itemIndex = index
            }
        })
        let taskList = [...taskItems]
        taskList.splice(itemIndex, 1)
        setTaskItems([...taskList])
    }

    return (
        <div>
            <Container fluid className={!props.darkMode ? "component-div-dark" : "component-div"}>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <TaskArea darkMode={props.darkMode} title={"Opened"} items={taskItems} deleteTask={deleteTask} changeStatus={changeStatus} filterStatus={1} hasButton={true} addTask={addTask} openModal={openModal}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea darkMode={props.darkMode} title={"Selected For Development"} items={taskItems} changeStatus={changeStatus} filterStatus={2}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea darkMode={props.darkMode} title={"In Progress"} items={taskItems} changeStatus={changeStatus} filterStatus={3}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea darkMode={props.darkMode} title={"In Test"} items={taskItems} changeStatus={changeStatus} filterStatus={4}></TaskArea>
                    </Col>
                    <Col xs={2}>
                        <TaskArea darkMode={props.darkMode} title={"Done"} items={taskItems} changeStatus={changeStatus} filterStatus={5}></TaskArea>
                    </Col>
                </Row>
            </Container>

            <TaskModal darkMode={props.darkMode} show={show} closeModal={closeModal} addTask={addTask} taskTitle={taskTitle} setTaskTitle={setTaskTitle}></TaskModal>
        </div>
    )
}

export default Task