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
                {/* TODO show the lenght of completed item and active items whn you clck buttons */}
                <p>{Tasks.length} items</p>
                <button onClick={()=>setTypeOfTask('All')}>All</button>
                <button onClick={()=>setTypeOfTask('Active')}>Active</button>
                <button onClick={()=>setTypeOfTask('Completed')}>Completed</button>
                {/* TODO make the functionality of clear completed */}
                <button>Clear completed</button>
            </footer>
        </>
    );
};

export default Main;
