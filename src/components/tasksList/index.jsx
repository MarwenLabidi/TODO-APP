import { AnimatePresence,motion } from "framer-motion";
import { memo } from "react";
import { showTasksInTheList } from "../../utils/utils.jsx";
import Tasks from "../tasks/index.jsx";

const TasksList = ({ tasks, type, callBack }) => {
        return (
                <ul>
                        {/* FIXME? */}
                        <AnimatePresence >
                                {showTasksInTheList(
                                        tasks,
                                        type,
                                        Tasks,
                                        callBack,
                                        motion
                                )}
                        </AnimatePresence>
                </ul>
        );
};

export default memo(TasksList);
