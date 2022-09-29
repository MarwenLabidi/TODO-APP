import { AnimatePresence, motion,Reorder } from "framer-motion";
import { memo } from "react";
import { showTasksInTheList } from "../../utils/utils.jsx";
import Tasks from "../tasks/index.jsx";

const TasksList = ({ tasks, type, callBack, setTask }) => {
        return (
                <ul>
                        <Reorder.Group
                                axis='y'
                                values={tasks}
                                onReorder={setTask}>
                                <AnimatePresence>
                                        {showTasksInTheList(
                                                tasks,
                                                type,
                                                Tasks,
                                                callBack,
                                                motion,
                                                setTask
                                        )}
                                </AnimatePresence>
                        </Reorder.Group>
                </ul>
        );
};

export default memo(TasksList);
