import { memo } from "react";
import { showTasksInTheList } from "../../utils/utils.jsx";
import Tasks from "../tasks/index.jsx";

const TasksList = ({ tasks, type, callBack }) => {
 
        return (
                <ul>
                        {showTasksInTheList(tasks, type, Tasks,callBack)}
                </ul>
        );
};

export default memo(TasksList);
