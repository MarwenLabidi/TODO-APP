import React from "react";

const TasksList = ({ tasks, type, callBack }) => {
    const taskDone = (e) => {
        if (e.target.checked) {
            // Checkbox is checked..
            e.target.nextSibling.style.textDecoration = "line-through";
            // send the key of the current list to the state and use it to update the state
            callBack({ add: true, key: e.target.parentNode.id });
        } else {
            // Checkbox is not checked..
            console.log("uncheked");
            e.target.nextSibling.style.textDecoration = "none";
            callBack({ completed: false, key: e.target.parentNode.id });
        }
    };
    return (
        // TODO make a condition to render the task with line-through or not
        // TODO render all the complete tasks or render all the active tasks
        <ul>
            {tasks.length > 0 &&
                type === "All" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        <input type='checkbox' onChange={(e) => taskDone(e)} />
                        <span> {task.Description}</span>
                    </li>
                ))}
        </ul>
    );
};

export default TasksList;
