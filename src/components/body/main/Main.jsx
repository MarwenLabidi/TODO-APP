import React from "react";
import { useState, useEffect } from "react";
import TasksList from "./tasks/TasksList";

const Main = () => {
    const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]
    const [typeOfTask, setTypeOfTask] = useState("All"); //All,Active,Completed
    const [itemsNumbers, setItemsNumbers] = useState(Tasks.length);
    const [input, setInput] = useState("");

    const saveTask = () => {
        let content = input;
        if(!content){return}
        setTask([
            ...Tasks,
            { ID: Tasks.length, Description: content, Completed: false },
        ]);
        setInput("");
    };
    const changeTaskStatus = (taskInfo) => {
        console.log("taskInfo: ", taskInfo);
        let allTasks = [...Tasks];
        console.log("allTasks: ", allTasks);
        let positionTaskToChange = taskInfo.key;
        console.log("positionTaskToChange: ", positionTaskToChange);

        if (taskInfo.completed === true) {
            allTasks[positionTaskToChange].Completed = true;
            setTask(allTasks);
        } else {
            allTasks[positionTaskToChange].Completed = false;
            setTask(allTasks);
        }
    };
    const clearCompletedTasks = () => {
        let allTasks = [...Tasks];
        let newTasks = allTasks.filter((task) => task.Completed === false);
        setTask(newTasks);
    };
    const getItemsNumbers = (type) => {
        // ALL Completed Active
        let countStatus = (completed) => {
            let count = 0;
            count = Tasks.reduce((acc, task) => {
                task.Completed === completed && acc++;
                return acc;
            }, 0);
            setItemsNumbers(count);
        };
        if (type === "Completed") {
            countStatus(true);
        } else if (type === "Active") {
            countStatus(false);
        } else {
            setItemsNumbers(Tasks.length);
        }
    };
    const handelStateButtons = (type) => {
        setTypeOfTask(type);
        getItemsNumbers(type);
    };
    const handelinput = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        getItemsNumbers("All");
    }, [Tasks]);
    return (
        <>
            <div>
                <input
                    onKeyDown={(e) => e.key === "Enter" && saveTask(e)}
                    type='text'
                    onChange={(e) => handelinput(e)}
                    value={input}
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
                <p>{itemsNumbers} items</p>
                <button onClick={() => handelStateButtons("All")}>All</button>
                <button onClick={() => handelStateButtons("Active")}>
                    Active
                </button>
                <button onClick={() => handelStateButtons("Completed")}>
                    Completed
                </button>
                <button onClick={() => clearCompletedTasks()}>
                    Clear completed
                </button>
            </footer>
        </>
    );
};

export default Main;
