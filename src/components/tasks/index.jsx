import React from "react";

const Tasks = ({ tasks, Type, callBack }) => {
        const taskDone = (task) => {
                if (task.Completed === false) {
                        // Checkbox is checked..
                        // send the key of the current list to the state and use it to update the state
                        callBack({ completed: true, key: task.ID });
                } else {
                        // Checkbox is not checked..
                        callBack({ completed: false, key: task.ID });
                }
        };
        return [...tasks].map((task) => (
                <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === eval(Type) && (
                                <>
                                        <input
                                                id={`checkbox-${task.ID}`}
                                                type='checkbox'
                                                checked={task.Completed}
                                                onChange={(e) => taskDone(task)}
                                        />
                                        <label
                                                {...(task.Completed ? {textDecoration:"line-through"} : {})}
                                                htmlFor={`checkbox-${task.ID}`}>
                                                {task.Description}
                                        </label>
                                </>
                        )}
                </li>
        ));
};

export default Tasks;
