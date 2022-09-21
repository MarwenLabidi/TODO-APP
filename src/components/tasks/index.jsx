import React from "react";
import { taskDone } from "../../utils/utils.jsx";
import { motion, AnimatePresence } from "framer-motion";

const list = {
        hidden: { opacity: 0 ,x:300 },
        visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
};
{
}
//FIXME? share element between multiple component


// FIXME? add animation get from me to the screen and make half flip on an out a animation
//FIXME? make the animation exit better flip on and out and than tetnater out of the screen to my face


const Tasks = ({ tasks, Type, callBack }) => {
        return (
                <AnimatePresence>
                        {[...tasks].map(
                                (task) =>
                                        task.Completed === eval(Type) && (
                                                <motion.li
                                                        variants={list}
                                                        initial='hidden'
                                                        animate='visible'
                                                        // exit='hidden'
                                                        exit={{
                                                                x: -300,
                                                                opacity: 0,
                                                        }}
                                                        transition={{
                                                                ease: "easeOut",
                                                                duration: 1.5,
                                                        }}
                                                        id={`task-${task.ID}`}
                                                        key={task.ID}>
                                                        <input
                                                                id={`checkbox-${task.ID}`}
                                                                type='checkbox'
                                                                checked={
                                                                        task.Completed
                                                                }
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
                                                                ).length >
                                                                        30 ? (
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
                                                        ) : window.innerWidth >
                                                                  900 &&
                                                          task.Description.split(
                                                                  ""
                                                          ).length > 30 ? (
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
                                        )
                        )}
                </AnimatePresence>
        );
};

export default Tasks;
