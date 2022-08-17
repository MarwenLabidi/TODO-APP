import React from "react";

const TasksList = ({ tasks, type, callBack }) => {
    const taskDone = (e) => {
        if (e.target.checked) {
            // Checkbox is checked..
            // send the key of the current list to the state and use it to update the state
            callBack({ completed: true, key: e.target.parentNode.id });
        } else {
            // Checkbox is not checked..

            callBack({ completed: false, key: e.target.parentNode.id });
        }
    };
    // TODO use controlled to all the input
    return (
        <ul>
            {tasks.length > 0 &&
                type === "All" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === true ? (
                            <>
                                <input
                                    checked
                                    type='checkbox'
                                    onChange={(e) => taskDone(e)}
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
                                    onChange={(e) => taskDone(e)}
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
                                    onChange={(e) => taskDone(e)}
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
                                    onChange={(e) => taskDone(e)}
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
