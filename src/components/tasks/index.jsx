import React from "react";
import { taskDone } from "../../utils/utils.jsx";
import { motion, AnimatePresence } from "framer-motion";
const list = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
};
{
}

// TODO? add transition inside to list and add transition to the parrent ul
//TODO? add delete animation first to the list and then to the parrent ul
//TODO? add transion inside exit animation and find away to add exit to the list variiant

const Tasks = ({ tasks, Type, callBack }) => {
        return [...tasks].map(
                (task) =>
                        task.Completed === eval(Type) && (
                                <AnimatePresence key={task.ID}>
                                        <motion.li
                                                variants={list}
                                                initial='hidden'
                                                animate='visible'
                                                // FIXME? EXIT ANIMATION DONT WORK
                                                exit='hidden'
                                                // exit={{ x: -300, opacity: 0 }}
                                                // transition={{ ease: "easeOut", duration: 6.5 }}

                                                id={`task-${task.ID}`}
                                                key={task.ID}>
                                                <input
                                                        id={`checkbox-${task.ID}`}
                                                        type='checkbox'
                                                        checked={task.Completed}
                                                        onChange={(e) =>
                                                                taskDone(
                                                                        task,
                                                                        callBack
                                                                )
                                                        }
                                                />
                                                {task.Completed ? (
                                                        window.innerWidth >
                                                                900 &&
                                                        task.Description.split(
                                                                ""
                                                        ).length > 30 ? (
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
                                                  task.Description.split("")
                                                          .length > 30 ? (
                                                        <label
                                                                style={{
                                                                        fontSize: 33,
                                                                }}
                                                                htmlFor={`checkbox-${task.ID}`}>
                                                                {
                                                                        task.Description
                                                                }
                                                        </label>
                                                ) : (
                                                        <label
                                                                htmlFor={`checkbox-${task.ID}`}>
                                                                {
                                                                        task.Description
                                                                }
                                                        </label>
                                                )}
                                        </motion.li>
                                </AnimatePresence>
                        )
        );
};

export default Tasks;
