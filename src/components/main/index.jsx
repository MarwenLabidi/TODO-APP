import { forwardRef } from "react";
import { useState, useEffect, useContext, useRef } from "react";
import TasksList from "../tasksList";
import {
        StyledMain,
        StyledMainInputSectionOne,
        StyledMainFooterSection,
        StyledMainListSection,
} from "../../setup/styled_components/styled_component";
import {
        handelBlurInput,
        handelFocusedInput,
        handlePosition,
        playSound,
} from "../../utils/utils";
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
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { TasksContext } from "../../setup/context/tasksContext";
const variants = {
        desktop: { y: -128 },
        mobile: { y: -145 },
};
import { authFireBaseContext } from "../../setup/context/authFireBaseContext";

const Main = ({ theme, setMainPostion }, ref) => {
        const [Tasks, setTask] = useContext(TasksContext); // [{ID,Description,Completed}]
        const [typeOfTask, setTypeOfTask] = useState("All"); //All,Active,Completed
        const [itemsNumbers, setItemsNumbers] = useState(Tasks.length);
        const [input, setInput] = useState("");
        const [focusedInput, setFocusedInput] = useContext(FocusedInputContext);
        const [getDataFromFirebase, setDataToFirebase] = useFirebase();
        const StyledMainListSectionRef = useRef();
        const previousTasks = useRef(Tasks);
        const { refMain, refFooter } = ref.current;
        const [currentUser, setCurrentUser] = useContext(authFireBaseContext);

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
                if (currentUser) {
                        // User is signed in, see docs for a list of available properties
                        setDataToFirebase(Tasks, theme, currentUser);
                        // ...
                } else {
                        localStorage.setItem(
                                "TasksOffline",
                                JSON.stringify(Tasks)
                        );
                }

                if (Tasks.length > previousTasks.current.length) {
                        StyledMainListSectionRef.current.scrollTop =
                                StyledMainListSectionRef.current.scrollHeight;
                }
                (function playSoundOfreorderTasks() {
                        let previousTasksarr = [...previousTasks.current];
                        let newTasks = [...Tasks];
                        if (
                                previousTasksarr.length < 1 ||
                                newTasks.length < 1
                        ) {
                                return;
                        }
                        let isReorder = false;
                        let minLength =
                                newTasks.length > previousTasksarr.length
                                        ? previousTasksarr.length
                                        : newTasks.length;
                        for (let i = 0; i < minLength; i++) {
                                if (previousTasksarr[i].ID !== newTasks[i].ID) {
                                        isReorder = true;
                                        break;
                                }
                        }
                        if (isReorder) {
                                playSound("/sounds/reorder.mp3");
                        }
                })();
                previousTasks.current = Tasks;
        }, [Tasks]);
        useEffect(() => {
                let timer1 = setTimeout(
                        () => handlePosition(refMain, setMainPostion),
                        2000
                );
                return () => {
                        clearTimeout(timer1);
                };
        }, [Tasks, typeOfTask]);
        useEffect(() => {
                if (currentUser) {
                        getDataFromFirebase(currentUser).then((data) => {
                                setTask([]);
                                setTask(data[1][0]);
                        });
                        // ...
                } else {
                        // No user is signed in.
                        setTask([]); // delete the task whe you log out
                        const textFromStorage =
                                localStorage.getItem("TasksOffline");
                        if (JSON.parse(textFromStorage).length > 0) {
                                setTask(JSON.parse(textFromStorage));
                        }
                }
        }, [currentUser]);

        return (
                <StyledMain
                        variants={variants}
                        initial={isMobile ? "mobile" : "desktop"}
                        transition={{ duration: 2 }}
                        ref={refMain}>
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
                                        transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 17,
                                        }}
                                        onClick={(e) => {
                                                saveTask(
                                                        setTask,
                                                        setInput,
                                                        input,
                                                        Tasks
                                                );
                                                playSound(
                                                        "/sounds/buttons.mp3"
                                                );
                                        }}>
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
                                ref={refFooter}
                                width={focusedInput === false ? 8 : 11}>
                                <p>{itemsNumbers} items</p>
                                <div className='allActiveComplete'>
                                        <button
                                                onClick={() => {
                                                        handelStateButtons(
                                                                "All",
                                                                setTypeOfTask,
                                                                Tasks,
                                                                setItemsNumbers
                                                        );
                                                        playSound(
                                                                "/sounds/buttons.mp3"
                                                        );
                                                }}>
                                                All
                                        </button>
                                        <button
                                                onClick={() => {
                                                        handelStateButtons(
                                                                "Active",
                                                                setTypeOfTask,
                                                                Tasks,
                                                                setItemsNumbers
                                                        );
                                                        playSound(
                                                                "/sounds/buttons.mp3"
                                                        );
                                                }}>
                                                Active
                                        </button>
                                        <button
                                                onClick={() => {
                                                        handelStateButtons(
                                                                "Completed",
                                                                setTypeOfTask,
                                                                Tasks,
                                                                setItemsNumbers
                                                        );
                                                        playSound(
                                                                "/sounds/buttons.mp3"
                                                        );
                                                }}>
                                                Completed
                                        </button>
                                </div>
                                <button
                                        onClick={() => {
                                                playSound(
                                                        "/sounds/buttons.mp3"
                                                );
                                                (function playDeleteSound() {
                                                        setTimeout(() => {
                                                                console.log(
                                                                        `deleted`
                                                                );
                                                                Tasks.forEach(
                                                                        (
                                                                                task
                                                                        ) => {
                                                                                if (
                                                                                        task.Completed ===
                                                                                        true
                                                                                ) {
                                                                                        playSound(
                                                                                                "/sounds/delete.mp3"
                                                                                        );
                                                                                }
                                                                        }
                                                                );
                                                        }, 500);
                                                })();
                                                clearCompletedTasks(
                                                        Tasks,
                                                        setTask
                                                );
                                        }}>
                                        Clear completed
                                </button>
                        </StyledMainFooterSection>
                </StyledMain>
        );
};

export default forwardRef(Main);
