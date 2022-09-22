import { AnimatePresence,motion } from "framer-motion";
import { memo } from "react";
import { showTasksInTheList } from "../../utils/utils.jsx";
import Tasks from "../tasks/index.jsx";

const TasksList = ({ tasks, type, callBack }) => {
        return (
                <motion.ul layout    transition={{
                        ease: "easeOut",
                        duration: 1.5,
                        layout:{type:'spring',stiffness:500},
                }} >
                        <AnimatePresence >
                                {showTasksInTheList(
                                        tasks,
                                        type,
                                        Tasks,
                                        callBack,
                                        motion
                                )}
                        </AnimatePresence>
                </motion.ul>
        );
};

export default memo(TasksList);
