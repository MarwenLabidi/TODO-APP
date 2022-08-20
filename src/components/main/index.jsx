import React from "react";
import { useState, useEffect } from "react";
import TasksList from "../tasksList";
import {
        saveTask,
        clearCompletedTasks,
        getItemsNumbers,
        handelStateButtons,
        handelInput,
} from "../../utils/utils.jsx";

const Main = () => {
        const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]
        const [typeOfTask, setTypeOfTask] = useState("All"); //All,Active,Completed
        const [itemsNumbers, setItemsNumbers] = useState(Tasks.length);
        const [input, setInput] = useState("");

        // callback function to update the state of the checkbox
        const changeTaskStatus = (taskInfo) => {
                let allTasks = [...Tasks];
                let positionTaskToChange = taskInfo.key;

                if (taskInfo.completed === true) {
                        allTasks[positionTaskToChange].Completed = true;
                        setTask(allTasks);
                } else {
                        allTasks[positionTaskToChange].Completed = false;
                        setTask(allTasks);
                }
        };

        useEffect(() => {
                getItemsNumbers("All", Tasks, setItemsNumbers);
        }, [Tasks]);
        return (
                <>
                        <div>
                                <input
                                        onKeyDown={(e) =>
                                                e.key === "Enter" &&
                                                saveTask(
                                                        setTask,
                                                        setInput,
                                                        input,
                                                        Tasks
                                                )
                                        }
                                        type='text'
                                        onChange={(e) =>
                                                handelInput(e, setInput)
                                        }
                                        value={input}
                                />
                                <button
                                        onClick={(e) =>
                                                saveTask(
                                                        setTask,
                                                        setInput,
                                                        input,
                                                        Tasks
                                                )
                                        }>
                                        add
                                </button>
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
                                <button
                                        onClick={() =>
                                                handelStateButtons(
                                                        "All",
                                                        setTypeOfTask
                                                )
                                        }>
                                        All
                                </button>
                                <button
                                        onClick={() =>
                                                handelStateButtons(
                                                        "Active",
                                                        setTypeOfTask
                                                )
                                        }>
                                        Active
                                </button>
                                <button
                                        onClick={() =>
                                                handelStateButtons(
                                                        "Completed",
                                                        setTypeOfTask
                                                )
                                        }>
                                        Completed
                                </button>
                                <button
                                        onClick={() =>
                                                clearCompletedTasks(
                                                        Tasks,
                                                        setTask
                                                )
                                        }>
                                        Clear completed
                                </button>
                        </footer>
                </>
        );
};

export default Main;
// FIXME? WHEN YOU DELETE COMPLETE TASKS AND CREATE NEW TASK Encountered two children with the same key PROBLEM
//TODO? MAKE THIS FILE MORE READABLE