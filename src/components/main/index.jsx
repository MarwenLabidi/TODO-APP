import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import TasksList from "../tasksList";
import {
        StyledMain,
        StyledMainInputSectionOne,
        StyledMainFooterSection,
        StyledMainListSection,
} from "../../setup/styled_components/styled_component";
import { handelBlurInput, handelFocusedInput } from "../../utils/utils";
import {
        saveTask,
        clearCompletedTasks,
        getItemsNumbers,
        handelStateButtons,
        handelInput,
} from "../../utils/utils.jsx";
import { FocusedInputContext } from "../../setup/context/focusedInputContext.jsx";
import { useFirebase } from "../../setup/Hooks/useFirebase.js";
import { useUpdateEffect } from "react-use";
import {motion} from 'framer-motion';

const Main = ({ theme }) => {
        const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]
        const [typeOfTask, setTypeOfTask] = useState("All"); //All,Active,Completed
        const [itemsNumbers, setItemsNumbers] = useState(Tasks.length);
        const [input, setInput] = useState("");
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        const [getDataFromFirebase, setDataToFirebase] = useFirebase();
        const StyledMainListSectionRef = useRef();
        const previousTasks = useRef(Tasks);

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
        useUpdateEffect(() => {
                getItemsNumbers("All", Tasks, setItemsNumbers);
                setDataToFirebase(Tasks, theme);
                if (Tasks.length > previousTasks.current.length) {
                        StyledMainListSectionRef.current.scrollTop =
                                StyledMainListSectionRef.current.scrollHeight;
                }
                previousTasks.current = Tasks;
        }, [Tasks]);
        useEffect(() => {
                getDataFromFirebase().then((data) => {
                        setTask(data[1][0]);
                });
        }, []);
        return (
                <StyledMain  initial={{ y: -100 }}
                transition={ { duration: 2 }}

                >
                        <StyledMainInputSectionOne
                                width={focusedInput === false ? 8 : 11}>
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
                                        onFocus={handelFocusedInput(
                                                setFocusedInput
                                        )}
                                        onBlur={handelBlurInput(
                                                setFocusedInput
                                        )}
                                />
                                <motion.button
                                //  whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.9 }}
                                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        onClick={(e) =>
                                                saveTask(
                                                        setTask,
                                                        setInput,
                                                        input,
                                                        Tasks
                                                )
                                        }>
                                        ADD
                                </motion.button>
                        </StyledMainInputSectionOne>

                        <StyledMainListSection
                                ref={StyledMainListSectionRef}
                                width={focusedInput === false ? 6 : 8}>
                                <TasksList
                                        tasks={Tasks}
                                        type={typeOfTask}
                                        callBack={changeTaskStatus}
                                        setTask={setTask}
                                />
                        </StyledMainListSection>

                        <StyledMainFooterSection
                                width={focusedInput === false ? 8 : 11}
                                >
                                <p>{itemsNumbers} items</p>
                                <div className='allActiveComplete'>
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
