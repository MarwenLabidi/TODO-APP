import React from "react";

const TasksList = ({tasks,type}) => {
    const taskDone = (e) => {
        if(e.target.checked) {
            // Checkbox is checked..
            console.log(e.target.nextSibling);
            e.target.nextSibling.style.textDecoration = "line-through";
            //TODO send the key of the current list to the state and use it to update the state
        } else {
            // Checkbox is not checked..
            console.log('uncheked');
            e.target.nextSibling.style.textDecoration = "none";

        }
    }
    return (
        // TODO make a condition to render the task with line-through or not
        // TODO render all the complete tasks or render all the active tasks  
        <ul>
            {tasks.length > 0 && type==='All'&&
                tasks.map((task) => (
                    <li key={task.ID}>
                        <input type='checkbox' onChange={(e)=>taskDone(e)} />
                        <span> {task.Description}</span>
                    </li>
                ))}
        </ul>
    );
};

export default TasksList;
