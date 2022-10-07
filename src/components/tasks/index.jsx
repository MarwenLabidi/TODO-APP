import React from "react";
import { playSound, taskDone } from "../../utils/utils.jsx";
import {
        motion,
        AnimatePresence,
        useAnimationControls,
        Reorder,
} from "framer-motion";

const list = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
};
{
}

let dragableElement=null

const Tndex = ({ task, Type, index, callBack }) => {
        const controls = useAnimationControls();
//TODO? useeffect on tasks and create function to know everytime the task change the order play a sound
        return (
                task.Completed === eval(Type) && (
                        <Reorder.Item
                                as={motion.li}
                                layout
                                variants={list}
                                initial='hidden'
                                animate='visible'
                                whileTap={{ scale: 0.9 }}
                                value={task}
                                onDragStart={(event, info) =>{
                                        dragableElement=event.target
                                        dragableElement.style.pointerEvents = "none";
                                        playSound('/sounds/dragStart.mp3')
                                }}
                                onDragEnd={(event, info) =>{
                                        dragableElement.style.removeProperty("pointer-events");  
                                        playSound('/sounds/dragEnd.mp3')   

                                }}
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
                                        animate={controls}
                                        onClick={(e) => {
                                                controls.start({
                                                        scale: [0.2, 1.3, 1],
                                                });

                                        }}
                                        id={`checkbox-${task.ID}`}
                                        type='checkbox'
                                        checked={task.Completed}
                                        onChange={(e) =>{

                                                taskDone(task, callBack);
                                                playSound('/sounds/checkMark.mp3') 
                                        }
                                        }
                                />
                                {task.Completed ? (
                                        window.innerWidth > 900 &&
                                        task.Description.split("").length >
                                                30 ? (
                                                <label
                                                        style={{
                                                                textDecoration:
                                                                        "line-through",
                                                                opacity: 0.6,
                                                                fontSize: 33,
                                                        }}
                                                        htmlFor={`checkbox-${task.ID}`}>
                                                        {task.Description}
                                                </label>
                                        ) : (
                                                <label
                                                        style={{
                                                                textDecoration:
                                                                        "line-through",
                                                                opacity: 0.6,
                                                        }}
                                                        htmlFor={`checkbox-${task.ID}`}>
                                                        {task.Description}
                                                </label>
                                        )
                                ) : window.innerWidth > 900 &&
                                  task.Description.split("").length > 30 ? (
                                        <label
                                                style={{
                                                        fontSize: 33,
                                                }}
                                                htmlFor={`checkbox-${task.ID}`}>
                                                {task.Description}
                                        </label>
                                ) : (
                                        <label htmlFor={`checkbox-${task.ID}`}>
                                                {task.Description}
                                        </label>
                                )}
                        </Reorder.Item>
                )
        );
};

const Tasks = ({ tasks, Type, callBack, setTask }) => {
        return (
                <AnimatePresence>
                        {[...tasks].map((task, index) => (
                                <Tndex
                                        callBack={callBack}
                                        task={task}
                                        Type={Type}
                                        index={index}
                                        key={task.ID}
                                />
                        ))}
                </AnimatePresence>
        );
};

export default Tasks;
