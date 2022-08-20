import React from "react";
import {taskDone} from "../../utils/utils.jsx";

const Tasks = ({ tasks, Type, callBack }) => {
        return [...tasks].map((task) => (
                <li id={`task-${task.ID}`} key={task.ID}>
                        {task.Completed === eval(Type) && (
                                <>
                                        <input
                                                id={`checkbox-${task.ID}`}
                                                type='checkbox'
                                                checked={task.Completed}
                                                onChange={(e) => taskDone(task,callBack)}
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
