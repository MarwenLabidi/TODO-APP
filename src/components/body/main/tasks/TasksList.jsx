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
    return (
        <ul>
            {tasks.length > 0 &&
                type === "All" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        <input type='checkbox' onChange={(e) => taskDone(e)} />
                        {task.Completed === true ? (
                            <span style={{ textDecoration: "line-through" }}>
                                {task.Description}
                            </span>
                        ) : (
                            <span>{task.Description}</span>
                        )}
                    </li>
                ))}
            {/* FIXME */}

            {tasks.length > 0 &&
                type === "Active" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        <input type='checkbox' onChange={(e) => taskDone(e)} />
                        {task.Completed === true ? (
                            <span style={{ textDecoration: "line-through" }}>
                                {task.Description}
                            </span>
                        ) : (
                            <span>{task.Description}</span>
                        )}
                    </li>
                ))}
            {/* FIXME stop showing empty input*/}
            {tasks.length > 0 &&
                type === "Completed" &&
                tasks.map((task) => (
                    <li id={`task-${task.ID}`} key={task.ID}>
                        <input type='checkbox' onChange={(e) => taskDone(e)} />
                        {task.Completed === true && (
                            <span style={{ textDecoration: "line-through" }}>
                                {task.Description}
                            </span>
                        )}
                    </li>
                ))}
            {/* NOTE make the input checked when you chouse the completed tasks */}
            {/* //-[]  look the same project in youtube and github to saw how other developer do it  */}
            {/* TODO refactor it and make it more readable maybe use switch statemetn */}
        </ul>
    );
};

export default TasksList;
