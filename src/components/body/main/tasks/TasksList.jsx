import { useState, useEffect } from "react";

const TasksList = ({ tasks, type, callBack }) => {
    
    const taskDone = (task) => {
        console.log('task: ', task);
        if (task.Completed === false) {
            // Checkbox is checked..
            // send the key of the current list to the state and use it to update the state
            callBack({ completed: true, key: task.ID });
        } else {
            // Checkbox is not checked..

            callBack({ completed: false, key: task.ID });
        }
    };
    return (
        <ul>
            {tasks.length > 0 &&
                type === "All" &&
                tasks.map((task, index) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === true ? (
                            <>
                                <input
                                    type='checkbox'
                                    checked={task.Completed}
                                    onChange={() => taskDone(task)}
                                />
                                <span
                                    style={{ textDecoration: "line-through" }}>
                                    {task.Description}
                                </span>
                            </>
                        ) : (
                            <>
                                <input
                                    type='checkbox'
                                    checked={task.Completed}
                                    onChange={() => taskDone(task)}
                                />
                                <span>{task.Description}</span>
                            </>
                        )}
                    </li>
                ))}
            {tasks.length > 0 &&
                type === "Active" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === false && (
                            <>
                                <input
                                    type='checkbox'
                                    onChange={(e) => taskDone(task)}
                                />
                                <span>{task.Description}</span>
                            </>
                        )}
                    </li>
                ))}
            {tasks.length > 0 &&
                type === "Completed" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === true && (
                            <>
                                <input
                                    type='checkbox'
                                    onChange={(e) => taskDone(task)}
                                    checked
                                />
                                <span
                                    style={{ textDecoration: "line-through" }}>
                                    {task.Description}
                                </span>
                            </>
                        )}
                    </li>
                ))}
            {/* //-[]  look the same project in youtube and github to saw how other developer do it  */}
            {/* TODO refactor it and make it more readable maybe use switch statemetn */}
            {/* //TODO useMemo */}
            {/* TODO when you click span i will checked the box too */}
        </ul>
    );
};

export default TasksList;
