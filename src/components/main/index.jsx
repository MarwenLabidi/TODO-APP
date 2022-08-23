import React from "react";
import { useState, useEffect } from "react";
import TasksList from "../tasksList";
import {StyledMain,StyledMainInputSectionOne,StyledMainFooterSection,StyledMainListSection} from "../../setup/styled_components/styled_component";
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
                if (taskInfo.completed === true) {
                        allTasks.forEach((task) => {
                                if (task.ID === taskInfo.key) {
                                        task.Completed = true;
                                }
                        });
                        setTask(allTasks);
                } else {
                        allTasks.forEach((task) => {
                                if (task.ID === taskInfo.key) {
                                        task.Completed = false;
                                }
                        });
                        setTask(allTasks);
                }
        };

        useEffect(() => {
                getItemsNumbers("All", Tasks, setItemsNumbers);
        }, [Tasks]);
        return (
                <StyledMain>
                        <StyledMainInputSectionOne>
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
                        </StyledMainInputSectionOne>

                        <StyledMainListSection>
                                <TasksList
                                        tasks={Tasks}
                                        type={typeOfTask}
                                        callBack={changeTaskStatus}
                                />
                        </StyledMainListSection>

                        <StyledMainFooterSection>
                                <p>{itemsNumbers} items</p>
                                <div className="allActiveComplete">
                                        <button
                                                onClick={() =>
                                                        handelStateButtons(
                                                                "All",
                                                                setTypeOfTask,
                                                                Tasks,
                                                                setItemsNumbers
                                                        )
                                                }>
                                                All
                                        </button>
                                        <button
                                                onClick={() =>
                                                        handelStateButtons(
                                                                "Active",
                                                                setTypeOfTask,
                                                                Tasks,
                                                                setItemsNumbers
                                                        )
                                                }>
                                                Active
                                        </button>
                                        <button
                                                onClick={() =>
                                                        handelStateButtons(
                                                                "Completed",
                                                                setTypeOfTask,
                                                                Tasks,
                                                                setItemsNumbers
                                                        )
                                                }>
                                                Completed
                                        </button>
                                </div>
                                <button
                                        onClick={() =>
                                                clearCompletedTasks(
                                                        Tasks,
                                                        setTask
                                                )
                                        }>
                                        Clear completed
                                </button>
                        </StyledMainFooterSection>
                </StyledMain>
        );
};

export default Main;
