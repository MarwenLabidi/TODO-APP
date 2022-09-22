import { v4 as uuidv4 } from "uuid";
//FIXME? make the animation exit better flip on and out and than tetnater out of the screen to my face

export const showTasksInTheList = (
        tasks,
        type,
        Component,
        callBack,
        motion
) => {
        let f = "false";
        let t = "true";
        let taskCompleted = "task.Completed";
        if (tasks.length < 1) {
                return;
        }
        if (type === "Active") {
                return (
                        <motion.div
                        layout
                                exit={{
                                       
                                        opacity: 0,
                                }}
                                transition={{
                                        ease: "easeOut",
                                        duration: 1.5,
                                        layout: { type: "spring", stiffness: 500 },
                                }}>
                                <Component
                                        tasks={tasks}
                                        Type={f}
                                        callBack={callBack}
                                />
                        </motion.div>
                );
        } else if (type === "Completed") {
                return (
                        <motion.div
                        layout
                                exit={{
                                       
                                        opacity: 0,
                                }}
                                transition={{
                                        ease: "easeOut",
                                        duration: 1.5,
                                        layout:{ type: "spring", stiffness: 500 },
                                }}>
                                <Component
                                        tasks={tasks}
                                        Type={t}
                                        callBack={callBack}
                                />
                        </motion.div>
                );
        } else {
                return (
                        <motion.div
                        layout
                                exit={{
                                       
                                        opacity: 0,
                                }}
                                transition={{
                                        ease: "easeOut",
                                        duration: 1.5,
                                        layout:{ type: "spring", stiffness: 500 },
                                }}>
                                <Component
                                        tasks={tasks}
                                        Type={taskCompleted}
                                        callBack={callBack}
                                />
                        </motion.div>
                );
        }
};

export const taskDone = (task, callBack) => {
        if (task.Completed === false) {
                // Checkbox is checked..
                // send the key of the current list to the state and use it to update the state
                callBack({ completed: true, key: task.ID });
        } else {
                // Checkbox is not checked..
                callBack({ completed: false, key: task.ID });
        }
};

export const saveTask = (setTask, setInput, input, Tasks) => {
        let content = input;
        if (!content) {
                return;
        }
        setTask([
                ...Tasks,
                { ID: uuidv4(), Description: content, Completed: false },
        ]);
        setInput("");
};
export const clearCompletedTasks = (Tasks, setTask) => {
        let allTasks = [...Tasks];
        let newTasks = allTasks.filter((task) => task.Completed === false);
        setTask(newTasks);
};

export const getItemsNumbers = (type, Tasks, setItemsNumbers) => {
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

export const handelStateButtons = (
        type,
        setTypeOfTask,
        Tasks,
        setItemsNumbers
) => {
        setTypeOfTask(type);
        getItemsNumbers(type, Tasks, setItemsNumbers);
};

export const handelInput = (e, setInput) => {
        setInput(e.target.value);
};

export const handelFocusedInput = (setFocusedInput) => {
        return () => {
                setFocusedInput(true);
        };
};
export const handelBlurInput = (setFocusedInput) => {
        return () => {
                setFocusedInput(false);
        };
};
