import React from "react";
import { taskDone } from "../../utils/utils.jsx";

const Tasks = ({ tasks, Type, callBack }) => {
        // window.innerWidth>900;
        //task.Description.split('').length > 30
        // fontSize:33,

        return [...tasks].map(
                (task) =>
                        task.Completed === eval(Type) && (
                                <li id={`task-${task.ID}`} key={task.ID}>
                                        <input
                                                id={`checkbox-${task.ID}`}
                                                type='checkbox'
                                                checked={task.Completed}
                                                onChange={(e) =>
                                                        taskDone(task, callBack)
                                                }
                                        />
                                        {task.Completed ? (
                                                window.innerWidth > 900 &&
                                                task.Description.split("")
                                                        .length > 30 ? (
                                                        <label
                                                                style={{
                                                                        textDecoration:
                                                                                "line-through",
                                                                        opacity: 0.6,
                                                                        fontSize: 33,
                                                                }}
                                                                htmlFor={`checkbox-${task.ID}`}>
                                                                {
                                                                        task.Description
                                                                }
                                                        </label>
                                                ) : (
                                                        <label
                                                                style={{
                                                                        textDecoration:
                                                                                "line-through",
                                                                        opacity: 0.6,
                                                                }}
                                                                htmlFor={`checkbox-${task.ID}`}>
                                                                {
                                                                        task.Description
                                                                }
                                                        </label>
                                                )
                                        ) : window.innerWidth > 900 &&
                                          task.Description.split("").length >
                                                  30 ? (
                                                <label
                                                        style={{
                                                                fontSize: 33,
                                                        }}
                                                        htmlFor={`checkbox-${task.ID}`}>
                                                        {task.Description}
                                                </label>
                                        ) : (
                                                <label
                                                        htmlFor={`checkbox-${task.ID}`}>
                                                        {task.Description}
                                                </label>
                                        )}
                                </li>
                        )
        );
};

export default Tasks;
