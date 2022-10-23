import { v4 as uuidv4 } from "uuid";
import { isBrowser } from "react-device-detect";

export const showTasksInTheList = (
        tasks,
        type,
        Component,
        callBack,
        motion,
        setTask
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
                                        layout: {
                                                type: "spring",
                                                stiffness: 500,
                                        },
                                }}>
                                <Component
                                        tasks={tasks}
                                        Type={f}
                                        callBack={callBack}
                                        setTask={setTask}
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
                                        layout: {
                                                type: "spring",
                                                stiffness: 500,
                                        },
                                }}>
                                <Component
                                        tasks={tasks}
                                        Type={t}
                                        callBack={callBack}
                                        setTask={setTask}
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
                                        layout: {
                                                type: "spring",
                                                stiffness: 500,
                                        },
                                }}>
                                <Component
                                        tasks={tasks}
                                        Type={taskCompleted}
                                        callBack={callBack}
                                        setTask={setTask}
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
        playSound("/sounds/addTask.mp3");
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

//function to play sound with the click of the button
export const playSound = (sound, sound2 = null) => {
        let audio = new Audio(sound);
        audio.play();
        if (sound2) {
                setTimeout(() => {
                        let audio2 = new Audio(sound2);
                        audio2.play();
                }, 1000);
        }
};

export const handlePosition = (elementRef, setState) => {
        let element = elementRef.current;
        let x = element.getBoundingClientRect().left;
        let y = element.getBoundingClientRect().top;
        let bottom = element.getBoundingClientRect().bottom;
        let right = element.getBoundingClientRect().right;
        setState({ x, y, bottom, right });
};

export const loginFunction = (ref) => {
        ref.current.showModal();
};

export const hideDialogueAnimation = (dialog) => {
        const hide = () => {
                dialog.classList.remove("hide");
                dialog.close();
                dialog.removeEventListener("animationend", hide);
        };
        return () => {
                dialog.classList.add("hide");
                dialog.addEventListener("animationend", hide, false);
        };
};

export const MetaMaskLogin = (auth, signInWithCustomToken) => {
        console.log(`metamask login`);
        const url = new URL("https://server-custom-auth-todo-app.vercel.app/");

        if (window.ethereum) {
                window.ethereum
                        .request({ method: "eth_requestAccounts" })
                        .then((res) => {
                                // Return the address of the wallet
                                console.log(res);
                                fetch(url)
                                        .then((response) => {
                                                response.json().then(
                                                        (token) => {
                                                                signInWithCustomToken(
                                                                        auth,
                                                                        token
                                                                )
                                                                        .then(
                                                                                (
                                                                                        userCredential
                                                                                ) => {
                                                                                        // Signed in
                                                                                        const user =
                                                                                                userCredential.user;
                                                                                        console.log(
                                                                                                "user: ",
                                                                                                user
                                                                                        );
                                                                                        // ...
                                                                                }
                                                                        )
                                                                        .catch(
                                                                                (
                                                                                        error
                                                                                ) => {
                                                                                        console.log(
                                                                                                "error: ",
                                                                                                error
                                                                                        );
                                                                                        const errorCode =
                                                                                                error.code;
                                                                                        const errorMessage =
                                                                                                error.message;
                                                                                        // ...
                                                                                }
                                                                        );
                                                        }
                                                );
                                        })
                                        .then((data) => console.log(data))
                                        .catch((err) => console.error(err));
                        });
        } else {
                isBrowser
                        ? alert("install metamask extension!!")
                        : alert("use metamask app browser!!");
        }
};

