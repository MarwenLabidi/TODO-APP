import { AnimatePresence, motion,Reorder } from "framer-motion";
import { memo } from "react";
import { showTasksInTheList } from "../../utils/utils.jsx";
import Tasks from "../tasks/index.jsx";

const TasksList = ({ tasks, type, callBack, setTask }) => {
        return (
                        <Reorder.Group
                        as='div'
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
        );
};

export default memo(TasksList);
