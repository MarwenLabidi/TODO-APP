import React from "react";
import { useState, useEffect } from "react";
import TasksList from "./tasks/TasksList";

const Main = () => {
    const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]
    const [typeOfTask, setTypeOfTask] = useState("All"); //All,Active,Completed

    const saveTask = (e) => {
        let content = e.target.value || e.target.previousElementSibling.value;
        setTask([
            ...Tasks,
            { ID: Tasks.length, Description: content, Completed: false },
        ]);
        e.target.value = "";
    };
    // FIXME the state not updating when the checkbox is checked
    const changeTaskStatus = (taskInfo) => {
        let allTasks = [...Tasks];
        let positionTaskToChange = taskInfo.key.split("-")[1]
        
        if (taskInfo.completed === true) {
            allTasks[positionTaskToChange].Completed = true;
            setTask(allTasks);
        } else {
            allTasks[positionTaskToChange].Completed = false;
            setTask(allTasks);
        }
    };

    useEffect(() => {
        console.log(Tasks);
    }, [Tasks]);
    return (
        <>
            <div>
                <input
                    onKeyDown={(e) => e.key === "Enter" && saveTask(e)}
                    type='text'
                />
                <button onClick={(e) => saveTask(e)}>add</button>
            </div>

            <section>
                <TasksList
                    tasks={Tasks}
                    type={typeOfTask}
                    callBack={changeTaskStatus}
                />
            </section>

            <footer>
                <p>{Tasks.length} items</p>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <button>Clear completed</button>
            </footer>
        </>
    );
};

export default Main;
