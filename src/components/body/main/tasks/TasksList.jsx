import { memo } from "react";

const TasksList = ({ tasks, type, callBack }) => {
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
    return (
        <ul>
            {tasks.length > 0 &&
                type === "All" &&
                tasks.map((task, index) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === true ? (
                            <>
                                <input
                                    id={`checkbox-${task.ID}`}
                                    type='checkbox'
                                    checked={task.Completed}
                                    onChange={() => taskDone(task)}
                                />
                                <label
                                    htmlFor={`checkbox-${task.ID}`}
                                    style={{ textDecoration: "line-through" }}>
                                    {task.Description}
                                </label>
                            </>
                        ) : (
                            <>
                                <input
                                    id={`checkbox-${task.ID}`}
                                    type='checkbox'
                                    checked={task.Completed}
                                    onChange={() => taskDone(task)}
                                />
                                <label htmlFor={`checkbox-${task.ID}`}>
                                    {task.Description}
                                </label>
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
                                    id={`checkbox-${task.ID}`}
                                    type='checkbox'
                                    onChange={(e) => taskDone(task)}
                                />
                                <label htmlFor={`checkbox-${task.ID}`}>
                                    {task.Description}
                                </label>
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
                                    id={`checkbox-${task.ID}`}
                                    type='checkbox'
                                    onChange={(e) => taskDone(task)}
                                    checked
                                />
                                <label
                                    htmlFor={`checkbox-${task.ID}`}
                                    style={{ textDecoration: "line-through" }}>
                                    {task.Description}
                                </label>
                            </>
                        )}
                    </li>
                ))}
            {/* -[] refactor it and make it more readable maybe use switch statemetn */}
        </ul>
    );
};

export default memo(TasksList);
