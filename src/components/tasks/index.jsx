import React from "react";
import { taskDone } from "../../utils/utils.jsx";
import { motion, AnimatePresence,useAnimationControls } from "framer-motion";

const list = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
};
{
}

const Tasks = ({ tasks, Type, callBack }) => {
        //FIXME? make the li in the list to be a component and import it 

        const controls = [...tasks].map(
                (task) => useAnimationControls()
        );
                
        
        return (
                <AnimatePresence>
                        {[...tasks].map(
                                (task,index) =>
                                        task.Completed === eval(Type) && (
                                                <motion.li
                                                        layout
                                                        variants={list}
                                                        initial='hidden'
                                                        animate='visible'
                                                        whileTap={{ scale: 0.9 }}

                                                        exit={{
                                                                opacity: 0,
                                                        }}
                                                        transition={{
                                                                layout: {
                                                                        type: "spring",
                                                                        stiffness: 500,
                                                                },
                                                        }}
                                                        id={`task-${task.ID}`}
                                                        key={task.ID}>
                                                        <motion.input
                                                        animate={controls[index]}
                                                                onClick={(
                                                                        e
                                                                ) => {
                                                                        controls[index].start({ scale: [0.2,1.3,1] })
                                                                }}
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
