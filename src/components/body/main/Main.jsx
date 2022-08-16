import React from "react";
import { useState, useEffect } from "react";
import TasksList from "./tasks/TasksList";

const Main = () => {
    const [Tasks, setTask] = useState([]); // [{ID,Description,Completed}]
    const [typeOfTask,setTypeOfTask]=useState('All');//All,Active,Completed
    
    const saveTask = (e) => {
        // console.log(e.target.value);
        setTask([
            ...Tasks,
            { ID: Tasks.length, Description: e.target.value, Completed: false },
        ]);
        e.target.value = "";
    };
    //TODO callback function to update the state of the checkbox
    const changeTaskStatus = (position) => {}


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
                //FIXME fix the saveTask to work with click event
                <button onClick={(e) => saveTask(e)}>add</button>
            </div>

            <section>
                <TasksList tasks={Tasks} type={typeOfTask} />
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
